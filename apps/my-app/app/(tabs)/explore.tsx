import { Text, View, Pressable } from "react-native";
import { useStore } from "../../store/useStore";

export default function TabTwoScreen() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <View className="flex-1 items-center justify-center bg-white gap-4">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>

      <Text className="text-2xl font-bold text-gray-800">Count: {count}</Text>

      <View className="flex-row gap-2">
        <Pressable
          onPress={decrement}
          className="bg-red-500 px-4 py-2 rounded"
        >
          <Text className="text-white font-semibold">-</Text>
        </Pressable>

        <Pressable
          onPress={increment}
          className="bg-green-500 px-4 py-2 rounded"
        >
          <Text className="text-white font-semibold">+</Text>
        </Pressable>

        <Pressable
          onPress={reset}
          className="bg-blue-500 px-4 py-2 rounded"
        >
          <Text className="text-white font-semibold">Reset</Text>
        </Pressable>
      </View>
    </View>
  );
}
