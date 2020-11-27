import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: {
      main: "#006064",
    },
  },

  typography: {
    fontFamily: ["PT Serif"],
  },

  shape: {
    borderRadius: 12,
  },


});

export default theme;
