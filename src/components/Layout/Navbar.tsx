import * as React from 'react';
import hatchLogo from '../../assets/insights_logo.png'
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu, bindHover } from 'material-ui-popup-state';
import { Grid, Icon, Stack, Typography } from '@mui/material';
import OrgAdminNavbarData from '../../dummyData/OrgAdminNavbarData';
import MaterialIcon from '../MaterialIcon'
const Navbar = () => {
    console.log( "OrgAdminNavbarData----", OrgAdminNavbarData );
    // main-menu
    // sub-menu
    // nested-sub-menu

    return (
        <AppBar position="static" sx={{ bgcolor: '#fff', color: '#000' }} className='orgadmin-navbar'>
            <Toolbar>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    <Box>
                        <NavLink to={'/dashboard'}><img src={hatchLogo} alt="" className='w-100' /></NavLink>
                    </Box>
                    <Stack direction={'row'} gap={1}>
                        {
                            OrgAdminNavbarData.map( ( menu, index ) => {
                                const subMenuCount = menu.subMenu.length
                                console.log( menu.title, "---- contain ---", subMenuCount );
                                const isSingleCol = () => {
                                    if ( subMenuCount == 1 ) {
                                        return true
                                    } else {
                                        return false
                                    }
                                }
                                return (
                                    <>
                                        <PopupState key={index} variant="popover" popupId="demo-popup-menu">
                                            {( popupState ) => (
                                                <React.Fragment>
                                                    <Button variant="text" {...bindHover(popupState)} disableRipple
                                                        sx={{
                                                            backgroundColor: 'none',
                                                            padding: '20px 10px',
                                                            fontSize: '14px',
                                                            fontWeight: 100,
                                                            color: '#000',
                                                            fontFamily: 'Nunito',
                                                            '&:hover': {
                                                                backgroundColor: '#e5e5e5'
                                                            }
                                                        }} >
                                                        {menu.title}
                                                    </Button>
                                                    <Menu {...bindMenu( popupState )}
                                                        sx={{

                                                            '& .MuiList-root': {
                                                                maxHeight: 'none'
                                                            },
                                                            '& .MuiList-root.MuiMenu-list': {
                                                                padding: 0,
                                                            },

                                                        }}>
                                                        <Grid container width={isSingleCol() ? 400 : 800} p={1} className=''>
                                                            {


                                                                menu.subMenu.map( ( submemu, index ) => {
                                                                    return (
                                                                        <>
                                                                            {
                                                                                isSingleCol() ?
                                                                                    <Grid item xs={12} key={index} p={1}>
                                                                                        <Box p={2} sx={{ backgroundColor: '#e8fafe', borderRadius: '7px', height: '100%' }}>

                                                                                            <Stack direction={'row'} gap={1}>
                                                                                                <MaterialIcon iconName={submemu.icon} /> <Typography variant='h1' fontSize={20} fontWeight={600}> {submemu.title}</Typography></Stack>
                                                                                            <Stack direction={'column'} gap={1} mt={1}>
                                                                                                {
                                                                                                    submemu.subMenu.map( ( nested_submenu, index ) => (
                                                                                                        <Box className="link">
                                                                                                            <NavLink to={nested_submenu.link} key={index} onClick={popupState.close} >
                                                                                                                {
                                                                                                                    nested_submenu.title
                                                                                                                }
                                                                                                            </NavLink>
                                                                                                        </Box>
                                                                                                    ) )
                                                                                                }
                                                                                            </Stack>
                                                                                        </Box>
                                                                                    </Grid>
                                                                                    :
                                                                                    <Grid item xs={6} key={index} p={1}>
                                                                                        <Box p={2} sx={{ backgroundColor: '#e8fafe', borderRadius: '7px', height: '100%' }}>
                                                                                            <Stack direction={'row'} gap={1}><MaterialIcon iconName={submemu.icon} /> <Typography variant='h1' fontSize={20} fontWeight={600}>{submemu.title}</Typography></Stack>
                                                                                            <Stack direction={'column'} gap={1} mt={1}>
                                                                                                {
                                                                                                    submemu.subMenu.map( ( nested_submenu, index ) => (
                                                                                                        <Box className="link"> 
                                                                                                            <NavLink
                                                                                                                to={nested_submenu.link}
                                                                                                                key={index}
                                                                                                                onClick={popupState.close}
                                                                                                            >
                                                                                                                {
                                                                                                                    nested_submenu.title
                                                                                                                }
                                                                                                            </NavLink>
                                                                                                        </Box>
                                                                                                    ) )
                                                                                                }
                                                                                            </Stack>
                                                                                        </Box>
                                                                                    </Grid>
                                                                            }

                                                                        </>

                                                                    )
                                                                } )
                                                            }
                                                        </Grid>
                                                    </Menu>
                                                </React.Fragment>
                                            )}
                                        </PopupState>
                                    </>
                                )
                            } )
                        }

                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
