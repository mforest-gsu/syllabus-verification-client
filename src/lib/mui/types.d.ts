export type { SelectChangeEvent } from "@mui/material/Select";

export type {
  SxProps,
  Theme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

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

export type {
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridSortModel,
  GridRowSelectionModel,
} from "@mui/x-data-grid-premium";
