import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

interface CustomButtonProps {
  label: string;
  size?: "medium" | "large";
  variant?: "filled";
}

function CustomButton({
  label,
  size = "large",
  variant = "filled",
}: CustomButtonProps) {
  return (
    <Pressable style={[styles.container, styles[size], styles[variant]]}>
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    width: "100%",
    height: 44,
  },
  medium: {},
});

export default CustomButton;
