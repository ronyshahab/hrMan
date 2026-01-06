import { router } from "expo-router";
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View
} from "react-native";
import ActionCard from "./ActionCard";

export default function HomeLayout() {
  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      resizeMode="cover"
      className="flex-1 bg-white"
    >
      <View className="flex-1 bg-green-50/40">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          
          {/* Header */}
          <View className="bg-profileColor rounded-b-[32px] px-6 pt-14 pb-8 shadow-lg">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="w-12 h-12 rounded-full border-2 border-white/30 p-0.5">
                  <Image
                    source={require("../../assets/prof.png")}
                    className="w-full h-full rounded-full"
                  />
                </View>
                <View className="ml-3">
                  <Text className="text-white/80 text-xs">
                    Welcome back,
                  </Text>
                  <Text className="text-white font-bold text-lg mt-0.5">
                    Pagi Mukeshkumar
                  </Text>
                </View>
              </View>

              <View className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
                <Image
                  source={require("../../assets/notf.png")}
                  className="w-6 h-6"
                  style={{ tintColor: "white" }}
                />
              </View>
            </View>
          </View>

          {/* Content */}
          <View className="px-6 mt-8">
            
            <Text className="text-gray-800 font-bold text-xl mb-5">
              Quick Actions
            </Text>

            {/* Grid */}
            <View className="flex-row flex-wrap justify-between">
              <ActionCard 
                title="Digital ID Card" 
                icon={require("../../assets/digital_id_card.png")} 
                onPress={() => router.push("/layout/idCard/DigIdCard")}
              />
              <ActionCard 
                title="Payslip" 
                icon={require("../../assets/payslip.png")} 
              />

              <ActionCard 
                title="View Attendance" 
                icon={require("../../assets/view-att.png")} 
              />

              <ActionCard 
                title="Mark Attendance" 
                icon={require("../../assets/view_att.png")} 
              />
                
              <ActionCard 
                title="View Leaves" 
                icon={require("../../assets/view_leaves.png")} 
              />

              <ActionCard 
                title="Apply Leaves" 
                icon={require("../../assets/apply_leave.png")} 
              />

              <ActionCard 
                title="Calendar" 
                icon={require("../../assets/leaves.png")} 
              />

              
              <ActionCard 
                title="Help & Support" 
                icon={require("../../assets/support.png")} 
              />

              <ActionCard 
                title="Offer Letter" 
                icon={require("../../assets/job-offer.png")} 
              />

              <ActionCard 
                title="E-Activation" 
                icon={require("../../assets/external-link.png")} 
              />

              <ActionCard 
                title="Exit Management" 
                icon={require("../..//assets/exit.png")} 
              />
            </View>
          </View>

          {/* Bottom padding */}
          <View className="h-8" />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}