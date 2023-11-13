import {
  defineStyle,
  defineStyleConfig,
  useStyleConfig,
  Text,
  Box
} from "@chakra-ui/react";
const baseStyle = defineStyle({
  "&:not(.subRow)": {
    color: "black",
    _odd: {
      color: "green"
    }
  },
  "&.subRow": {
    color: "blue",
    _odd: { color: "red" }
  }
});

const baseSubStyle = defineStyle({
  color: "red",
  _odd: {
    color: "peach"
  }
});

export const TextStyle = defineStyleConfig({
  baseStyle,
  variants: {},
  defaultProps: {}
});

export const SubTextStyle = defineStyleConfig({
  baseStyle: baseSubStyle,
  variants: {},
  defaultProps: {}
});

export const TextComponent = (props) => {
  const styles = useStyleConfig("NormalText");
  console.log("props", props);
  // Need to be a Box as Tr since Tr doesen't seem to apply up __css
  return <Box as={Text} {...props} __css={styles} />;
};

export const SubTextComponent = (props) => {
  const styles = useStyleConfig("SubText");
  // Need to be a Box as Tr since Tr doesen't seem to apply up __css
  return <Box as={Text} {...props} __css={styles} />;
};
