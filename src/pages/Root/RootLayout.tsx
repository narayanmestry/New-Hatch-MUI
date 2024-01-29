import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Layout/Navbar';
import { Box } from '@mui/material';
function RootLayout() {

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ zIndex: 0 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default RootLayout