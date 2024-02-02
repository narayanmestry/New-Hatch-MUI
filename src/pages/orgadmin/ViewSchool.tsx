import { Grid, Typography } from "@mui/material"
import CommonSelect from "../../components/CommonSelect"
import { StatusList } from "../../dummyData/StatusList"
import InputWithSearch from "../../components/InputWithSearch"
import ViewSchoolTable from "../../components/Tables/ViewSchoolTable"
import PageHeader from "../../components/PageHeader"

const ViewSchool = () => {
  return (
    <>
    <PageHeader headerName="View All Schools"/>
    <Grid container width={'70%'} margin={'auto'}>
        <Grid item xs={12}><Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'16px', color:'#505050' , py:4}}>Find and edit schools in your organizations</Typography></Grid>
        <Grid item xs={12} display={'flex'}>
          <Grid container display={'flex'} justifyContent={'space-between'} p={1}>
            <Grid item xs={2}><CommonSelect  bg_color="#eeeeee" list={StatusList} labelName="Status :" /></Grid>
            <Grid item xs={2}><InputWithSearch placeholder="Search by Name"/></Grid>
          </Grid>
          
          
        </Grid>
        <Grid item xs={12} pb={2}> <ViewSchoolTable/></Grid>
    </Grid>
    </>
  )
}

export default ViewSchool