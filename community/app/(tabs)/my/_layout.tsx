import { Stack } from "expo-router";
import { colors } from "@/constants";

export default function MyLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.WHITE,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "내프로필",
        }}
      />
    </Stack>
  );
}
