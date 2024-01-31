import React from 'react';
import { Box, Button, Card, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material'
import Footer from '../../components/Layout/Footer'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {SchoolList }from '../../dummyData/SchoolList';
import roundedCheckLogo from '../../assets/check-icon-rounded.png'
const OrganizationAdminDashboard = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return (
    <Grid container >
        <Grid item xs={12}>    
            <Grid container sx={{bgcolor: '#248dc1'}} p={'7px 9px 0px 25px'}>
              <Grid item xs={5} display={'flex'} justifyContent={'center'} alignItems={'center'}><Typography color={'#fff'} sx={{fontSize:'32px' , m:'8px 0px 6px' , fontWeight:900}} fontFamily={'Nunito'}>Welcome, ag!</Typography></Grid>
              <Grid item xs={5} display={'flex'} alignItems={'center'} >
                <Typography sx={{color:"#fff"}}>School &nbsp;</Typography>
              <Button
                 id="basic-button"
                 aria-controls={open ? 'basic-menu' : undefined}
                 aria-haspopup="true"
                 aria-expanded={open ? 'true' : undefined}
                 onClick={handleClick} 
                 endIcon={open ?  <ExpandLessIcon/> :<ExpandMoreIcon/> }     
                 sx={{background:'#eaeaea', color:'#555555' , width:'90%' ,display:'flex' , fontSize:'16px' , fontFamily:'Chivo', '&:hover': {
                    backgroundColor: '#eaeaea', 
                  }}} 
              >
               All Schools  <div style={{width:'60%'}}></div>

              </Button>
                 <Menu
                   id="basic-menu"
                   anchorEl={anchorEl}
                   open={open}
                   onClose={handleClose}
                   MenuListProps={{
                     'aria-labelledby': 'basic-button',
                   }}
                 >
                    {SchoolList.map((data ,index)=>{
                        return (
                            <MenuItem key={index} sx={{pr:60}} onClick={handleClose}>{data}</MenuItem>
                        )
                    })}
                 </Menu>
              </Grid>
              <Grid item xs={2}>logout</Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sx={{bgcolor: '#248dc1',p:'30px 0px'}}>
            <Grid container width={{sm:'100%',lg:'80%'}} margin={'auto'} spacing={4}> 
                <Grid item md={6} xs={12} lg={4}>
                    <Card sx={{p:2 , minHeight:'300px'}}>
                        <Grid container>
                            <Grid item xs={12}> 
                              <Typography sx={{fontWeight:700 , fontFamily:"Nunito" , color:'#248dc1', fontSize:'22px',display:'flex' , justifyContent:'center',alignItems:'center'}}> Ignite by Hatch <sup style={{fontSize:'10px'}}>TM</sup> &nbsp; Utilization
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px', display:'flex', alignItems:'center' ,justifyContent:'center'}}>
                                  <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'42px' , color:'#ff7f00' }}>0</Typography> of <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'42px' , color:'#248DC1' }}> 79</Typography> classes</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px' ,color:'#737373',display:'flex' , justifyContent:'center'}}>in your School have recently used Ignite.</Typography>
                            </Grid>
                            <Divider  sx={{borderColor:'#316AFF', width:'100%',my:0.5}}/>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px', display:'flex', alignItems:'center' ,justifyContent:'center' }}> <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'42px' , color:'#ED2124' }}>51</Typography> Classes.</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px' ,color:'#737373',display:'flex' , justifyContent:'center'}}>have no children.</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'16px' ,color:'#248DC1' ,display:'flex' , justifyContent:'center'}}>View Detailed Report </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={6} xs={12} lg={4}>
                    <Card sx={{p:2, minHeight:'300px'}}>
                    <Grid container>
                            <Grid item xs={12}> 
                              <Typography sx={{fontWeight:700 , fontFamily:"Nunito" , color:'#248dc1', fontSize:'22px'}}> Average Demonstrated Skill Progress
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} display={'flex'} alignItems={'center'} mt={4}>
                                        <Typography sx={{fontFamily: '"Chivo", sans-serif',fontSize:'10px' }}>CURRENT</Typography> &nbsp;
                                        <Box sx={{width:'100%',bgcolor:'#000',height:50, backgroundImage: 'repeating-linear-gradient(-45deg, #A7A3A3, #A7A3A3 2px, #fff 4px, #fff 4px)'}}>
                                          <Box width={200} height={50} bgcolor={'#00AF52'}></Box>
                                        </Box>
                                        </Grid>
                                    <Grid item xs={12} display={'flex'} alignItems={'center'}>
                                      <Typography sx={{fontFamily: '"Chivo", sans-serif',fontSize:'10px', }}>30 DAYS AGO</Typography>&nbsp;
                                        <Box sx={{width:'100%',bgcolor:'#000',height:30,backgroundImage: 'repeating-linear-gradient(-45deg, #A7A3A3, #A7A3A3 2px, #fff 4px, #fff 4px)'}}>
                                          <Box width={200} height={30} bgcolor={'#00AF52'}></Box>
                                        </Box></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                            <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'16px' ,color:'#248DC1' ,display:'flex' , justifyContent:'center',mt:6}}>View Detailed Report </Typography>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item md={6} xs={12} lg={4}>
                <Card sx={{p:2, minHeight:'300px'}}>
                        <Grid container >
                            <Grid item xs={12}> 
                              <Typography sx={{fontWeight:700 , fontFamily:"Nunito" , color:'#248dc1', fontSize:'22px'}}> Want to Learn More ?
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px' ,color:'#737373',display:'flex' , justifyContent:'center',textAlign:'center'}}>Check out our professional development options to get the most out of Hatch!</Typography>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                                <Button variant='outlined' sx={{fontFamily: '"Chivo", sans-serif' ,color:"#248DC1" , borderRadius:20,my:2}}>View PD Options</Button>
                            </Grid>
                            <Divider  sx={{borderColor:'#316AFF', width:'100%',my:0.5}}/>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px' ,color:'#737373',display:'flex' , justifyContent:'center',textAlign:'center'}}>For help articles or to contact our US-based support site . </Typography>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Button variant='outlined' sx={{fontFamily: '"Chivo", sans-serif' ,color:"#248DC1" , borderRadius:20,my:2}}>Hatch Support Site</Button>
                            </Grid>
                        </Grid>
                    </Card> 
                </Grid>
                <Grid item md={6} xs={12} lg={4}> 
                <Card sx={{p:2, minHeight:'300px'}}>
                        <Grid container>
                            <Grid item xs={12}> 
                              <Typography sx={{fontWeight:700 , fontFamily:"Nunito" , color:'#248dc1', fontSize:'22px' , display:'flex' , justifyContent:'center'}}> Support Needed
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif' , display:'flex' , justifyContent:'center' }}><img src={roundedCheckLogo}alt='checkrounded'/></Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'16px' ,color:'#00AF51' ,display:'flex' , justifyContent:'center',textAlign:'center'}}>Your support has paid off! All children are progressing.</Typography>
                            </Grid>
                        </Grid>
                 </Card>
                 </Grid>
                <Grid item md={6} xs={12} lg={4}>
                <Card sx={{p:2, minHeight:'300px'}}>
                        <Grid container>
                            <Grid item xs={12}> 
                              <Typography sx={{fontWeight:700 , fontFamily:"Nunito" , color:'#248dc1', fontSize:'22px',display:'flex' , justifyContent:'center',alignItems:'center'}}> Average Play Time
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px' ,color:'#737373',display:'flex' , justifyContent:'center',textAlign:'center'}}>This week children have played on average:</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'42px' ,color:'#248DC1',display:'flex' , justifyContent:'center',textAlign:'center'}}>0</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'18px' ,color:'#737373',display:'flex' , justifyContent:'center',textAlign:'center'}}>minutes</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px' ,color:'#737373',display:'flex' , justifyContent:'center',alignItems:'center',textAlign:'center'}}>We recommend children play Ignite TM by Hatch for 30 minutes each week</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'16px' ,color:'#248DC1' ,display:'flex' , justifyContent:'center'}}>View Play Time for All Children </Typography>
                            </Grid>
                        </Grid>
                </Card>
                </Grid>
                <Grid item md={6} xs={12} lg={4}> 
                <Card sx={{p:2, minHeight:'300px'}}>
                        <Grid container>
                            <Grid item xs={12}> 
                              <Typography sx={{fontWeight:700 , fontFamily:"Nunito" , color:'#248dc1', fontSize:'22px',display:'flex' , justifyContent:'center',alignItems:'center'}}> Teaching Strategies GOLD
                              </Typography>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'42px' , color:'#ED2124' }}>3%</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'14px' ,color:'#737373',display:'flex' , justifyContent:'center',alignItems:'center',textAlign:'center'}}>of children are matched to GOLD profiles and sending Ignite Progress data</Typography>
                            </Grid>
                            <Divider  sx={{borderColor:'#316AFF', width:'100%',my:0.5}}/>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'16px' ,color:'#248DC1' ,display:'flex' , justifyContent:'center'}}>Total Documents Sent :</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'34px' ,color:'#248DC1' ,display:'flex' , justifyContent:'center'}}>3</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography sx={{fontFamily: '"Chivo", sans-serif', fontSize:'16px' ,color:'#248DC1' ,display:'flex' , justifyContent:'center'}}>Manage HatchSync Connection</Typography>
                            </Grid>
                        </Grid>
                </Card>
                    </Grid>
                <Grid item xs={12}>Current ignite version </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12}> <Footer/> </Grid>
        
    </Grid>
  )
}

export default OrganizationAdminDashboard