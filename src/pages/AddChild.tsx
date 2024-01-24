//React Internal import 
import { useState } from "react";
import { Link } from "react-router-dom";
//MUI import 
import { Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import PublishIcon from '@mui/icons-material/Publish';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
//Components Import Here
import Footer from "../components/Layout/Footer";
import PageHeader from "../components/PageHeader";
import { SchoolList } from "../dummyData/SchoolList";
import { globalStyle } from "../theme/muiCss";
import FormCustomSelect from "../components/FormCustomSelect";

function AddChild() {
  const [selectedValue, setSelectedValue] = useState('english');
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Box>
        {/* add child page header */}
        <PageHeader headerName="Add Child" />
        <Box>
          <Grid container>
            {/* left side section */}
            <Grid item xs={9} sm={9} md={3} lg={3} px={{ sm: 6, xs: 6, md: 2 }} pt={6} >
              <Box sx={{ backgroundColor: "#eee", borderRadius: 3, p: 1, }}>
                <Typography sx={{ fontFamily: "Chivo,sans-serif", color: "rgb(80, 80, 80)" }}>
                  Adding Multiple Children?
                </Typography>
                <Typography sx={{ backgroundColor: "#eee", textDecoration: "none", fontFamily: "Chivo,sans-serif" }}>
                  <Link to="" style={{ color: '#248dc1', textDecoration: "none" }}>CSV Import</Link>
                </Typography>
              </Box>
              <Box sx={{ backgroundColor: "#eee", borderRadius: 3, p: 1, mt: 1 }}>
                <Typography sx={{ fontFamily: "Chivo,sans-serif", color: "rgb(80, 80, 80)" }}>
                  Adding children from last year?
                </Typography>
                <Typography sx={{ fontFamily: "Chivo,sans-serif" }}>
                  <Link to="" style={{ color: '#248dc1', textDecoration: "none" }}>Carryover Children</Link>
                </Typography>
              </Box>
              <Box sx={{ backgroundColor: "#eee", borderRadius: 3, p: 1, mt: 1 }}>
                <Typography sx={{ fontFamily: "Chivo,sans-serif", color: "rgb(80, 80, 80)" }}>
                  Need to see current Hatch roster?
                </Typography>
                <Typography sx={{ fontFamily: "Chivo,sans-serif", fontSize: "16px", }}>
                  <Link style={{ color: '#248dc1', textDecoration: "none" }} to="">View & Edit Children</Link>
                </Typography>
              </Box>
            </Grid>

            {/* Right side section  */}
            <Grid item xs={12} sm={12} md={9} lg={9} p={6}>
              <Grid container>
                {/* Basic child heading part */}
                <Grid item xs={9}>
                  <Box sx={{ backgroundColor: "#e9faff", mb: 2 }}>
                    <Typography sx={{ p: 2, py: 1, fontSize: "20px", fontFamily: "Nunito", fontWeight: 800 }}>Basic Child Information
                    </Typography>
                  </Box>
                </Grid>
                {/* Form start here */}
                <Grid item xs={9} sx={{ border: "1px solid #ddd", p: 2, mb: 3, borderRadius: "6px" }}>
                  <Grid container >

                    <Grid item xs={12} sm={12} md={6}>
                      <Box sx={{ pr: { sm: 0, md: 2 }, pb: 1 }}>
                        <InputLabel>School*</InputLabel>
                        <FormCustomSelect bg_color="transparent" list={SchoolList} />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6}>
                      <Box>
                        <InputLabel>Class*</InputLabel>
                        <FormCustomSelect bg_color="transparent" list={SchoolList} />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} mt={2}>
                      <Box sx={{ pr: { sm: 0, md: 2 }, pb: 1 }}>
                        <InputLabel>First Name*</InputLabel>
                        <TextField sx={globalStyle.textAreaBorder} fullWidth size="small" />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} mt={{ sx: 0, md: 2 }}>
                      <Box>
                        <InputLabel>Last Name*</InputLabel>
                        <TextField sx={globalStyle.textAreaBorder} fullWidth size="small" />
                      </Box>
                    </Grid>

                    <Grid item xs={10} sm={10} md={4} mt={2}>
                      <Box sx={{ pb: 2 }}>
                        <InputLabel>Date of Birth (MM/DD/YY)*</InputLabel>
                        <TextField sx={globalStyle.textAreaBorder} fullWidth type="date" size="small" />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid item xs={9}>
                    <Grid container>
                      <Grid item xs={12} lg={6.5}>
                        <Box sx={{ fontFamily: "Chivo, sans-serif", color: "#111" }}>
                          <InputLabel>Education Jorney*</InputLabel>
                        </Box>
                        <Box>
                          {/* checkbox added here */}
                          <FormGroup >
                            <FormControlLabel control={<Checkbox defaultChecked disableRipple color="success" />} label="Ignite" />
                            <FormControlLabel control={<Checkbox defaultChecked disableRipple color="success" />} label="IgniteTable" />
                            <FormControlLabel control={<Checkbox defaultChecked disableRipple color="success" />} label="IgnitePanel" />
                          </FormGroup>
                        </Box>
                      </Grid>
                      <Grid item xs={12} lg={5.5} mt={{ xs: 2, lg: 0 }}>
                        <FormControl className="radiobutton" component="fieldset">
                          <FormLabel sx={{ fontFamily: "Chivo", color: '#111 !important', fontSize: '18px' }} component="legend">Ignite Game Language <span style={{ color: "#248dc1" }}>*</span>
                          </FormLabel>
                          <RadioGroup sx={{ pl: 2 }}
                            row
                            aria-label="language"
                            name="language"
                            value={selectedValue}
                            onChange={handleChange}
                          >
                            <Stack direction={{ xs: 'column', lg: 'row' }} gap={1}>
                              <FormControlLabel value="english" control={<Radio sx={{ '&.Mui-checked': { color: '#7b7b7b' } }} />} label="ENGLISH"
                                sx={{
                                  px: 2, borderRadius: "29px",
                                  backgroundColor: selectedValue === 'english' ? '#00af51' : 'none',
                                  color: selectedValue === 'english' ? '#fff' : '',
                                  '& .Mui-checked': {
                                    color: selectedValue === 'english' ? '#7b7b7b' : '',
                                  },
                                  '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#00af51',
                                  },
                                }}
                              />
                              <FormControlLabel value="spanish" control={<Radio sx={{ '&.Mui-checked': { color: '#7b7b7b' } }} />} label="SPANISH"
                                sx={{
                                  px: 2, borderRadius: "29px",
                                  backgroundColor: selectedValue === 'spanish' ? '#00af51' : 'none',
                                  color: selectedValue === 'spanish' ? '#fff' : '',
                                  '& .Mui-checked': {
                                    color: selectedValue === 'spanish' ? '#7b7b7b' : '',
                                  },
                                  '&:hover': {
                                    color: '#fff',
                                    backgroundColor: '#00af51',
                                  },
                                }}
                              />
                            </Stack>
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* Form end here */}
                {/* Right second part start here  */}
                <Grid item xs={9}>
                  {/* child photo part */}
                  <Box sx={{ backgroundColor: "#e9faff", mb: 2 }}>
                    <Typography sx={{ p: 2, py: 1, fontSize: "20px", fontFamily: "Nunito", fontWeight: 800 }}>Child Photo</Typography>
                  </Box>
                  <Box sx={{ border: "1px solid #ddd", p: 2, mb: 3, borderRadius: "6px" }}>
                    <Box>
                      <Typography sx={{ fontFamily: "Chivo", color: "#111", mb: 1.5 }}>Child Photo - Can be added later
                      </Typography>
                    </Box>
                    <Grid container xs={9} sx={{ display: "flex", mb: 3, mt: { xs: 2, lg: 0 } }} >
                      {/* User image add here */}
                      <Grid item>
                        <Avatar
                          alt="Remy Sharp"
                          src="src/assets/user-default.png"
                          sx={{ width: 85, height: 85 }}
                        />
                      </Grid>
                      {/* Success and Upload Button add here */}
                      <Grid item sx={{ pl: 1.5, display: "flex", alignItems: "end" }}>
                        <Button color="success" sx={{
                          borderRadius: "29px", fontWeight: 900, px: 3, mr: 1.5, border: '2px solid #00af51', boxShadow: "2px 3px #dbdbdb", textTransform: "none",
                          '&:hover': {
                            color: '#fff',
                            backgroundColor: '#00af51',
                          },
                        }}>
                          <CameraAltIcon sx={{ fontSize: '18px', mr: 1 }} />
                          Success
                        </Button>
                        <Button color="success" sx={{
                          borderRadius: "29px", fontWeight: 900, px: 3, border: '2px solid #00af51', boxShadow: "2px 3px #dbdbdb", textTransform: "none",
                          '&:hover': {
                            color: '#fff',
                            backgroundColor: '#00af51',
                          },
                        }}>
                          <PublishIcon sx={{ mr: 1 }} />
                          Upload
                        </Button>
                      </Grid>
                    </Grid>
                    {/* checkbox added here */}
                    <Box sx={{ fontFamily: "Chivo, sans-serif", fontSize: "200px", color: "#111" }}>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked disableRipple color="success" />} label="Use placeholder image" />
                        <FormControlLabel control={<Checkbox defaultChecked disableRipple color="success" />} label="Request photo from family member" />
                      </FormGroup>
                    </Box>
                  </Box>
                </Grid>
                {/* Continue button add here */}
                <Grid item xs={9}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button sx={{
                      backgroundColor: "#00af51", py: 1, borderRadius: "29px", fontWeight: 700, boxShadow: "2px 3px #dbdbdb", textTransform: "none", fontSize: "18px", mb: 2,
                      '&:hover': {
                        // color: '#fff',
                        backgroundColor: '#009143',
                      },
                    }} variant="contained">
                      Continue
                      <ChevronRightIcon sx={{ ml: 7 }} />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default AddChild;
