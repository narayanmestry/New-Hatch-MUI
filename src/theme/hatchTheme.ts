import { createTheme } from "@mui/material/styles";
export const hatchTheme = createTheme( {
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: "#00af51",
          },
          "& .MuiSvgIcon-root": { fontSize: 29 },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Chivo",
          color: "#111",
          marginBottom: "5px",
          fontSize: '18px',
          paddingLeft: '5px'
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#c7c7c8',
            },
            '&:hover fieldset': {
              borderColor: '#c7c7c8',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#c7c7c8',
            },
          }
        }
      }
    },
  },
  palette: {
    primary: {
      main: "#248dc1",
    },
    secondary: {
      main: "#f44336",
    },
    success: {
      main: "#00a551",
    },
    error: {
      main: "#f44336",
    },
    common: {
      white: "#fff",
    },
    info: {
      main: "#000",
    },
    grey: {
      A100: "#eeeeee",
      A200: "#eaeaea",
    },
  },
  typography: {
    fontFamily: 'chivo',
    fontWeightBold: 700,
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightLight: 400,
    h1:{
      
    }
  }

} );
