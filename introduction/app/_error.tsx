// app/_error.tsx
import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function ErrorScreen({ error }: { error: Error }) {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-red-600 text-lg font-bold">
        Something went wrong
      </Text>
      <Text className="text-gray-500 mt-2">{error.message}</Text>
      <Button title="Go Home" onPress={() => router.replace("/")} />
    </View>
  );
}
