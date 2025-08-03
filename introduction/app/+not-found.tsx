import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function NotFound() {
  return (
    <View className="flex-1 justify-center items-center bg-white dark:bg-black">
      <Text className="text-lg font-bold text-red-500">
        404 - Page Not Found
      </Text>
      <Button title="Go Home" onPress={() => router.replace("/")} />
    </View>
  );
}
