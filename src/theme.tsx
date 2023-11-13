import { extendTheme } from "@chakra-ui/react";
import { SubTextStyle, TextStyle } from "./themes/Texts";
import { CheckboxStyle, CheckStyle } from "./themes/Checkbox";

export const bgGradient =
  "linear-gradient(39deg, rgba(36,180,137,1) 0%, rgba(36,180,126,1) 45%, rgba(36,180,171,1) 100%);";

const config = {
  initialColorMode: "light"
};

const theme = extendTheme({
  components: {
    NormalText: TextStyle,
    SubText: SubTextStyle,
    Checkbox: CheckStyle,
    Tooltip: {
      defaultProps: {
        useArrow: true
      }
    }
  },
  config,
  colors: {
    brand: {
      400: "#24b47e"
    },
    bgGradient: {
      brand: bgGradient
    }
  }
});

export { theme };
