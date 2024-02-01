import { Link, Stack } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

const index = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2" }} />
      <Link href={"/day2/onboarding"} asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
};

export default index;
