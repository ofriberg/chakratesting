import {
  defineStyle,
  defineStyleConfig,
  useStyleConfig,
  Checkbox,
  Box
} from "@chakra-ui/react";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
const helpers = createMultiStyleConfigHelpers([
  "checkbox",
  "input",
  "control",
  "label"
]);

const baseStyle = defineStyle({
  control: {
    border: "1px"
  },
  label: {
    fontWeight: "medium",
    lineHeight: "normal",
    color: "gray.600"
  }
});

export const CheckStyle = helpers.defineMultiStyleConfig({
  baseStyle,
  sizes: {
    xs: {
      control: {
        borderColor: "orange",
        width: "8px",
        height: "8px",
        fontSize: "6px"
      }
    },
    sm: {
      control: {
        borderColor: "green",
        width: "12px",
        height: "12px",
        fontSize: "10px"
      }
    },
    md: {
      control: {
        borderColor: "yellow",
        width: "16px",
        height: "16px",
        fontSize: "14px"
      }
    },
    lg: {
      control: {
        borderColor: "blue",
        width: "20px",
        height: "20px",
        fontSize: "18px"
      }
    }
  },
  defaultProps: {
    // some properties on checkbox is not editable unless resetting defaultProps for some reason
    variant: 0
  }
});

export const Check = (props) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig("CheckStyle", { variant });

  // Need to be a Box as Tr since Tr doesen't seem to apply up __css
  return <Box as={Checkbox} {...rest} __css={styles} />;
};

export const CheckboxStyle = defineStyleConfig({
  defaultProps: {
    // some properties on checkbox is not editable unless resetting defaultProps for some reason
    variant: 0
  },
  baseStyle
});
