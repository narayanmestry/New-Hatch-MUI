import { createTheme } from '@mui/material/styles';
export const hatchTheme = createTheme({
  palette: {
    primary: {
      main:'#248dc1'
    },
    secondary: {
      main: '#f44336',
    },
    success:{
        main:'#00a551'
    },
    error:{
        main:'#f44336'
    },
    common:{
        white:'#fff'
    },
    info:{
        main:'#000',
    },
    grey:{
      A100:'#eeeeee',
      A200:'#eaeaea'
    }
  },
});