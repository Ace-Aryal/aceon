# aceon
Aceon is a Instagram app clone which i am currently building with React Native and Expo while I am learning Mobile Development

## Notes 

### Basics


---

## 🔤 React Native Core Components (aka "tags") with Use Cases

| 🏷 Component           | 📚 Description / Use Case                                                    |
| ---------------------- | ---------------------------------------------------------------------------- |
| `View`                 | Generic container (like `<div>`). Use for layout, cards, rows, etc.          |
| `Text`                 | For displaying **all text**. No plain strings allowed outside of `<Text>`.   |
| `Image`                | To render both local and remote images. Supports `resizeMode`, caching, etc. |
| `Pressable`            | Low-level component for interactions — replaceable for button, cards, etc.   |
| `TouchableOpacity`     | Similar to `Pressable`, but with built-in opacity feedback (fades on press). |
| `ScrollView`           | Scrollable container. Good for forms or pages with dynamic height.           |
| `FlatList`             | High-performance scrollable list. Best for large/virtualized lists.          |
| `SectionList`          | Like `FlatList`, but for grouped list data with section headers.             |
| `TextInput`            | Input field for user text. Used in forms, chat, search bars, etc.            |
| `SafeAreaView`         | Prevents layout from overlapping the notch or status bar on phones.          |
| `KeyboardAvoidingView` | Prevents keyboard from hiding inputs. Used in login/signup forms.            |
| `Modal`                | Native full-screen modal. Good for dialogs, forms, confirmation popups.      |
| `ActivityIndicator`    | Shows a loading spinner.                                                     |
| `StatusBar`            | Lets you control the device’s top bar (color, style, visibility).            |

---

### 🔁 Bonus / Platform-Specific Components

| Component             | Purpose                                                                    |
| --------------------- | -------------------------------------------------------------------------- |
| `Switch`              | A toggle switch (on/off). Good for settings.                               |
| `Picker` / `Dropdown` | Select one option from a list. Use community packages for better versions. |
| `Alert`               | Native alert popup (platform-specific style).                              |
| `Dimensions`          | Get device width/height — helpful for responsive design.                   |
| `Platform`            | Detect iOS vs Android and apply platform-specific logic.                   |

---

### 📦 Higher-Level from Libraries (optional later)

You may use these later but not core RN:

* `Button` (from NativeBase, Paper, or your own)
* `Card`, `Badge`, `Avatar`, `Dialog` → Build with `View` + `Text` + `Image` + styling

---

## ✅ What You’ll Use 90% of the Time

```tsx
<View>           // layout
<Text>           // text content
<Image>          // show image
<Pressable>      // for click/press
<FlatList>       // show data list
<TextInput>      // take input
<ScrollView>     // allow scrolling
<SafeAreaView>   // prevent notch overlap
```



---

# 📁 Folder Structure & File Colocation Best Practices

Organizing code well helps scalability and maintainability.

---

## Recommended Folder Structure

```
/app                  # Expo Router pages & layouts (file-based routing)
  /_layout.tsx        # Root layout (wraps all pages)
/components           # Reusable UI components (buttons, cards, etc.)
/hooks                # Custom React hooks (e.g., useAuth, useFetch)
/utils                # Utility functions and helpers (e.g., cn.ts)
/assets               # Images, fonts, icons
/screens              # (Optional) Screens if you prefer explicit over routing folder
/navigation           # Navigation configs (if using react-navigation)
/styles               # Tailwind configs or global styles if any
```

---

## Why put files together?

* **Pages and layouts** live in `/app` (Expo Router picks this up automatically).
* **Components** are colocated in `/components` for reuse.
* **Hooks, utils, assets** are shared resources.
* If a component is **only used by one screen/page**, you can colocate it inside that page folder, e.g.:

```
/app
  /profile
    ProfileScreen.tsx
    ProfileHeader.tsx  <-- small component only for ProfileScreen
```

---

# 🚦 Routing with Expo Router

Expo Router uses **file-system based routing** inspired by Next.js.

---

### Key files:

| File                      | Purpose                                                   |
| ------------------------- | --------------------------------------------------------- |
| `/app/index.tsx`          | Root screen at `/`                                        |
| `/app/_layout.tsx`        | Shared layout wrapping all screens (e.g. navigation bars) |
| `/app/profile.tsx`        | Screen at `/profile`                                      |
| `/app/settings/index.tsx` | Screen at `/settings`                                     |

---

### `_layout.tsx`

* Like a **root wrapper** for your app.
* Wraps all nested pages.
* Good place to add `SafeAreaView`, `StatusBar`, or persistent UI (like bottom tabs).

Example:

```tsx
// app/_layout.tsx
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <Stack />
    </SafeAreaView>
  );
}
```

---

# 📱 Navigation in Expo

* Expo Router **uses React Navigation under the hood**, but you don’t write navigators manually.
* You navigate by **naming files and folders** inside `/app`.
* For modals, nested routes, and parameters, you use special file/folder conventions.

---

### Navigation features with Expo Router

| Feature          | How to do it in Expo Router                                  |
| ---------------- | ------------------------------------------------------------ |
| Nested routes    | Folders inside `/app`                                        |
| Route params     | File names with `[param].tsx`                                |
| Modal screens    | Create folder `_modal` and use it in routing                 |
| Tab navigation   | Create `(_tabs)` folder with `_layout.tsx` for tab navigator |
| Stack navigation | Automatic with `<Stack />` component in `_layout.tsx`        |

---

# 🧩 Components Colocation & Best Practices

* **Shared components** → `/components`
* **Page-specific components** → colocate near page file
* Keep components **small and focused**
* Use **NativeWind + cn() helper** for styling (no style objects)
* Prefer **functional components** with typed props (if using TS)

Example:

```
/components
  /Button.tsx
  /Card.tsx

/app
  /profile
    index.tsx      // page component
    ProfileHeader.tsx  // page-specific component
```

---

# 📌 Summary & Tips

| Topic                | Best Practice / Tool                                            |
| -------------------- | --------------------------------------------------------------- |
| Folder Structure     | `/app` (pages & layouts), `/components`, `/hooks`, `/utils`     |
| Routing              | File-based via Expo Router in `/app`                            |
| Layouts              | `_layout.tsx` files wrap pages for shared UI                    |
| Navigation           | Use Expo Router conventions, no manual React Navigation setup   |
| Component Colocation | Shared in `/components`, page-specific colocated in page folder |
| Styling              | NativeWind + `cn()` helper, avoid inline styles                 |

---

# 🚀 Next Steps

* Build a simple screen with `/app/index.tsx` and `_layout.tsx`
* Create a reusable button component in `/components/Button.tsx`
* Add a nested route with parameters and modal screen example

---



These are your **“HTML tags”** in React Native.

---

