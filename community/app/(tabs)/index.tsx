import { Text, SafeAreaView } from "react-native";
import CustomButton from "@/components/CustomButton";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Text>홈스크린</Text>
      <CustomButton label="버튼" onPress={() => {}} />
    </SafeAreaView>
  );
}
