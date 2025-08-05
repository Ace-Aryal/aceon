# aceon

Aceon is a Instagram app clone which i am currently building with React Native and Expo while I am learning Mobile Development

## Notes

### Basics

---

## 🔤 React Native Core Components (aka "tags") with Use Cases

| 🏷 Component            | 📚 Description / Use Case                                                    |
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

- `Button` (from NativeBase, Paper, or your own)
- `Card`, `Badge`, `Avatar`, `Dialog` → Build with `View` + `Text` + `Image` + styling

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

- **Pages and layouts** live in `/app` (Expo Router picks this up automatically).
- **Components** are colocated in `/components` for reuse.
- **Hooks, utils, assets** are shared resources.
- If a component is **only used by one screen/page**, you can colocate it inside that page folder, e.g.:

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

- Like a **root wrapper** for your app.
- Wraps all nested pages.
- Good place to add `SafeAreaView`, `StatusBar`, or persistent UI (like bottom tabs).

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

- Expo Router **uses React Navigation under the hood**, but you don’t write navigators manually.
- You navigate by **naming files and folders** inside `/app`.
- For modals, nested routes, and parameters, you use special file/folder conventions.

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

- **Shared components** → `/components`
- **Page-specific components** → colocate near page file
- Keep components **small and focused**
- Use **NativeWind + cn() helper** for styling (no style objects)
- Prefer **functional components** with typed props (if using TS)

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

- Build a simple screen with `/app/index.tsx` and `_layout.tsx`
- Create a reusable button component in `/components/Button.tsx`
- Add a nested route with parameters and modal screen example

---

These are your **“HTML tags”** in React Native.

---

# Styling

---

### ✅ 1. **Styling in React Native = camelCase (like React)**

Yes. CSS-like styles are written in **camelCase**, using **JavaScript objects**.

```tsx
<View style={{ backgroundColor: "red", paddingVertical: 10 }} />
```

---

### ✅ 2. **Layout structure in an Expo app (tabs, SafeArea, best practices)**

Think of it like Next.js with file-based routing:

#### 🔹 **Expo Router** Layout Convention (like Next.js):

- `app/`: all routes go here
- `_layout.tsx`: shared layout for child routes (like `_app.tsx` in Next.js)
- `tabs.tsx`: for bottom tab navigator
- `stack.tsx`: for stack navigator

#### 🔹 Example structure:

```
app/
├── _layout.tsx        // wraps all screens
├── tabs/              // like pages inside Tab Navigator
│   ├── index.tsx
│   ├── settings.tsx
├── (auth)/            // another layout group (e.g., login/signup)
│   ├── login.tsx
├── components/        // reusable components
```

#### 🔹 **SafeAreaView**:

Wrap your screen content with `SafeAreaView` to avoid notches, status bars.

```tsx
import { SafeAreaView } from "react-native-safe-area-context";

<SafeAreaView style={{ flex: 1 }}>{/* Your content */}</SafeAreaView>;
```

---

### ✅ 3. **Style methods comparison**

| Method                  | Pros                                         | Cons                         | DX/Speed         |
| ----------------------- | -------------------------------------------- | ---------------------------- | ---------------- |
| **Inline Object**       | Quick, flexible                              | No autocomplete, can't reuse | 🚀 Fast to write |
| **`StyleSheet.create`** | Autocomplete, better perf (some caching)     | More boilerplate             | ✅ Better perf   |
| **NativeWind**          | Tailwind-like utility classes, super fast DX | Custom styles need config    | 💯 Best DX       |

➡️ **Best Practical Combo**: NativeWind + occasional `StyleSheet.create` for custom styles.

---

### ✅ 4. **Can we use `cn` with NativeWind?**

Yes — NativeWind supports **className merging**. You can use a `cn` function like:

```ts
import { clsx } from "clsx"; // or tailwind-variants' `cn`

<View className={cn("p-4", isActive && "bg-green-500")} />;
```

---

### ✅ 5. **What CSS properties don’t work in React Native?**

React Native **does NOT support all web CSS properties**. Here are some **unsupported or partially supported**:

- No `z-index` layering for `position: relative` (only works with `absolute`)
- No `box-shadow` (Android support is limited)
- No `gap`, `grid`, `object-fit`, `overflow: scroll` (use `ScrollView`)
- No direct support for `::before`, `::after`, or other pseudo elements
- No `hover`, `focus`, `media queries` (need libraries)

➡️ Use **utility-first styles** (NativeWind) or RN-supported styles only.

---

### ✅ 6. **Dark mode / Light mode control in React Native**

Use **`useColorScheme`** or theme providers:

```ts
import { useColorScheme } from "react-native";

const colorScheme = useColorScheme(); // 'light' or 'dark'
```

**With NativeWind:**

```ts
<Text className="text-black dark:text-white" />
```

Set theme globally with `tailwind.config.js`:

```js
darkMode: 'media', // or 'class'
```

---

### ✅ 7. **Do all `<View>` components have `flex` by default?**

**No** — `<View>` does **not have `flex: 1` by default**.

You must set `flex: 1` explicitly to fill space:

```tsx
<View style={{ flex: 1 }}>...</View>
```

---

### ✅ 8. **Do we mostly use `FlatList` for grid-like layouts?**

Yes — `FlatList` is:

- Optimized for large lists
- Can create **rows and columns** using `numColumns`
- Handles recycling and memory efficiently

Use `ScrollView` **only** for small fixed-length content.

---

### ✅ 9. **Why use `FlatList` over `ScrollView`?**

| Feature     | `FlatList`                    | `ScrollView`                          |
| ----------- | ----------------------------- | ------------------------------------- |
| Performance | ✅ Virtualized, efficient     | ❌ Renders all at once (laggy on big) |
| Pagination  | ✅ Built-in `onEndReached`    | ❌ Manual scroll detection            |
| Layout      | ✅ `numColumns` for grids     | ✅ More flexible                      |
| Use case    | Lists, feeds, infinite scroll | Small content, forms, carousels       |

➡️ **Use FlatList** for anything dynamic, long, or paginated.

---

# Navigation

### Difference between `router.push()` and `router.replace()` in navigation:

| Method                 | Behavior                                                                                                                                         | Use case                                                                                           |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **`router.push()`**    | Pushes a new route onto the navigation stack. You can go back to the previous screen using back gesture/button.                                  | Navigating forward, e.g., from Home → Details. You want users to be able to go back.               |
| **`router.replace()`** | Replaces the current route with the new one, **removing** the current screen from the stack. Back button will not return to the replaced screen. | Redirects, or when you don’t want users to go back, e.g., after login, or from a 404 back to home. |

---

### Why use `router.replace("/")` on a "Go Home" button in NotFound?

- When users hit a **404 page**, you usually want to send them back to home **and prevent them from navigating back to the invalid URL**.
- Using `.replace()` means the 404 page is removed from the navigation stack, so hitting back won’t take them back to the missing page again.
- It avoids a **navigation loop** or confusion.

---

### When to use `router.push()` instead?

- When you want to **add a new screen** on top of the stack, keeping history intact.
- Example: From Home → Details → Profile, each push lets the user go back step-by-step.

---

### TL;DR

```tsx
// In 404 page, replace current screen so users don’t return to 404 via back button
router.replace("/");

// In normal navigation, push new screen on top so users can go back
router.push("/details");
```

---

## Tab vs Stack Navigation

Great question, Dipesh. Understanding the difference between **Stack** and **Tabs** navigation — and how they work together in an **Expo + React Native + Expo Router** setup — is essential for any real-world app.

---

## 🧠 1. **Conceptual Difference**

| Navigation Type | Use Case                 | Behavior                                                                                               |
| --------------- | ------------------------ | ------------------------------------------------------------------------------------------------------ |
| **Stack**       | Page-by-page navigation  | Screens "stack" on top of each other (like a call stack). You can go back.                             |
| **Tabs**        | Main sections of the app | Bottom tabs (or top tabs) let you switch between independent routes instantly. No back button usually. |

---

## ✅ 2. **Using Stack Navigation (in `expo-router`)**

### ✅ Basic Setup (default)

Create `app/index.tsx` and `app/details.tsx`:

```tsx
// app/index.tsx
import { Link } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/details" asChild>
        <Button title="Go to Details" />
      </Link>
    </View>
  );
}

// app/details.tsx
import { Text, View } from "react-native";

export default function Details() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}
```

### 🔄 Result:

- When you click the button, it **navigates via a stack** — new screen slides in.
- You get a back button automatically.

---

## ✅ 3. **Using Tabs in `expo-router`**

### ✅ File structure for tabs:

```
app/
├── (tabs)/           ← folder with tabbed navigation
│   ├── index.tsx     ← first tab
│   ├── menu.tsx      ← second tab
│   └── contact.tsx   ← third tab
└── _layout.tsx       ← this wraps tabs in a layout
```

### ✅ `app/(tabs)/_layout.tsx`

```tsx
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="menu" options={{ title: "Menu" }} />
      <Tabs.Screen name="contact" options={{ title: "Contact" }} />
    </Tabs>
  );
}
```

### ✅ `app/(tabs)/index.tsx`

```tsx
import { Text, View } from "react-native";
export default function Home() {
  return (
    <View>
      <Text>Home Tab</Text>
    </View>
  );
}
```

### 🔄 Result:

- This renders a **bottom tab bar** with **3 tabs**.
- Each tab is a screen.
- You switch between them instantly — **not stacked**, no back button.

---

## 🤝 4. **Combining Stack + Tabs (Common Pattern)**

### ✅ File structure:

```
app/
├── (tabs)/
│   ├── _layout.tsx         ← tab navigation
│   ├── index.tsx           ← Home tab
│   ├── menu.tsx
│   └── contact.tsx
├── details.tsx             ← stack screen OUTSIDE tabs
└── _layout.tsx             ← root stack navigation
```

### ✅ `app/_layout.tsx` (Root Stack)

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* This points to (tabs)/ */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ title: "Details" }} />
    </Stack>
  );
}
```

Then in any tab screen (like `menu.tsx`), you can link to `/details` and it will open as a **stacked screen above tabs**.

---

## 📦 Summary

| Pattern      | Folder                                       | Component Used           |
| ------------ | -------------------------------------------- | ------------------------ |
| **Stack**    | `app/`                                       | `<Stack />`              |
| **Tabs**     | `app/(tabs)/`                                | `<Tabs />`               |
| **Combined** | `app/_layout.tsx` + `app/(tabs)/_layout.tsx` | `<Stack>` wraps `<Tabs>` |

---

## 🧪 Bonus Tip: Navigating programmatically

```tsx
import { useRouter } from "expo-router";
const router = useRouter();

router.push("/details"); // Push screen
router.replace("/menu"); // Replace screen
router.back(); // Go back
```

---

Let me know if you want:

- Icons in the tab bar
- Modal integration (`modal.tsx`)
- Type-safe navigation between stack/tab routes using `type-safe routes` in `expo-router`

## Practices Note
Sure, Dipesh! Here are some **additional practical notes and tips about navigation in React Native with Expo Router** that often come up and can help smooth your learning and development process:

---

### 1. **File-based Routing is Powerful but Requires Discipline**

* Folder and file names define routes automatically.
* Use `[param].tsx` for dynamic routes.
* Use `(group)` folders for grouping routes without affecting URL paths.
* Use `(slot)` folders to create multiple navigation stacks/layouts.
* Naming matters: `_layout.tsx` controls layout/navigation for that folder.

---

### 2. **Keep Navigation Simple at First**

* Avoid deeply nested navigators until you need them.
* Start with a root `Stack` and a single `Tabs` layout if your app uses tabs.
* Add complexity only when your UI flow demands it.

---

### 3. **Navigating Between Screens**

* Use the `<Link />` component from `expo-router` for simple navigation (like anchors).
* For programmatic navigation, use `const router = useRouter()` and methods like:

  * `router.push('/path')` — navigate forward.
  * `router.replace('/path')` — replace current screen.
  * `router.back()` — go back.

---

### 4. **Passing Params**

* Use URL params in file names: `[id].tsx`
* Access params with `useLocalSearchParams()`.
* Example: file `app/post/[id].tsx` accessed as `/post/123`.
* Use `router.push('/post/123')` to navigate programmatically.

---

### 5. **Customizing Headers**

* Use `screenOptions` in `<Stack>` or per-screen options with `Stack.Screen` or inside `layout.tsx`.
* `headerShown: false` hides the header.
* Use `headerBackground` to set custom background component.
* Use `headerTitle` for custom titles.

---

### 6. **Dark Mode & Theming**

* Use `Appearance.getColorScheme()` for system theme.
* Dynamically adjust colors in `screenOptions` or styles based on theme.
* Can be combined with state or context for theme toggling.

---

### 7. **Modal Screens**

* `expo-router` supports modal presentation.
* Create a special file named `modal.tsx` or folder `(modal)/`.
* Use `presentation: 'modal'` in `screenOptions`.
* Modals stack on top but look different (slide from bottom, transparent backgrounds).

---

### 8. **Deep Linking**

* `expo-router` supports deep linking out of the box.
* You can open specific screens by URL even when app is closed.
* Configure `app.json` with schemes and prefixes if needed.

---

### 9. **Back Button Handling**

* Android hardware back button works automatically.
* For custom behavior, use `useBackHandler()` from `react-native` or libraries.
* Make sure to prevent accidental exits or unwanted back navigation.

---

### 10. **Performance Tips**

* Avoid heavy work on every navigation event.
* Use React's lazy loading (`dynamic` imports) or `React.Suspense` for large screens.
* Keep navigation stacks shallow where possible.

---

### 11. **Testing Navigation**

* Use `jest-expo` or React Native Testing Library.
* Test navigation logic separately.
* Mock `useRouter()` for unit tests.

---

### Bonus: Typical Expo Router Navigation API

```ts
import { useRouter } from "expo-router";

const router = useRouter();

// Navigate forward
router.push("/profile");

// Replace current screen
router.replace("/login");

// Go back
router.back();

// Prefetch screen data for faster navigation
router.prefetch("/settings");
```

---
## Best patterns and antipatterns
Awesome! Here are some **best practices and anti-patterns** for navigation in React Native with Expo Router, plus some handy code snippets for common tasks.

---

## 🌟 Best Practices for Navigation

### 1. **Use File-Based Routing Consistently**

* Let Expo Router handle route registration via file structure.
* Avoid manual route registration except for fine-grained screen options.

### 2. **Keep Navigation State Simple**

* Don’t nest too many navigators unless necessary.
* Use a single root Stack + Tabs combination for most apps.

### 3. **Pass Params Via URL, Not Global State**

* Prefer route params (`[id].tsx`) over global or context state for screen data.
* Makes deep linking and debugging easier.

### 4. **Customize Headers via Layouts**

* Use `_layout.tsx` files for shared screen options.
* Avoid repeating header logic in every screen.

### 5. **Use `Link` for Declarative Navigation**

* Use `<Link href="/path">` for buttons and anchors.
* Use `router.push()` for imperative, programmatic navigation.

### 6. **Handle Back Button Gracefully**

* Android hardware back button behavior should be consistent.
* Use `useBackHandler()` for special cases (e.g., confirm exit).

### 7. **Use Modal Screens for Transient UI**

* Use modal presentation only for screens that should not clutter the stack.
* Use `(modal)` folders or `presentation: 'modal'`.

### 8. **Implement Dark Mode Properly**

* React to system theme changes with `Appearance` or user preference.
* Avoid hardcoding colors.

---

## ❌ Anti-Patterns to Avoid

### 1. **Manually Managing Navigation State**

* Don’t store navigation state in global state or context.
* Let the router control navigation internally.

### 2. **Over-Nesting Navigators**

* Deeply nested stacks and tabs cause navigation bugs and bad UX.
* Flatten your navigator tree when possible.

### 3. **Passing Large Objects as Params**

* Passing big objects through route params leads to issues.
* Pass IDs or keys, fetch the data inside the screen.

### 4. **Using `className` on Non-NativeWind Components**

* This won’t apply styles correctly.
* Use styles or wrap components.

---

## 🔧 Handy Code Snippets

### Navigate imperatively

```tsx
import { useRouter } from "expo-router";

const router = useRouter();

// Navigate to /profile
router.push("/profile");

// Replace current route with /login
router.replace("/login");

// Go back to previous screen
router.back();
```

---

### Read URL Params

```tsx
import { useLocalSearchParams } from "expo-router";

export default function Post() {
  const { id } = useLocalSearchParams(); // id comes from [id].tsx

  return <Text>Post ID: {id}</Text>;
}
```

---

### Conditionally hide header in a layout

```tsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* all child screens here won't show header */}
    </Stack>
  );
}
```

---

### Modal screen declaration

Create a file `app/(modal)/myModal.tsx`

```tsx
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function MyModal() {
  const router = useRouter();

  return (
    <View>
      <Text>This is a modal!</Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}
```

And in root layout:

```tsx
<Stack>
  <Stack.Screen name="(modal)/myModal" options={{ presentation: "modal" }} />
</Stack>
```

---

### Theme-aware header background

```tsx
import { View, Appearance } from "react-native";

const colorScheme = Appearance.getColorScheme();
const isDarkMode = colorScheme === "dark";

const HeaderBackground = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: isDarkMode ? "#000" : "#fff",
    }}
  />
);
```

---

If you want, I can share snippets for:

* Protected routes with auth guards
* Custom tab bars
* Animated transitions

Just ask!

## Search Params
Great question! In **expo-router**, passing and reading **search params** (query parameters) is straightforward and works much like URL query strings on the web.

---

## How to **Pass** Search Params

You can pass search params as part of the URL when navigating, for example:

```tsx
import { useRouter } from "expo-router";

const router = useRouter();

router.push({
  pathname: "/search",
  params: {
    q: "coffee",
    page: "2",
  },
});
```

This navigates to `/search?q=coffee&page=2`.

---

## How to **Read** Search Params in a Screen

In the screen component (e.g., `app/search.tsx`), use `useSearchParams()` hook from `expo-router`:

```tsx
import { useSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function SearchScreen() {
  const params = useSearchParams();
  const query = params.q;
  const page = params.page;

  return (
    <View>
      <Text>Search query: {query}</Text>
      <Text>Page number: {page}</Text>
    </View>
  );
}
```

---

## Example Summary

* Navigate with params:

```tsx
router.push({
  pathname: "/search",
  params: { q: "coffee" }
});
```

* Read params in `search.tsx`:

```tsx
const params = useSearchParams();
console.log(params.q); // "coffee"
```

---

## Notes

* Params are always strings (or undefined if missing).
* For multiple or complex params, you can encode JSON as a string, but keep it simple for maintainability.
* Dynamic route params (like `[id].tsx`) are separate from search params.

---

If you want, I can also show you how to:

* Update search params without navigation (like filtering)
* Handle optional params
* Combine dynamic route params and search params

Just ask!


