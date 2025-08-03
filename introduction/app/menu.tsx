import { View, Text, Appearance } from "react-native";
import React from "react";
import { cn } from "@/lib/utils";

export default function Menu() {
  const colorScheme = Appearance.getColorScheme();
  return (
    <View
      className={cn("flex-1", {
        "bg-zinc-950 ": colorScheme === "dark",
        " text-gray-900": colorScheme === "light",
      })}
    >
      <Text
        className={cn({
          "text-gray-50": colorScheme === "dark",
          "text-gray-900": colorScheme === "light",
        })}
      >
        Menu
      </Text>
    </View>
  );
}
