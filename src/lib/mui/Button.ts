import Button from "@mui/material/Button";

declare module "@mui/material/Button" {
  export interface ButtonPropsColorOverrides {
    default: true;
  }
}

export default Button;
