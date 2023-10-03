import { FC, PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { StyleProperty, sizes, theme } from "../../global";

interface Props extends PropsWithChildren {
  style?: StyleProperty;
}

const Card: FC<Props> = ({ children, style }) => {
  return <View style={[stylesheet.card, style]}>{children}</View>;
};

const stylesheet = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: sizes.SIZE_20,
  },
});

export default Card;
