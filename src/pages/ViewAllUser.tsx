import { Box, Grid } from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import PageHeader from "../components/PageHeader"
import CommonSelect from "../components/CommonSelect"
import InputWithSearch from "../components/InputWithSearch"
import { OrgnizationList } from "../dummyData/OrgnizationList"
import { SchoolList } from "../dummyData/SchoolList"
import { ClassList } from "../dummyData/ClassList"
import { StatusList } from "../dummyData/StatusList"
import Footer from "../components/Layout/Footer"

function ViewAllUser() {
    // coloums
    const cols: GridColDef[] = [
        { field: 'id', headerName: 'ID',width:10 },
        { field: 'name', headerName: 'Name' ,width:200 },
        { field: 'email', headerName: 'Email Address',width:200 },
        { field: 'organization', headerName: 'Organization',width:200  },
        { field: 'school', headerName: 'School',width:200  },
        { field: 'role', headerName: 'Role',width:200  },
        { field: 'activation', headerName: 'Activation',width:200  },
        { field: 'lock', headerName: 'lock',width:200  },
        { field: 'message', headerName: 'message',width:200  },
        { field: 'edit', headerName: 'Edit',width:200 },
    ]

    const rows = [
        {
            id:1,
            name: 'John Lio',
            email: 'john@gmail.com',
            organization: 'USA_GNF organization',
            school: 'SP jucj  dkfnkd ',
            role: 'sdsds',
            activation: 'yes',
            lock: 'Lock',
            message: 'message',
            edit: 'Edit'
        },
        {
            id:2,
            name: 'John Lio',
            email: 'john@gmail.com',
            organization: 'USA_GNF organization',
            school: 'SP jucj  dkfnkd ',
            role: 'sdsds',
            activation: 'yes',
            lock: 'Lock',
            message: 'message',
            edit: 'Edit'
        },
        {
            id:3,
            name: 'John Lio',
            email: 'john@gmail.com',
            organization: 'USA_GNF organization',
            school: 'SP jucj  dkfnkd ',
            role: 'sdsds',
            activation: 'yes',
            lock: 'Lock',
            message: 'message',
            edit: 'Edit'
        },
        {
            id:4,
            name: 'John Lio',
            email: 'john@gmail.com',
            organization: 'USA_GNF organization',
            school: 'SP jucj  dkfnkd ',
            role: 'sdsds',
            activation: 'yes',
            lock: 'Lock',
            message: 'message',
            edit: 'Edit'
        },
        

    ]


    return (
        <Box>

            <PageHeader headerName="View All User" />
            <Box sx={{
                mx: 7,
            }}>
                <Grid container pt={9}>
                    <Grid item xs={7}>
                        <CommonSelect list={OrgnizationList} labelName="Organization" />
                        <CommonSelect list={SchoolList} labelName="School" />
                        <CommonSelect list={ClassList} labelName="Class" />
                        <CommonSelect list={StatusList} labelName="Status" />
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{ mt: 3 }}>
                            <InputWithSearch placeholder="Search by Name" />
                            <InputWithSearch placeholder="Search by Email Address"/>
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

export default ViewAllUser