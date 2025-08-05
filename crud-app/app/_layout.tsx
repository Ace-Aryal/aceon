import { Stack } from "expo-router";
import "@/global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Appearance, View } from "react-native";
import { cn } from "@/lib/utils";
export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();
  const isDarkMode = colorScheme === "dark";
  return (
    <SafeAreaProvider>
      <SafeAreaView
        className={cn("flex-1 bg-white text-gray-800", {
          "bg-zinc-950 text-white": isDarkMode,
        })}
      >
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerTintColor: isDarkMode ? "white" : "black",
              title: "Home",
              headerBackground: () => (
                <View
                  className={cn(
                    "flex-1 border-b border-gray-200 w-full bg-gray-50 ",
                    {
                      "bg-zinc-950 border-gray-700": isDarkMode,
                    }
                  )}
                />
              ),
            }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
