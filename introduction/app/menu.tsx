import { View, Text, Appearance, FlatList, Image } from "react-native";
import React from "react";
import { cn } from "@/lib/utils";
const coffeeMenu = [
  {
    id: "1",
    name: "Espresso",
    description: "Rich and bold shot of pure coffee.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "2",
    name: "Cappuccino",
    description: "Espresso with steamed milk and foam.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "3",
    name: "Latte",
    description: "Smooth espresso with lots of steamed milk.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "4",
    name: "Americano",
    description: "Espresso diluted with hot water.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "5",
    name: "Mocha",
    description: "Espresso with chocolate and steamed milk.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "6",
    name: "Flat White",
    description: "Silky smooth milk over a strong espresso.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "7",
    name: "Macchiato",
    description: "Espresso with a dollop of foamed milk.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "8",
    name: "Cold Brew",
    description: "Slow-steeped coffee served chilled.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "9",
    name: "Iced Coffee",
    description: "Fresh brewed coffee served over ice.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
  {
    id: "10",
    name: "Affogato",
    description: "Espresso poured over vanilla ice cream.",
    image:
      "https://images.pexels.com/photos/14755085/pexels-photo-14755085.jpeg",
  },
];

export default function Menu() {
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";
  const Seperator = () => <View className="h-px w-3/5 mx-auto bg-gray-400" />;
  return (
    <View
      className={cn("flex-1 px-2", {
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
            className={cn(
              "flex my-2 flex-row rounded-xl border border-gray-800",
              {
                "border-gray-50": isDarkMode,
              }
            )}
          >
            <View className="w-3/5 p-2">
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
            <View className="h-40 w-2/5  ">
              <Image
                alt={item.name}
                className="h-full w-full rounded-r-lg object-cover "
                source={{ uri: item.image }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
