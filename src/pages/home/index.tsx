import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { sizes, styles, theme } from "../../global";
import { STATUSBAR_HEIGHT } from "../../constants";
import Card from "../../components/card/card";

export default function Home() {
  return (
    <View style={stylesheet.container}>
      <StatusBar style="light" translucent />
      <View style={stylesheet.header}>
        <Text style={stylesheet.headerTitle}>Yummerz</Text>
      </View>
      <Card
        style={{
          paddingHorizontal: sizes.SIZE_16,
          paddingVertical: sizes.SIZE_16,
          marginTop: sizes.SIZE_40,
          marginHorizontal: sizes.SIZE_16,
        }}
      >
        <Text
          style={{
            color: theme.colors.primary,
            fontWeight: "bold",
            fontSize: sizes.SIZE_16,
          }}
        >
          Total Calories
        </Text>
      </Card>
    </View>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: STATUSBAR_HEIGHT + sizes.SIZE_20,
    paddingBottom: sizes.SIZE_20,
    backgroundColor: theme.colors.card,
    width: "100%",
  },
  headerTitle: {
    color: theme.colors.text,
    fontSize: sizes.SIZE_24,
    fontWeight: "bold",
    marginHorizontal: sizes.SIZE_12,
  },
});
