import { Stack, router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideInRight,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,alias? Debitis quaerat fugit nesciunt mollitia consequatur!",
  },
  {
    icon: "people-arrows",
    title: "Learn together",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,alias? Debitis quaerat fugit nesciunt mollitia consequatur!",
  },
  {
    icon: "book-reader",
    title: "Education ",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,alias? Debitis quaerat fugit nesciunt mollitia consequatur!",
  },
];
const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];
  const onContinue = () => {
    if (screenIndex === onboardingSteps.length - 1) {
      endOnBorading();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      endOnBorading();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };
  const endOnBorading = () => {
    setScreenIndex(0);
    router.back();
  };
  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd((e) => console.log(e, "event for left"));
  const swipeBackward = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart((event) => {
      console.log("right");

      onBack();
    });

  const swipes = Gesture.Exclusive(swipeBackward, swipeForward);
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent}>
          <View style={styles.stepIndicatorContainer}>
            {onboardingSteps.map((step, index) => (
              <View
                key={index}
                style={[
                  styles.stepIndicator,
                  {
                    backgroundColor: index === screenIndex ? "#FDFDFD" : "gray",
                  },
                ]}
              />
            ))}
          </View>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={80}
              color="#FDFDFD"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text entering={SlideInRight} style={styles.title}>
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight.delay(200)}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text style={styles.buttonText} onPress={endOnBorading}>
                Skip
              </Text>
              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    marginTop: 10,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBold",
    marginVertical: 30,
  },
  description: {
    color: "gray",
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Inter",
  },
  footer: {
    marginTop: "auto",
  },
  button: {
    backgroundColor: "#302e38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 10,
    marginHorizontal: 15,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});
export default OnboardingScreen;
