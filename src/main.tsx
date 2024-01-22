import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import { hatchTheme } from './theme/hatchTheme.ts';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
  <BrowserRouter>
    <ThemeProvider theme={hatchTheme} >
      <App />
    </ThemeProvider >
  </BrowserRouter>
  ,
)
