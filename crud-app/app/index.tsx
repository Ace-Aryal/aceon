import { cn } from "@/lib/utils";
import { Appearance, Text, View } from "react-native";

export default function Index() {
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      className={cn("flex-1 bg-white ", {
        "bg-zinc-950": isDarkMode,
      })}
    >
      <Text className="text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
