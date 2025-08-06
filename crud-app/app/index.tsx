import { cn } from "@/lib/utils";
import { useState } from "react";
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
export default function Index() {
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [todos, setTodos] = useState<
    | {
        id: string;
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
            ...prev,
            {
              id: text + Math.random(),
              title: text,
              completed: false,
            },
          ]
        : [
            {
              id: text + Math.random(),
              title: text,
              completed: false,
            },
          ]
    );
  };
  const toggleComplete = (id: string) => {
    const newTodos = todos?.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos ?? null);
    setText("");
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos?.filter((todo) => todo.id !== id);
    setTodos(newTodos ?? null);
  };
  return (
    <View
      style={{
        flex: 1,
      }}
      className={cn("flex-1 p-2 bg-white ", {
        "bg-zinc-950": isDarkMode,
      })}
    >
      <TextInput
        value={text}
        onChangeText={setText}
        className={cn("border border-gray-500  rounded-lg text-zinc-950 ", {
          "text-gray-50": isDarkMode,
        })}
        placeholder="Enter todo...."
      />
      <Pressable
        onPress={() => {
          addTodo();
        }}
        disabled={text.length < 1}
        className={cn(
          "self-center mt-2 bg-gray-800 px-4 py-2 rounded-lg active:bg-gray-700 ",
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
          Add Todo
        </Text>
      </Pressable>
      {todos && todos.length > 0 ? (
        <View className="flex-1">
          <FlatList
            data={todos}
            keyExtractor={(todo) => todo.id}
            renderItem={(todo) => (
              <View
                onTouchStart={() => toggleComplete(todo.item.id)}
                className={cn(
                  "flex flex-row gap-2 flex-1 items-center justify-between"
                )}
              >
                <Text
                  className={cn("text-zinc-950 w-4/5", {
                    "text-gray-50": isDarkMode,
                    "line-through": todo.item.completed,
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
                    className="text-red-500 h-5 w-5"
                    name="trash-bin-outline"
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      ) : (
        <Text
          className={cn("text-zinc-950", {
            "text-gray-50": isDarkMode,
          })}
        >
          No todos yet
        </Text>
      )}
    </View>
  );
}
