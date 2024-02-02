
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Grid, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        renderCell(params) {
            return(
                <NavLink style={{textDecoration:"none", color:'#248dc1'}} to={''}>{params.row.name}<span style={{fontWeight:700,paddingLeft:2}}>.</span></NavLink> 
            )
        },
        editable: true,
    },
    {
        field: 't',
        // headerName: '',
        flex: 4,
        editable: false,
        renderHeader() {
            return (
                <Box className='customtableheader'>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                        <Box sx={{height:"23px", width:'23px',backgroundColor:'#00af51'}}></Box>
                        <Typography className='customTypography'>780+min</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                    <Box sx={{height:"23px", width:'23px',backgroundColor:'#ff7f00'}}></Box>
                        <Typography className='customTypography'>260-754 min</Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}}>
                    <Box sx={{height:"23px", width:'23px',backgroundColor:'#ed2124'}}></Box>
                        <Typography className='customTypography'>&lt;260 min</Typography>
                    </Box>
                </Box>
            )
        },
        renderCell: (params) => {
            return (
                <>
                {/* <Box sx={{ width: '100%', height: '80%' }} className='tableimage'>
                    <Box width={'100%'} height={'100%'}>
                        <Box width={params.row.time} height={'100%'} sx={{
                            bgcolor: params.row.time <= 260 ? '#ed2124' : params.row.time <= 754 ? "#ff7f00" : params.row.time >= 755 ? '#00af51' : ''
                        }}>
                            <Box sx={{ textAlign: 'end', p: 1.5, fontWeight: 700 }}>{params.row.time}
                            </Box>
                        </Box>
                    </Box >
                </Box> */}
                <Grid className='tableimage' container >
                    <Grid container xs={5} sm={8} md={8} lg={12} xl={12}>
                        <Grid item width={params.row.time}
                         sx={{
                            bgcolor: params.row.time <= 260 ? '#ed2124' : params.row.time <= 754 ? "#ff7f00" : params.row.time >= 755 ? '#00af51' : ''
                        }}>
                            <Box sx={{ textAlign: 'end', p: 1.5, fontWeight: 700 }}>{params.row.time}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                </>
            )
        }
    },
    {
        field: 'time',
        headerName: 'Time',
        renderCell: (params) => {
            return (
                <Typography sx={{ fontWeight: 700, color: params.row.time <= 260 ? '#ed2124' : params.row.time <= 754 ? "#ff7f00" : params.row.time >= 755 ? '#00af51' : '' }}>
                    {params.row.time} min
                </Typography>
            )
        },
        editable: false,
    },
];

const Data = [
    { id: 1, name: "shubham", time: 100 },
    { id: 2, name: "chaitanya", time: 755 },
    { id: 3, name: "Nikhil", time: 275 },
    { id: 4, name: "chets", time: 530 },
    { id: 5, name: "chets", time: 230 },
    { id: 6, name: "chets", time: 880 },
    { id: 7, name: "chets", time: 300 },
    { id: 8, name: "chets", time: 200 },
    { id: 9, name: "chets", time: 900 },
    { id: 10, name: "Vedant", time: 100 },
    { id: 11, name: "Rohan", time: 270 },
    { id: 12, name: "chets", time: 100 },
]

const CustomTable = () => {
    return (
        <Box sx={{pt:5}}>
            <DataGrid
            sx={{
                "& .MuiDataGrid-row.Mui-hovered": {
                    backgroundColor: "#fff",
                    }
            }}
                rows={Data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick />
        </Box>
    )
}

export default CustomTable

