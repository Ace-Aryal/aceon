import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/explore"} asChild>
        <Pressable>
          <Text className="text-blue-600 text-lg">Go Explore</Text>
        </Pressable>
      </Link>
    </View>
  );
}
