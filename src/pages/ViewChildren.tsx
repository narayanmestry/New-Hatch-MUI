import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { Link } from "react-router-dom"
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import EditIcon from '@mui/icons-material/Edit';

import PageHeader from "../components/PageHeader"
import CommonSelect from "../components/CommonSelect"
import InputWithSearch from "../components/InputWithSearch"
import { SchoolList } from "../dummyData/SchoolList"
import { ClassList } from "../dummyData/ClassList"
import { StatusList } from "../dummyData/StatusList"
import Footer from "../components/Layout/Footer"
import crossImg from '../assets/images/insight/red-close.png'

// import HeaderButton from "../components/HeaderButton"
// import { OrgnizationList } from "../dummyData/OrgnizationList"

function ViewChildren() {
    // coloums
    const cols: GridColDef[] = [


        {
            field: 'name',
            headerName: 'Name',
            width: 250,
        },
        { field: 'age', headerName: 'Age', width: 150    },
        {
            field: 'school', headerName: 'School', width: 250, renderCell: ( params ) => {
                return <>
                    <Box >
                        <CommonSelect bg_color="#eeeeee" list={SchoolList} labelName="" />
                    </Box>
                </>
            }
        },
        {
            field: 'class', headerName: 'Class', width: 250, renderCell: ( params ) => {
                return <>
                    <Box>
                        <CommonSelect bg_color="#eeeeee" list={ClassList} labelName="" />
                    </Box>
                </>
            }
        },
        { field: 'educational_journey', headerName: 'Educational Journey', width: 200 },
        {
            field: 'photos', headerName: 'Photos', width: 200, renderCell: ( params ) => {
                return <>
                    <Box>
                        <Link style={{ textDecoration: 'none' }} to={'https://rmsstaging.hatchearlychildhood.com/insightchild/edit/class_id/MTMyODk0/child_id/MjE4NTczOA=='}>Has Photo</Link>
                    </Box>
                </>
            }
        },
        {
            field: 'hatchsync_status', headerName: 'HatchSync Status', width: 150, renderCell: ( params ) => {
                return <>
                    <Box>
                        {/* <Avatar alt="Remy Sharp" src={crossImg} sx={{ width: '100px' }} /> */}
                        <img src={crossImg} alt="" width={'40px'} />
                    </Box>
                </>
            }
        },
        {
            field: 'activation', headerName: 'Activation', width: 120, renderCell: ( params ) => {
                return <>
                    <Box>
                        <Link style={{ textDecoration: 'none' }} to={''}>Deactivate
                        </Link>
                    </Box>
                </>
            }
        },
        {
            field: 'edit', headerName: 'Edit', width: 180, renderCell: ( params ) => {
                return <>
                    <Box>
                        <Button size="small" 
                          variant="text"  
                          sx={{
                            textTransform:'none',
                            padding:'8px 22px',
                            borderRadius:'20px',
                            '&:hover':{
                                background:'#248dc1',
                                color:'#fff'
                            }
                            }}
                         startIcon={<EditIcon fontSize="small" />}> Edit Info </Button>
                    </Box>
                </>
            }
        },
    ]

    const rows = [
        {
            id: 1, 
            name: 'John Lio John LioJohn LioJohn LioJohn LioJohn LioJohn LioJohn LioJohn Lio John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 2,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 3,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 4,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 5,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 6,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 7,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 8,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 9,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 10,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 11,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
        {
            id: 12,
            name: 'John Lio',
            age: '6y 2m',
            school: 'SP jucj  dkfnkd ',
            class: 'USA_GNF organization',
            educational_journey: 'Ignite, IgniteTable',
            Photos: 'yes',
            hatchsync_status: 'hatchsync_status',
            Activation: 'Activation',
            edit: 'Edit'
        },
    ]
    return (
        <Box>
            <Stack direction={'row'} justifyContent={'space-between'} sx={{
                bgcolor: '#248dc1',
                color: '#ffffff',
            }}>
                <PageHeader headerName="View All Children" />
                <Stack direction={'row'} gap={4} mr={2} >
                    <Button className="header-btn" variant="text" startIcon={<AddCircleOutlineOutlinedIcon />}
                        sx={{
                            width: '135px',
                            margin: '12px 0',
                            borderRadius: '20px',
                            '&:hover': {
                                border: '1px solid #fff'
                            }
                        }}>
                        Add a Child
                    </Button>
                    <Button className="header-btn"
                        variant="text"
                        startIcon={<ArrowLeftOutlinedIcon sx={{ marginLeft: '0' }} />}
                        sx={{
                            margin: '12px 0',
                            color: '#fff',
                            borderRadius: '20px',
                            '&:hover': {
                                border: '1px solid #fff'
                            }
                        }}>
                        Back
                    </Button>
                </Stack>
            </Stack>
            <Box mx={5}>
                <Stack direction={'row'} justifyContent={'space-between'} alignContent={'center'} my={5} >
                    <Typography fontFamily={'Chivo'}>
                        Find and edit children. To move children between classes, select the new class from the dropdown in the child’s row
                    </Typography>
                    <Button variant="contained"
                        sx={{
                            background: '#00af51',
                            textTransform: 'none',
                            fontFamily: 'chivo',
                            borderRadius: '37px',
                            padding: '6px 32px',
                            '&:hover': {
                                background: '#009143'
                            }
                        }}  >
                        Import to Add Children
                    </Button>
                </Stack>

                <Box>
                    <Grid container>
                        <Grid item xs={10}>
                            <Stack direction={{lg:'row',xs:'column'}} gap={2}>
                                <Stack direction={'row'} gap={2}  width={'100%'}>
                                    <CommonSelect bg_color="#eeeeee" list={SchoolList} labelName="School :" />
                                    <CommonSelect bg_color="#eeeeee" list={ClassList} labelName="Class :" />
                                    <CommonSelect bg_color="#eeeeee" list={SchoolList} labelName="Teacher :" />
                                </Stack>
                                <Stack direction={'row'} gap={2}  width={'100%'}>
                                    <CommonSelect bg_color="#eeeeee" list={ClassList} labelName="Photo Status :" />
                                    <CommonSelect bg_color="#eeeeee" list={StatusList} labelName="Educational Journey :" />
                                    <CommonSelect bg_color="#eeeeee" list={StatusList} labelName="Status :" />
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}>
                            <Box sx={{ mt: 3, ml: 3 }} width={'90%'}>
                                <InputWithSearch placeholder="Search by Name" />
                            </Box>
                        </Grid>
                    </Grid>
                    <Stack direction={'row'} gap={2} mt={4} mb={6}>
                        <Button variant="contained"
                            sx={{
                                background: '#00af51',
                                textTransform: 'none',
                                fontFamily: 'chivo',
                                borderRadius: '37px',
                                padding: '6px 32px',
                                '&:hover': {
                                    background: '#009143'
                                }
                            }}  >
                            Bulk Edit
                        </Button>
                        <Button variant="contained"
                            sx={{
                                background: 'transparent',
                                textTransform: 'none',
                                fontFamily: 'chivo',
                                borderRadius: '37px',
                                padding: '6px 32px',
                                border: '2px solid #ef3a3a',
                                color: '#ef3a3a',
                                '&:hover': {
                                    background: '#ef3a3a',
                                    color: '#fff'
                                }
                            }}  >
                            Delete/Deactivate
                        </Button>
                    </Stack>
                </Box>
                <Box component='div'>
                    {/* DataGrid */}
                    <Box sx={{ height: 500, width: "100%" }}>
                        <DataGrid
                            rows={rows}
                            // getRowHeight={() => 'auto'}
                            // rowHeight={80}
                            sx={{
                                '& .MuiBox-root': {
                                    width: '100%',
                                },
                                '& .MuiDataGrid-row.Mui-selected, & .MuiDataGrid-row.Mui-selected.Mui-hovered, & .MuiDataGrid-row.Mui-hovered': {
                                    background: 'transparent'
                                },

                                '& .MuiDataGrid-row .MuiDataGrid-cell:nth-child(2)': {
                                    color: '#248dc1'
                                },
                                '& .MuiDataGrid-row .MuiDataGrid-cell:nth-child(9)': {
                                    color: '#248dc1'
                                },
                                '& .MuiDataGrid-main .MuiDataGrid-virtualScroller .MuiDataGrid-row:nth-child(odd)': {
                                    background: '#f2f2f2'
                                },
                                '& .MuiDataGrid-withBorderColor':{
                                    borderColor:'none'
                                },

                                '& .MuiDataGrid-cell':{
                                    padding:'4px 10px'
                                },
                                '& .MuiTablePagination-root .MuiToolbar-root p':{
                                    margin:0
                                }

                            }}
                            columns={cols}
                            initialState={{
                                pagination: {
                                    paginationModel: {
                                        pageSize: 10
                                    }
                                }
                            }}
                            pageSizeOptions={[5,10,15,20,25,30,35,40,45,50]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        >
                        </DataGrid>
                    </Box>
                </Box>

            </Box>


            <Footer />
        </Box>
    )
}

export default ViewChildren