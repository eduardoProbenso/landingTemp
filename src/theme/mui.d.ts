// src/theme/mui.d.ts
import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    gradient: true; // <-- Ahora TypeScript lo reconoce
  }
}
