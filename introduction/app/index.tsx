import { Link } from "expo-router";
import {
  ImageBackground,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  return (
    <ImageBackground
      className="flex-1 backdrop-blur-md"
      blurRadius={10}
      source={{
        uri: "https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg",
      }}
    >
      <View className="mt-2 flex-1">
        <Text className="text-white font-bold text-4xl w-full text-center ">
          Ace Coffee
        </Text>
        <View className="flex-1 flex justify-center items-center">
          <Link href={"/menu"} className="" asChild>
            <TouchableOpacity className="bg-orange-100 rounded-xl">
              <Text className="text-orange-600 px-8 py-4 text-lg font-semibold">
                See Menu
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}

/* <Link href={"/explore"} asChild>
        <Pressable>
          <Text className="text-blue-600 text-lg bg-blue-100 rounded-xl p-2 font-semibold">
            Go Explore
          </Text>
        </Pressable>
      </Link> */

// <Link className="mt-2" href={"/(tabs)"} asChild>
//   <Pressable>
//     <Text className="text-blue-600 text-lg bg-blue-100 rounded-xl p-2 font-semibold">
//       Explore App
//     </Text>
//   </Pressable>
// </Link>
