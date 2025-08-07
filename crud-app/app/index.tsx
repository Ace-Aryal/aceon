import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import {
  Appearance,
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";
import Animated, { LinearTransition } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Index() {
  const [loaded, error] = useFonts({
    Inter_500Medium,
  });
  // wait for it to at least render the font

  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [todos, setTodos] = useState<
    | {
        id: number;
        title: string;
        completed: boolean;
      }[]
    | null
  >(null);
  const [text, setText] = useState("");
  const addTodo = () => {
    setTodos((prev) =>
      prev
        ? [
            {
              id: new Date().getSeconds(),
              title: text,
              completed: false,
            },
            ...prev,
          ]
        : [
            {
              id: new Date().getSeconds(),
              title: text,
              completed: false,
            },
          ]
    );
    setText("");
  };
  const toggleComplete = (id: number) => {
    const newTodos = todos?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos ?? null);
  };
  const deleteTodo = (id: number) => {
    const newTodos = todos?.filter((todo) => todo.id !== id);
    setTodos(newTodos ?? null);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("todoApp");
        const storageTodos:
          | {
              id: number;
              title: string;
              completed: boolean;
            }[]
          | null = jsonValue !== null ? JSON.parse(jsonValue) : null;
        if (storageTodos && storageTodos.length) {
          setTodos(storageTodos.sort((a, b) => a.id - b.id));
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(todos);
        AsyncStorage.setItem("todoApp", jsonValue);
      } catch (error) {}
    };
  }, [todos?.length]);
  if (!loaded && !error) {
    return null;
  }
  return (
    <View
      style={{
        flex: 1,
      }}
      className={cn("flex-1 p-2 bg-white ", {
        "bg-zinc-950": isDarkMode,
      })}
    >
      <View className="flex-row w-full gap-2">
        <TextInput
          style={{
            fontFamily: "Inter_500Medium",
          }}
          value={text}
          placeholderTextColor={isDarkMode ? "white" : "black"}
          onChangeText={setText}
          className={cn(
            "border border-gray-500 flex-1  rounded-lg text-zinc-950 ",
            {
              "text-gray-50": isDarkMode,
            }
          )}
          placeholder="Enter todo...."
        />
        <Pressable
          onPress={() => {
            addTodo();
          }}
          disabled={text.length < 1}
          className={cn(
            "self-center mt-2 bg-gray-800 px-4 py-4 w-fit rounded-lg active:bg-gray-700 ",
            {
              "bg-gray-300 active:bg-gray-200": !isDarkMode,
            }
          )}
        >
          <Text
            className={cn("text-zinc-950", {
              "text-gray-50": isDarkMode,
            })}
          >
            Add
          </Text>
        </Pressable>
      </View>

      {todos && todos.length > 0 ? (
        <View className="flex-1 mt-4">
          <Animated.FlatList
            data={todos}
            keyExtractor={(todo) => todo.id.toString()}
            itemLayoutAnimation={LinearTransition}
            keyboardDismissMode="on-drag"
            ItemSeparatorComponent={() => (
              <View className="h-2 w-full bg-none" />
            )}
            renderItem={(todo) => (
              <View
                onTouchStart={() => toggleComplete(todo.item.id)}
                className={cn(
                  "flex flex-row bg-gray-100  p-2 rounded-lg flex-1 items-center justify-between",
                  {
                    "bg-gray-700": isDarkMode,
                  }
                )}
              >
                <Text
                  style={{
                    fontFamily: "Inter_500Medium",
                  }}
                  className={cn("text-zinc-950 w-4/5 text-lg", {
                    "text-gray-50": isDarkMode,
                    "line-through text-gray-500": todo.item.completed,
                  })}
                >
                  {todo.item.title}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteTodo(todo.item.id);
                  }}
                  className="w-1/5 flex flex-row justify-center"
                >
                  <Ionicons
                    color={"red"}
                    size={20}
                    className="text-red-500"
                    name="trash-bin-outline"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ) : (
        <Text
          className={cn("text-zinc-950 text-center mt-4", {
            "text-gray-50": isDarkMode,
          })}
        >
          No todos yet
        </Text>
      )}
    </View>
  );
}
