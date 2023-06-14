import { defaultTheme } from "react-admin";

const theme = {
  ...defaultTheme,
  palette: {
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#151515",
      secondary: "#9195a4",
    },
    shadows: {
      0: "none",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: "Mulish, sans-serif",
  },
  components: {
    ...defaultTheme.components,
    RaDatagrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          "& .RaDatagrid-headerCell": {
            backgroundColor: "#e7e8ef",
            height: "48px",
            fontWeight: 600,
            lineHeight: "24px",
          },
          "& .RaDatagrid-row": {
            height: "56px",
          },
          "& .RaDatagrid-expandIcon": {
            display: "none",
          },
          "& .RaDatagrid-selectable": {
            "&:hover": {
              backgroundColor: "#F8F9FC",
            },
          },
          "& .RaLayout-appFrame": { marginTop: 0, backgroundColor: "white" },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "none",
          border: "1px solid #e7e8ef",
        },
      },
    },
    RaLayout: {
      styleOverrides: {
        root: {
          "& .RaLayout-appFrame": {
            marginTop: 0,
            backgroundColor: "white",
          },
          "& .RaLayout-content": {
            padding: "0 24px",
          },
        },
      },
    },
  },
};

export default theme;
