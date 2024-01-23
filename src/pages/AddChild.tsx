import { Link } from "react-router-dom";

import { Avatar, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";

import Footer from "../components/Layout/Footer";
import PageHeader from "../components/PageHeader";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import PublishIcon from '@mui/icons-material/Publish';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CommonSelect from "../components/CommonSelect";
import { SchoolList } from "../dummyData/SchoolList";
import { useState } from "react";

function AddChild() {

  const [selectedValue, setSelectedValue] = useState('english');

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Box>
        <PageHeader headerName="Add Child" />
        <Box>
          <Grid container>
            <Grid item sm={3} p={2} pt={6} >
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

            <Grid item sm={9} p={6}>
              <Grid container>
                <Grid item xs={9}>
                  <Box sx={{ backgroundColor: "#e9faff", mb: 2 }}>
                    <Typography sx={{ p: 2, py: 1, fontSize: "20px", fontFamily: "Nunito", fontWeight: 800 }}>Basic Child Information
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={9} sx={{ border: "1px solid #ddd", p: 2, mb: 3, borderRadius: "6px" }}>
                  <Grid container >
                    <Grid item xs={6}>
                      <Box sx={{ fontFamily: "Chivo", color: "#111", pr: 2, pb: 2 }}>
                        <CommonSelect labelName="School*" list={SchoolList} />
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box sx={{ fontFamily: "Chivo", color: "#111", }}>
                        <CommonSelect labelName="Class*" list={SchoolList} />
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box sx={{ fontFamily: "Chivo", color: "#111", pr: 2, pb: 2 }}>
                        <InputLabel sx={{ fontFamily: "Chivo", color: "#111", }}>First Name*</InputLabel>
                        <TextField fullWidth size="small" />
                      </Box>
                    </Grid>

                    <Grid item xs={6}>
                      <Box sx={{ fontFamily: "Chivo", color: "#111" }}>
                        <InputLabel sx={{ fontFamily: "Chivo", color: "#111", }}>Last Name*</InputLabel>
                        <TextField fullWidth size="small" />
                      </Box>
                    </Grid>

                    <Grid item xs={4}>
                      <Box sx={{ fontFamily: "Chivo", color: "#111", pb: 2 }}>
                        <InputLabel sx={{ fontFamily: "Chivo", color: "#111", }}>Date of Birth (MM/DD/YY)*</InputLabel>
                        <TextField fullWidth type="date" size="small" />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid item xs={9}>
                    <Grid container>
                      <Grid item xs={6.5}>
                        <Box sx={{ fontFamily: "Chivo, sans-serif", color: "#111" }}>Education Jorney*</Box>
                        <Box>
                          <FormGroup >
                            <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Ignite" />
                            <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="IgniteTable" />
                            <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="IgnitePanel" />
                          </FormGroup>
                        </Box>
                      </Grid>
                      <Grid item>
                        <FormControl className="radiobutton" component="fieldset">
                          <FormLabel sx={{ fontFamily: "Chivo", color: '#111 !important' }} component="legend">Ignite Game Language <span style={{ color: "#248dc1" }}>*</span>
                          </FormLabel>
                          <RadioGroup sx={{ pl: 2 }}
                            row
                            aria-label="language"
                            name="language"
                            value={selectedValue}
                            onChange={handleChange}
                          >
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
                          </RadioGroup>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={9}>
                  <Box sx={{ backgroundColor: "#e9faff", mb: 2 }}>
                    <Typography sx={{ p: 2, py: 1, fontSize: "20px", fontFamily: "Nunito", fontWeight: 800 }}>Child Photo</Typography>
                  </Box>
                  <Box sx={{ border: "1px solid #ddd", p: 2, mb: 3, borderRadius: "6px" }}>
                    <Box sx={{}}>
                      <Typography sx={{ fontFamily: "Chivo", color: "#111", mb: 1.5 }}>Child Photo - Can be added later
                      </Typography>
                    </Box>
                    <Grid container xs={9} sx={{ display: "flex", mb: 3 }} >
                      <Grid item>
                        <Avatar
                          alt="Remy Sharp"
                          src="src/assets/user-default.png"
                          sx={{ width: 85, height: 85 }}
                        />
                      </Grid>
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
                    <Box sx={{ fontFamily: "Chivo, sans-serif", fontSize: "200px", color: "#111" }}>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked color="success"/>} label="Use placeholder image" />
                        <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Request photo from family member" />
                      </FormGroup>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={9}>
                  <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <Button sx={{ backgroundColor: "#00af51", py: 1, borderRadius: "29px", fontWeight: 700, boxShadow: "2px 3px #dbdbdb", textTransform: "none", fontSize: "18px", mb: 2 }} variant="contained">
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
