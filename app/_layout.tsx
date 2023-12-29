import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#cfcfcf",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "App" }} />
    </Stack>
  );
}
