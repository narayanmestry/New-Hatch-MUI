import { Box, Grid } from '@mui/material'
import { DataGrid, GridColDef } from "@mui/x-data-grid"

import PageHeader from '../components/PageHeader'
import CommonSelect from '../components/CommonSelect'
import InputWithSearch from '../components/InputWithSearch'
import { StatusList } from '../dummyData/StatusList'
import { LicenceFeaturesList } from '../dummyData/LicenceFeaturesList'
import { ProductTypeList } from '../dummyData/ProductTypeList'
import { PartnerShipData } from '../dummyData/PartnerShipData'
import Footer from '../components/Layout/Footer'

function ViewAllOrganization() {
    const cols: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'hatch_id', headerName: 'Hatch ID', width: 300 },
        { field: 'org_type', headerName: 'Organization Type', width: 300 },
        { field: 'city', headerName: 'City', width: 300 },
        { field: 'school', headerName: 'Schools', width: 200 },
        { field: 'lic_type', headerName: 'License Type', width: 200 },
        { field: 'lic_feature', headerName: 'License Feature', width: 200 },
        { field: 'pendo_metrics', headerName: 'Pendo Metrics', width: 200 },
        { field: 'action', headerName: '', width: 200 },
    ]

    const rows = [
        {
            id: 1,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 2,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 3,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 4,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 5,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 6,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 7,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 8,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 9,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 10,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: ''
        },
        {
            id: 11,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        },
        {
            id: 12,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        }, {
            id: 13,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',
            
        },
        {
            id: 14,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        }, {
            id: 15,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        }, {
            id: 16,
            name: 'United Nations Staging',
            hatch_id: 'United Nations23344556',
            org_type: 'Internal Test',
            city: 'Clever',
            school: '0',
            lic_type: 'Ignite, IgniteTable',
            lic_feature: 'Paid,Paid',
            pendo_metrics: 'Metrics',
            action: '',

        }

    ]

    return (
        <Box>
            <PageHeader headerName="View All Organization" />
            <Box sx={{
                mx: 7,
            }}>
                <Grid container pt={9}>
                    <Grid item xs={7}>
                        <CommonSelect list={StatusList} labelName="Status" />
                        <CommonSelect list={LicenceFeaturesList} labelName="License Feature" />
                        <CommonSelect list={ProductTypeList} labelName="Product Type" />
                        <CommonSelect list={PartnerShipData} labelName="Partnership" />
                        <InputWithSearch placeholder="Search by Name" />
                        <InputWithSearch placeholder="Search by Email Address" />
                        <InputWithSearch placeholder="Search by City" />
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{ mt: 3 }}>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box component='div' maxWidth={1670} ml={8} mt={10}>
                {/* DataGrid */}
                <Box sx={{ height: 400, width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={cols}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 10
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
            <Footer />
        </Box>
    )
}

export default ViewAllOrganization