import { Image, Text, TouchableOpacity, View } from "react-native";

type ActionCardProps = {
  title: string;
  icon: any;
  full?: boolean;
  onPress?: () => void;
};

export default function ActionCard({
  title,
  icon,
  full = false,
  onPress,
}: ActionCardProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="w-[47%] bg-white rounded-2xl mb-4 p-5 border border-gray-100/50 shadow-sm active:scale-95"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      {/* Icon Container */}
      <View className="w-16 h-16 rounded-2xl bg-green-50 items-center justify-center mb-3 self-start">
        <Image
          source={icon}
          className="w-9 h-9"
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text 
        className="text-gray-800 font-semibold text-sm leading-5"
        numberOfLines={2}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}