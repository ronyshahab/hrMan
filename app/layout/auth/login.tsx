import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
import '../../globals.css';

const LoginScreen = () => {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const indianPhoneRegex = /^[6-9]\d{9}$/;

    if (!phone) {
      setError("Please enter your mobile number");
      return;
    }

    if (!indianPhoneRegex.test(phone)) {
      setError("Enter a valid 10-digit Indian mobile number");
      return;
    }

    setError("");
    // 👉 Call OTP / API here
    console.log("Valid phone number:", phone);
    router.push({
      pathname: "/layout/home/home",
      params: {phone}
    });
  };

  return (
    <ImageBackground
  source={require('../../assets/bg.png')}
  resizeMode="cover"
  className="flex-1 bg-white"
>
  <View className="flex-1 px-7 pt-16">

    {/* Back Arrow */}
    <Text className="text-3xl text-gray-800 mb-20">
      ←
    </Text>

    {/* Heading */}
    <Text className="text-3xl font-bold text-gray-800 mb-2">
      Welcome back
    </Text>

    <Text className="text-gray-500 text-lg mb-12">
      Login using your mobile number
    </Text>

    {/* Phone Input */}
    <View className="mb-2">
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="#9CA3AF"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={(text) => {
              setPhone(text.replace(/[^0-9]/g, ""));
              if (error) setError("");
            }}
            className={`border rounded-lg px-4 py-4 text-lg bg-zinc-50 mt-8 ${
              error ? "border-red-500 text-red-600" : "border-gray-400 text-gray-800"
            }`}
          />
        </View>

        {error ? (
          <Text className="text-red-500 text-sm mb-4">
            {error}
          </Text>
        ) : null}


    {/* Login Button */}
    <TouchableOpacity 
          onPress={handleLogin}
          activeOpacity={0.85}
          className="bg-green-600 py-4 rounded-lg mt-7">
      <Text className="text-white text-center font-semibold text-lg">
        Login
      </Text>
    </TouchableOpacity>

    {/* Bottom Illustration */}
    <View className="flex-1 justify-end items-center pb-12">
      <Image
        source={require('../../assets/login_illustration.png')}
        className="w-64 h-64"
        resizeMode="contain"
      />
    </View>

  </View>
</ImageBackground>

  );
};

export default LoginScreen;
