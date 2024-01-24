import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Layout/Navbar';
import { Box } from '@mui/material';
function RootLayout() {

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  ) 
}

export default RootLayout