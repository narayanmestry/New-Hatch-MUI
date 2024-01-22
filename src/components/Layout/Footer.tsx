import { Box, Typography } from "@mui/material"

function Footer() {
    return (
        <Box component='div' sx={{
            position: 'fixed',
            bottom: 0,
            bgcolor: '#248dc1',
            color: '#ffffff',
            height: 50,
            width: '100%'
        }}>
            <Typography variant="subtitle1" component="h6" sx={{ textAlign:'center', pt:1}}>
                p© 2023 Hatch, Inc.  |   HatchEarlyLearning.com  |     1.800.624.7968 option 4   |  Terms Of Use  |   Privacy Policy
            </Typography>
        </Box>
    )
}

export default Footer