// import { createTheme } from '@mui/material/styles';

// export const hatchTheme = createTheme( {
//     palette: {
//         mode: 'light',
//         primary: {
//             main: '#248dc1',
//             light: '#e9faff'
//         },
//         secondary: {
//             main: '#eeeeee',

//         },
//         success: {
//             main: '#00a551',
//             light: '#cceddc'
//         },
//         info: {
//             main: "#0058E5",
//         },
//         warning: {
//             main: "#F2AF4C",
//         },
//         error: {
//             main: "#E9394F",
//         },
//     },
//     // typography:{
      
//     // }
// } );


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
        black:'#000',
        white:'#fff'
    },
    info:{
        main:'#000'
    },
    grey:{
      A100:'#eeeeee',
      A200:'#eaeaea'
    }
    

  },
});