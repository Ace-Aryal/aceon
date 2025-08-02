import { Link } from "expo-router";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  // const [];
  return (
    <View className="text-red-500 w-full h-full flex justify-center items-center text-2xl">
      <Text className="text-red-500 text-2xl ">Hello Dipesh</Text>
      <TouchableOpacity
        onPress={() => {
          console.log("i am working");
          Alert.alert("Hello");
        }}
        className="bg-blue-100  p-2 rounded-xl"
      >
        <Text className="text-blue-600">Press me</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://images.pexels.com/photos/33148681/pexels-photo-33148681.jpeg",
        }}
        className="h-[5rem] w-[5rem]"
      />
      <Link className="p-2 border rounded-lg" href={"/notifications"}>
        Visit notification
      </Link>
    </View>
  );
}
