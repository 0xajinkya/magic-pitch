"use client";

import { createTheme } from "@mui/material";


export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#753EE9',
      contrastText: '#353434',
    },
    secondary: {
      main: '#FF916E',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    fontWeightLight: 500,
  },
});