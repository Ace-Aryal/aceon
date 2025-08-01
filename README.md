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

These are your **“HTML tags”** in React Native.

---

