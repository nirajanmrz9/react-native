import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import DayListItem from "../src/components/core/DayListItem";
SplashScreen.preventAutoHideAsync();

export default function Home() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }
  const data = [...Array(24)].map((val, index) => index + 1);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.content}
        data={data}
        numColumns={2}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <DayListItem day={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: { gap: 10, padding: 10 },
  column: { gap: 10 },
});
