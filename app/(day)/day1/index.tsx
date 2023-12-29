import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 100 }}>
        Day Details
      </Text>
    </View>
  );
};

export default DayDetailsScreen;
