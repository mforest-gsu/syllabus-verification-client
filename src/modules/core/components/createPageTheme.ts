import type { PaletteColor, PaletteColorOptions, Theme } from "../../../lib/mui/types";
import grey from "@mui/material/colors/grey";
import { createTheme, alpha } from "@mui/material/styles";

declare module "@mui/material/styles" {
  export interface Palette {
    default?: PaletteColor;
    exceeds?: PaletteColor;
    meets?: PaletteColor;
    below?: PaletteColor;
    notAssessed?: PaletteColor;
  }

  export interface PaletteOptions {
    default?: PaletteColorOptions;
    exceeds?: PaletteColorOptions;
    meets?: PaletteColorOptions;
    below?: PaletteColorOptions;
    notAssessed?: PaletteColorOptions;
  }
}

export default function createPageTheme(): Theme {
  const theme = createTheme({
    palette: {
      grey: grey,
      default: {
        main: grey[300],
        dark: grey[400],
      },
      exceeds: {
        main: "#0000ff",
        contrastText: "#000",
      },
      meets: {
        main: "#00d2ed",
        contrastText: "#000",
      },
      below: {
        main: "#ff575a",
        contrastText: "#000",
      },
      notAssessed: {
        main: "#f0f0f0",
        contrastText: "#000",
      },
    },
  });

  return createTheme(theme, {
    components: {
      MuiButton: {
        variants: [
          {
            props: {
              variant: "contained",
              color: "default",
            },
            style: {
              color: theme.palette.getContrastText(theme.palette.grey[300]),
            },
          },
          {
            props: {
              variant: "outlined",
              color: "default",
            },
            style: {
              color: theme.palette.text.primary,
              borderColor:
                theme.palette.mode === "light"
                  ? "rgba(0, 0, 0, 0.23)"
                  : "rgba(255, 255, 255, 0.23)",
              "&.Mui-disabled": {
                border: `1px solid ${theme.palette.action.disabledBackground}`,
              },
              "&:hover": {
                borderColor:
                  theme.palette.mode === "light"
                    ? "rgba(0, 0, 0, 0.23)"
                    : "rgba(255, 255, 255, 0.23)",
                backgroundColor: alpha(
                  theme.palette.text.primary,
                  theme.palette.action.hoverOpacity
                ),
              },
            },
          },
          {
            props: {
              variant: "text",
              color: "default",
            },
            style: {
              color: theme.palette.text.primary,
              "&:hover": {
                backgroundColor: alpha(
                  theme.palette.text.primary,
                  theme.palette.action.hoverOpacity
                ),
              },
            },
          },
        ],
      },
    },
  });
}
