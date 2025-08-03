import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Home</Text>
      <Link className="mt-2 " href={"/(coffee)/coffee"} asChild>
        <Pressable>
          <Text className="text-blue-600 text-lg bg-blue-100 rounded-xl  p-2 font-semibold">
            Take coffee
          </Text>
        </Pressable>
      </Link>
    </View>
  );
}
