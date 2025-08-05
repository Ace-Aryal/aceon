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
        <Stack
          screenOptions={{
            headerTintColor: isDarkMode ? "black" : "white",
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="menu"
            options={{
              title: "Coffee Menu",
              headerShown: true,
              headerBackground: () => (
                <View
                  className={cn("w-full h-full bg-gray-50", {
                    "bg-zinc-950": isDarkMode,
                  })}
                />
              ),
            }}
          />
          <Stack.Screen
            name="contact"
            options={{
              title: "Contact Us",
              headerShown: true,
              // headerBackground: () => (
              //   <View
              //     className={cn("w-full h-full bg-gray-50", {
              //       "bg-zinc-950": isDarkMode,
              //     })}
              //   />
              // ),
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
