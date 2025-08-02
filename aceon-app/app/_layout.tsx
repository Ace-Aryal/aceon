import { Slot, Stack } from "expo-router";
import "../global.css";
import "react-native-reanimated"; // at the top of index.js or App.tsx
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
