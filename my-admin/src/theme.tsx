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
    lineHeight: "24px",
  },
  components: {
    ...defaultTheme.components,
    RaDatagrid: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          border: "1px solid #e7e8ef",
          borderRadius: "8px",

          "& .RaDatagrid-headerCell": {
            backgroundColor: "#e7e8ef",
            height: "48px",
            fontWeight: 600,
            paddingLeft: "69px",
          },
          "& .RaDatagrid-headerCell:last-child": {
            borderTopRightRadius: "8px",
          },
          "& .RaDatagrid-headerCell:first-of-type": {
            display: "none",
          },
          "& .RaDatagrid-expandIconCell": {
            display: "none",
          },
          "& .RaDatagrid-row": {
            height: "56px",
          },
          "& .RaDatagrid-rowCell": {
            paddingLeft: "69px",
          },
          "& .RaDatagrid-expandIcon": {
            display: "none",
          },
          "& .RaDatagrid-selectable": {
            "&:hover": {
              backgroundColor: "#F8F9FC",
            },
          },
          "& .RaDatagrid-expandedPanel": {
            position: "absolute",
            marginLeft: "-300px",
          },
          "& .RaLayout-appFrame": { marginTop: 0, backgroundColor: "white" },
        },
      },
    },
    RaList: {
      styleOverrides: {
        root: {
          "& .RaList-main": {
            padding: "24px 24px 0 0",
          },
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
    MuiCard: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "none",
          margin: "0",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#E7E8EF",
          borderRadius: "6px",
        },
        input: {
          padding: "0 0 0 36px",
          height: "40px",
          fontFamily: "Mulish",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        sizeSmall: {
          height: "40px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          width: "100%",
          "& .Mui-focused": {
            borderColor: "#3626A7",
          },
        },
        input: {
          height: "fit-content",
        },
        listbox: {
          maxHeight: "212px",
          padding: "8px",
        },
      },
    },
    RaFilterFormInput: {
      styleOverrides: {
        root: {
          width: "100%",
          ".RaFilterFormInput-spacer": {
            display: "none",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          display: "none",
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
            padding: "0",
          },
        },
      },
    },
    RaSidebar: {
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            border: "1px solid #3626A7",
            backgroundColor: "white",
            padding: "4px 15px",
          },
        },
        page: {
          backgroundColor: "none",
          borderRadius: "6px",
          padding: "0",
        },
        previousNext: {
          backgroundColor: "none",
          borderRadius: "6px",
          border: "1px solid #EBEBED",
          margin: "0 12px",
        },
        text: {
          color: "#151515",
          lineHeight: "32px",
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        spacer: {
          flexGrow: "initial",
          flexShrink: "initial",
          flexBasis: "initial",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          "&.MuiTablePagination-toolbar": {
            paddingLeft: "0",
          },
        },
      },
    },
  },
};

export default theme;
