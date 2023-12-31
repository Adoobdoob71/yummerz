import { DarkTheme } from "@react-navigation/native";
import { WIDTH } from "./constants";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";

// colors
const theme: typeof DarkTheme & {
  colors: {
    primary_1: string;
    primary_2: string;
    primary_3: string;
    placeholder: string;
    accent: string;
  };
} = {
  dark: true,
  colors: {
    background: "#071013",
    card: "#091519",
    primary: "#F4917B",
    primary_1: "#eb5160",
    primary_2: "#864653",
    primary_3: "#402127",
    accent: "#79b9ac",
    border: "#DFE0E2",
    placeholder: "#15333C",
    text: "#E2F0F4",
    notification: "#79313A",
  },
};

const theme2: typeof DarkTheme & {
  colors: {
    primary_1: string;
    primary_2: string;
    primary_3: string;
    placeholder: string;
    accent: string;
  };
} = {
  dark: true,
  colors: {
    background: "#0B191E",
    card: "#10262D",
    primary: "#a2533a",
    primary_1: "#36987E",
    primary_2: "#864653",
    primary_3: "#402127",
    accent: "#983650",
    border: "#DFE0E2",
    placeholder: "#255B6A",
    text: "#E2F0F4",
    notification: "#79313A",
  },
};

export { theme2 as theme };

// sizes

const sizes = {
  SIZE_1: WIDTH * (1 / 365),
  SIZE_2: WIDTH * (2 / 365),
  SIZE_3: WIDTH * (3 / 365),
  SIZE_4: WIDTH * (4 / 365),
  SIZE_5: WIDTH * (5 / 365),
  SIZE_6: WIDTH * (6 / 365),
  SIZE_8: WIDTH * (8 / 365),
  SIZE_10: WIDTH * (10 / 365),
  SIZE_11: WIDTH * (11 / 365),
  SIZE_12: WIDTH * (12 / 365),
  SIZE_14: WIDTH * (14 / 365),
  SIZE_16: WIDTH * (16 / 365),
  SIZE_18: WIDTH * (18 / 365),
  SIZE_20: WIDTH * (20 / 365),
  SIZE_22: WIDTH * (22 / 365),
  SIZE_24: WIDTH * (24 / 365),
  SIZE_28: WIDTH * (28 / 365),
  SIZE_32: WIDTH * (32 / 365),
  SIZE_36: WIDTH * (36 / 365),
  SIZE_40: WIDTH * (40 / 365),
  SIZE_44: WIDTH * (44 / 365),
  SIZE_48: WIDTH * (48 / 365),
  SIZE_52: WIDTH * (52 / 365),
  SIZE_56: WIDTH * (56 / 365),
  SIZE_60: WIDTH * (60 / 365),
  SIZE_70: WIDTH * (70 / 365),
  SIZE_80: WIDTH * (80 / 365),
  SIZE_90: WIDTH * (90 / 365),
  SIZE_100: WIDTH * (100 / 365),
  SIZE_110: WIDTH * (110 / 365),
  SIZE_120: WIDTH * (120 / 365),
  SIZE_130: WIDTH * (130 / 365),
  SIZE_140: WIDTH * (140 / 365),
  SIZE_150: WIDTH * (150 / 365),
  SIZE_160: WIDTH * (160 / 365),
  SIZE_170: WIDTH * (170 / 365),
  SIZE_180: WIDTH * (180 / 365),
  SIZE_190: WIDTH * (190 / 365),
  SIZE_200: WIDTH * (200 / 365),
} as const;

export { sizes };

// styles
const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  column: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  columnCenter: {
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  flex: {
    flex: 1,
  },
  text: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  textInputWrapper: {
    backgroundColor: "#132831",
    borderRadius: sizes.SIZE_4,
    paddingVertical: sizes.SIZE_6,
    paddingHorizontal: sizes.SIZE_12,
  },
  textInput: {
    textAlignVertical: "center",
    color: theme.colors.text,
    fontSize: sizes.SIZE_12,
  },
});

export { styles };

// types
type StyleProperty = StyleProp<ViewStyle>;

export { StyleProperty };
