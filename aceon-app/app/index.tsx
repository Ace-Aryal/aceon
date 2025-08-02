import { View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function Home() {
  return (
    <View>
      <Redirect href="/(tabs)" />
    </View>
  );
}
