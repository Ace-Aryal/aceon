import { Stack } from "expo-router";
import "@/global.css";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Appearance } from "react-native";
import { cn } from "@/lib/utils";
export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView
        className={cn("flex-1 ", {
          "bg-white text-gray-800": colorScheme === "light",
          "bg-zinc-950 text-gray-50": colorScheme === "dark",
        })}
      >
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
              headerShown: false,
              headerTintColor: colorScheme === "dark" ? "black" : "white",
            }}
          />
          <Stack.Screen
            name="menu"
            options={{
              title: "Menu",
              headerShown: true,
            }}
          />

          <Stack.Screen
            name="(tabs)"
            options={{
              title: "Tabs",
              headerShown: false,
            }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
