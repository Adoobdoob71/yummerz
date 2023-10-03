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
        <Text style={stylesheet.headerTitle}>Today, 2 Januray</Text>
        <View style={{ width: "100%", height: sizes.SIZE_60 }}></View>
      </View>
      <View style={stylesheet.middle}>
        <Card style={stylesheet.kcalContainer}>
          <Card
            style={{
              backgroundColor: theme.colors.primary_1,
              height: sizes.SIZE_100,
              position: "absolute",
              width: `${(1075 / 1800) * 100}%`,
            }}
          ></Card>
          <Text style={stylesheet.ContainerText}>KCAL</Text>
          <Text
            style={[
              stylesheet.ContainerText,
              { fontSize: sizes.SIZE_52, fontWeight: "bold" },
            ]}
          >
            1075
          </Text>
          <Text
            style={[
              stylesheet.ContainerText,
              {
                color: theme.colors.placeholder,
                fontWeight: "bold",
                marginEnd: sizes.SIZE_12,
              },
            ]}
          >
            1800
          </Text>
        </Card>
        <View style={styles.rowCenter}>
          <View style={stylesheet.nutrients}>
            <Card style={stylesheet.nutrientContainer}>
              <Card
                style={[
                  styles.rowCenter,
                  {
                    backgroundColor: theme.colors.accent,
                    height: sizes.SIZE_40,
                    position: "absolute",
                    width: `${(120 / 160) * 100}%`,
                    zIndex: 1,
                  },
                ]}
              >
                <Text style={stylesheet.ContainerText}>P</Text>
                <Text
                  style={[stylesheet.ContainerText, stylesheet.nutrientText]}
                >
                  120 g
                </Text>
              </Card>

              <Text
                style={[stylesheet.ContainerText, stylesheet.nutrientMaxText]}
              >
                160
              </Text>
            </Card>
            <Card style={stylesheet.nutrientContainer}>
              <Card
                style={[
                  styles.rowCenter,
                  {
                    backgroundColor: theme.colors.accent,
                    height: sizes.SIZE_40,
                    position: "absolute",
                    width: `${(34 / 200) * 100}%`,
                    zIndex: 1,
                  },
                ]}
              >
                <Text style={stylesheet.ContainerText}>P</Text>
                <Text
                  style={[stylesheet.ContainerText, stylesheet.nutrientText]}
                >
                  34 g
                </Text>
              </Card>

              <Text
                style={[stylesheet.ContainerText, stylesheet.nutrientMaxText]}
              >
                160
              </Text>
            </Card>
            <Card style={stylesheet.nutrientContainer}>
              <Card
                style={[
                  styles.rowCenter,
                  {
                    backgroundColor: theme.colors.accent,
                    height: sizes.SIZE_40,
                    position: "absolute",
                    width: `${(180 / 200) * 100}%`,
                    zIndex: 1,
                  },
                ]}
              >
                <Text style={stylesheet.ContainerText}>P</Text>
                <Text
                  style={[stylesheet.ContainerText, stylesheet.nutrientText]}
                >
                  180 g
                </Text>
              </Card>

              <Text
                style={[stylesheet.ContainerText, stylesheet.nutrientMaxText]}
              >
                160
              </Text>
            </Card>
          </View>
        </View>
      </View>
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
    width: "100%",
  },
  headerTitle: {
    color: theme.colors.text,
    fontSize: sizes.SIZE_22,
    fontWeight: "bold",
    alignSelf: "center",
  },
  middle: {
    flex: 1,
    paddingHorizontal: sizes.SIZE_16,
  },
  kcalContainer: {
    backgroundColor: theme.colors.card,
    height: sizes.SIZE_100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ContainerText: {
    color: theme.colors.text,
    fontSize: sizes.SIZE_12,
    marginStart: sizes.SIZE_12,
    fontWeight: "600",
  },
  nutrients: {
    width: "60%",
    marginTop: sizes.SIZE_16,
  },
  nutrientContainer: {
    backgroundColor: theme.colors.card,
    height: sizes.SIZE_40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: sizes.SIZE_10,
  },
  nutrientProgressBar: {
    backgroundColor: theme.colors.accent,
    height: sizes.SIZE_40,
    position: "absolute",
    zIndex: 1,
  },
  nutrientText: {
    fontSize: sizes.SIZE_18,
    fontWeight: "bold",
    marginStart: sizes.SIZE_8,
    zIndex: 1,
  },
  nutrientMaxText: {
    color: theme.colors.placeholder,
    fontWeight: "bold",
    marginEnd: sizes.SIZE_12,
    marginStart: "auto",
  },
});
