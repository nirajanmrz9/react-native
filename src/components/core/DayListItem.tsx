import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

type DayListItem = {
  day: number;
};

export default function DayListItem(props: DayListItem) {
  const { day } = props;
  return (
    <Link href={`/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#f9ede3",
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 70,
    fontFamily: "AmaticBold",
  },
});
