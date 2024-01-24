// import { common } from '@mui/material/colors';
import hatchLogo from '../../assets/insights_logo.png'
// import HatchAdminNavbarData from '../../dummyData/HatchAdminNavbarData';
import { NavLink } from 'react-router-dom';


// function Navbar() {
//     const navbarData = HatchAdminNavbarData;
//     return (
//         <nav className="navbar navbar-expand-lg py-0">
//             <div className="container-fluid">
//                 <div className='logo-wrapper ms-2'>
//                     <NavLink to={'/dashboard'}><img src={hatchLogo} alt="" className='w-100' /></NavLink>
//                 </div>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                     <ul className="navbar-nav ms-auto">
//                         {
//                             navbarData.map( ( menu, index ) => (
//                                 <li key={index} className="nav-item dropdown py-3" color={common.black}>
//                                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                         {menu.menuTitle}
//                                     </a>
//                                     <ul className="dropdown-menu p-0 m-0">
//                                         {
//                                             menu.subMenu.map( ( submenu, index ) => (
//                                                 <NavLink className="dropdown-item py-2" to={submenu.urlLink} key={index}>
//                                                     {
//                                                         submenu.subMenuTitle
//                                                     }
//                                                 </NavLink>
//                                             ) )
//                                         }
//                                     </ul>
//                                 </li>
//                             ) )
//                         }
//                     </ul>
//                     <div className='me-2 d-flex align-items-center mt-1' style={{ gap: '10px' }}>
//                         <button className='blue-btn py-0 px-3'>
//                             <div className='same-view-icon'></div>
//                             <div>Sameview</div>
//                         </button>
//                         <button className='blue-btn py-0 px-3 ml-3'>
//                             <div className='emulate-icon'></div>
//                             <div>Emulate</div>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar


import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Paper from '@mui/material/Paper';
import { Grid, Stack, Typography, colors } from '@mui/material';
import OrgAdminNavbarData from '../../dummyData/OrgAdminNavbarData';

const Navbar = () => {
    console.log( "OrgAdminNavbarData----", OrgAdminNavbarData );
    // main-menu
    // sub-menu
    // nested-sub-menu


    return (
        <AppBar position="static" sx={{ bgcolor: '#fff', color: '#000' }}>
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
                                                    <Button variant="text" {...bindTrigger( popupState )} disableRipple
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
                                                        <Grid container width={isSingleCol() ? 300 : 700} p={1}>
                                                            {


                                                                menu.subMenu.map( ( submemu, index ) => (
                                                                    <>
                                                                        {
                                                                            isSingleCol() ?
                                                                                <Grid item xs={12} key={index} p={1}>
                                                                                    <Box p={2} sx={{ backgroundColor: '#e8fafe', borderRadius: '7px', height: '100%' }}>
                                                                                        <Typography variant='h1' fontSize={20} fontWeight={600}>{submemu.title}
                                                                                        </Typography>
                                                                                        <Stack direction={'column'}>
                                                                                            {
                                                                                                submemu.subMenu.map( ( nested_submenu, index ) => (
                                                                                                    <>
                                                                                                        <NavLink to={nested_submenu.link} key={index} onClick={popupState.close}>
                                                                                                            {
                                                                                                                nested_submenu.title
                                                                                                            }
                                                                                                        </NavLink>
                                                                                                    </>
                                                                                                ) )
                                                                                            }
                                                                                        </Stack>
                                                                                    </Box>
                                                                                </Grid>
                                                                                :
                                                                                <Grid item xs={6} key={index} p={1}>
                                                                                    <Box p={2} sx={{ backgroundColor: '#e8fafe', borderRadius: '7px', height: '100%' }}>
                                                                                        <Typography variant='h1' fontSize={20} fontWeight={600}>{submemu.title}
                                                                                        </Typography>
                                                                                        <Stack direction={'column'}>
                                                                                            {
                                                                                                submemu.subMenu.map( ( nested_submenu, index ) => (
                                                                                                    <>
                                                                                                        <NavLink to={nested_submenu.link} key={index} onClick={popupState.close}>
                                                                                                            {
                                                                                                                nested_submenu.title
                                                                                                            }
                                                                                                        </NavLink>
                                                                                                    </>
                                                                                                ) )
                                                                                            }
                                                                                        </Stack>
                                                                                    </Box>
                                                                                </Grid>
                                                                        }

                                                                    </>

                                                                ) )
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
