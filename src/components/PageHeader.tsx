import { Box, Typography } from "@mui/material"

interface HeaderNameInterface {
    headerName: string;
}
function PageHeader( props: HeaderNameInterface ) {
    return (
        <Box sx={{
            bgcolor:'#248dc1',
            color:'#ffffff'
        }}>
            <Typography variant="h5" component="h1" sx={{py:1,ml:2}}>
                {props.headerName}
            </Typography>
        </Box>
    )
}

export default PageHeader