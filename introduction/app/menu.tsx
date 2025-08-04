import { View, Text, Appearance, FlatList, Image } from "react-native";
import React from "react";
import { cn } from "@/lib/utils";
const coffeeMenu = [
  {
    id: "1",
    name: "Espresso",
    description: "Rich and bold shot of pure coffee.",
    image:
      "https://images.unsplash.com/photo-1572441710530-72a5cdec6f46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam.",
    image:
      "https://images.unsplash.com/photo-1610907292700-90678384c6e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3",
    name: "Latte",
    description: "Smooth espresso with lots of steamed milk.",
    image:
      "https://images.unsplash.com/photo-1559305616-3f30e0fabcbb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "4",
    name: "Americano",
    description: "Espresso diluted with hot water.",
    image:
      "https://images.unsplash.com/photo-1607860109311-4b0b66a1b32f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk.",
    image:
      "https://images.unsplash.com/photo-1574169208507-843761748a06?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "6",
    name: "Flat White",
    description: "Silky smooth milk over a strong espresso.",
    image:
      "https://images.unsplash.com/photo-1587731256042-65e5c04ba4aa?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "7",
    name: "Macchiato",
    description: "Espresso with a dollop of foamed milk.",
    image:
      "https://images.unsplash.com/photo-1510626176961-4b57d4fbad01?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "8",
    name: "Cold Brew",
    description: "Slow-steeped coffee served chilled.",
    image:
      "https://images.unsplash.com/photo-1587387119725-49146c3d6d86?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "9",
    name: "Iced Coffee",
    description: "Fresh brewed coffee served over ice.",
    image:
      "https://images.unsplash.com/photo-1598514982846-13da60f2b0ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10",
    name: "Affogato",
    description: "Espresso poured over vanilla ice cream.",
    image:
      "https://images.unsplash.com/photo-1630439591440-e4d8e2dcb9f0?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Menu() {
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";
  const Seperator = () => <View className="h-px w-full bg-gray-400" />;
  return (
    <View
      className={cn("flex-1", {
        "bg-zinc-950 ": colorScheme === "dark",
        " text-gray-900": colorScheme === "light",
      })}
    >
      <FlatList
        data={coffeeMenu}
        ListFooterComponent={() => (
          <Text
            className={cn("text-center  ", {
              "text-gray-50": isDarkMode,
            })}
          >
            End of menu
          </Text>
        )}
        ListEmptyComponent={() => (
          <Text
            className={cn("text-center", {
              "text-gray-50": isDarkMode,
            })}
          >
            No menu found
          </Text>
        )}
        ItemSeparatorComponent={Seperator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            className={cn("flex flex-row rounded-xl border border-gray-800", {
              "border-gray-100": isDarkMode,
            })}
          >
            <View className="w-1/2 p-2">
              <Text
                className={cn("text-xl font-bold ", {
                  "text-gray-50": isDarkMode,
                })}
              >
                {item.name}
              </Text>
              <Text
                className={cn("text font-semibold ", {
                  "text-gray-50": isDarkMode,
                })}
              >
                {item.description}
              </Text>
            </View>
            <Image
              alt={item.name}
              className="h-32 w-1/2 object-cover"
              source={{ uri: item.image }}
            />
          </View>
        )}
      />
    </View>
  );
}
