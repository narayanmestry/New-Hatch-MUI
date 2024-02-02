import { Box, Button, Grid, Typography } from '@mui/material'
import PageHeader from "../../components/PageHeader";
import FormCustomSelect from "../../components/FormCustomSelect";
import { SchoolList } from "../../dummyData/SchoolList";
import CustomSelectTable from "../../components/CustomSelectTable";
import CustomSlider from '../../components/CustomSlider';
import { DateRangeList } from '../../dummyData/DateRange';
import CustomTable from '../../components/CustomTable';
import {useState } from 'react';
import Footer from '../../components/Layout/Footer';

function IgniteChildPLayTime() {
  const [dateRange, setDaterange] = useState<any>('abc')

  const dateRangeSelectFunction = (e: any) => {
    console.log(e.target.value);
    setDaterange(e.target.value);
  }

  return (
    <>
      <Box>
        <Box>
          {/* add child page header */}
          <PageHeader headerName="Child Play Time" />
        </Box>

        <Grid container >
          <Grid item xs={12} sm={11} md={10} lg={9} xl={8} mx={'auto'}>
            <Grid container >
              {/* Average header heding section */}
              <Grid item xs={12}>
                <Box mt={5}>
                  <Typography sx={{ fontSize: '23px', fontWeight: 700, color: '#000' }}>
                    Average Minutes Played Per Child
                  </Typography>
                </Box>
              </Grid>
              {/* blue background part start here  */}
              <Grid item xs={12}>
                <Box sx={{ backgroundColor: "#e9faff", mt: 3, p: '10px 20px', borderRadius: '8px' }}>
                  <Typography sx={{ fontSize: "18px", fontFamily: 'Chivo', color: '#000' }}>
                    Hatch recommends that each child play <span style={{ fontWeight: 700 }}>30 minutes every week </span> to reach their goals by the end of the school year.
                  </Typography>
                </Box>
              </Grid>
              {/* All Select part added here */}
              <Grid item xs={12} mt={5}>
                <Grid container spacing={2} >
                  <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
                    <Box>
                      <FormCustomSelect onChange={() => { }} bg_color="#eeeeee" list={SchoolList}
                        labelName="School" selectName="All Schools" />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >
                    <Box>
                      <FormCustomSelect onChange={() => { }} bg_color="#eeeeee" list={SchoolList}
                        labelName="Classes" selectName="All Classes" />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >
                    <Box>
                      <FormCustomSelect onChange={() => { }} bg_color="#eeeeee" list={SchoolList}
                        labelName="Teacher" selectName="All Teachers" />
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >
                    <Box>
                      <FormCustomSelect onChange={() => { }} bg_color="#eeeeee" list={SchoolList}
                        labelName="Subdomain" selectName=" All Subdomains" />
                    </Box>
                  </Grid>

                  <Grid item mt={2} xs={12} sm={12} md={3}>
                    <Box>
                      {/* <FormCustomSelect bg_color="#eeeeee" list={SchoolList}
                        labelName="Demographics" selectName="All" /> */}
                      <CustomSelectTable bg_color="#eeeeee" list={[]} labelName="Demographics" />
                    </Box>
                  </Grid>

                  <Grid item mt={2} xs={12} sm={12} md={3} >
                    <Box>
                      <FormCustomSelect onChange={(e) => dateRangeSelectFunction(e)
                      } bg_color="#eeeeee" list={DateRangeList}
                        labelName="Date Range" selectName="This Week" />
                    </Box>
                  </Grid>

                  <Grid item mt={2} xs={12} sm={12} md={3}>
                    <Box>
                      <FormCustomSelect onChange={() => { }} bg_color="#eeeeee" list={SchoolList}
                        labelName="Play Access Type" selectName="All" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          
          {/* Reset Button and all added here */}
          <Grid item mx={'auto'} xs={11} xl={10}>
            {dateRange && dateRange == 'abc' ?
              <Grid item md={10.9} lg={9.8} xl={9.6} pb={6}  mx={'auto'}>
                <Box mt={5} py={7} sx={{ backgroundColor: "#efefef" }} >
                  <Typography textAlign={'center'} sx={{ fontFamily: 'Chivo', fontSize: '22px', color: '#5a5050' }}>
                    Oops! There’s no data to display with these filters.
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: 'center', pt: 4 }}>
                    <Button sx={{
                      backgroundColor: "#00af51", p: "13px 25px", borderRadius: "29px", fontWeight: 900, boxShadow: "2px 3px #dbdbdb", textTransform: "none", fontSize: "20px",
                      '&:hover': {
                        backgroundColor: '#009143',
                      },
                    }} variant="contained">
                      Reset Filters
                    </Button>
                  </Box>
                </Box>
              </Grid> : <CustomTable  />}
          </Grid>
          {/* Slider added Here.. */}
          <Grid xs={10} sx={{pt:8,pb:5, mx:'auto'}}>
            <Box>
              <CustomSlider />
            </Box>
          </Grid>
        </Grid>
        <Footer />
      </Box>
    </>
  )
}

export default IgniteChildPLayTime

