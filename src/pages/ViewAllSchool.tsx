import { Box, Grid } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"


import PageHeader from "../components/PageHeader"
import CommonSelect from "../components/CommonSelect"
import InputWithSearch from "../components/InputWithSearch"
import { OrgnizationList } from "../dummyData/OrgnizationList"
import { StatusList } from "../dummyData/StatusList"
import Footer from "../components/Layout/Footer"

function ViewAllSchool() {

    const cols: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'teacher', headerName: 'Teacher', width: 300 },
        { field: 'classes', headerName: 'Classes', width: 300 },
        { field: 'children', headerName: 'Children', width: 300 },
        { field: 'active_devices', headerName: 'Active Devices', width: 200 },
        { field: 'action', headerName: '', width: 200 },
    ]

    const rows = [
        {
            id: 1,
            name: 'J.K. Mullen High School',
            teacher: '10',
            classes: '4',
            children: '100',
            active_devices: '0',
            action: 'Edit Info',

        },
        {
            id: 2,
            name: 'J.K. Mullen High School',
            teacher: '4',
            classes: '4',
            children: '100',
            active_devices: '0',
            action: 'Edit Info',

        },
        {
            id: 3,
            name: 'J.K. Mullen High School',
            teacher: '10',
            classes: '4',
            children: '100',
            active_devices: '0',
            action: 'Edit Info',

        },
        {
            id: 4,
            name: 'J.K. Mullen High School',
            teacher: '10',
            classes: '4',
            children: '100',
            active_devices: '0',
            action: 'Edit Info',

        },
        {
            id: 5,
            name: 'J.K. Mullen High School',
            teacher: '30',
            classes: '4',
            children: '100',
            active_devices: '0',
            action: 'Edit Info',

        },
    ]

    return (
        <Box>
            <PageHeader headerName="View All School" />
            <Box sx={{ mx: 7}}>
                <Grid container pt={9}>
                    <Grid item xs={7}>
                        <CommonSelect list={OrgnizationList} labelName="Organization" />
                        <CommonSelect list={StatusList} labelName="Status" />

                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{ mt: 3 }}>
                            <InputWithSearch placeholder="Search by Name" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box component='div' maxWidth={1670} ml={8} mt={10}>
                {/* DataGrid */}
                <Box sx={{height:500,width:"100%"}}>   
                    <DataGrid 
                        rows={rows} 
                        columns={cols}
                        initialState={{
                            pagination:{
                                paginationModel:{
                                    pageSize:5
                                }
                            }
                        }}   
                        pageSizeOptions={[5]}
                        checkboxSelection 
                        disableRowSelectionOnClick
                        >
                    </DataGrid>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}

export default ViewAllSchool