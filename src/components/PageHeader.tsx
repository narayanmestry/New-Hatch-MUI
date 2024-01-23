import { Box, Typography } from "@mui/material"

interface HeaderNameInterface {
    headerName: string;
}
function PageHeader( props: HeaderNameInterface ) {
    return (
        <Box sx={{
            bgcolor: '#248dc1',
            color: '#ffffff',
            width: '100%',
        }}>
            <Typography variant="h5" component="h1" sx={{ py: 2, ml: 2, fontFamily: 'Nunito' }}>
                {props.headerName}
            </Typography>
        </Box>
    )
}

export default PageHeader