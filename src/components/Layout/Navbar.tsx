import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MaterialIcon from '../MaterialIcon'
import HoverMenu from 'material-ui-popup-state/HoverMenu';

import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import PopupState, { bindMenu, bindHover, bindFocus } from 'material-ui-popup-state';

import hatchLogo from '../../assets/insights_logo.png'
import OrgAdminNavbarData from '../../dummyData/OrgAdminNavbarData';

const Navbar = () => {
    console.log( "OrgAdminNavbarData----", OrgAdminNavbarData );
    const [openNavbar, setOpenNavbar] = useState( false );
    const [expanded, setExpanded] = React.useState<string | false>( false );

    const handleChange =
        ( panel: string ) => ( event: React.SyntheticEvent, isExpanded: boolean ) => {
            setExpanded( isExpanded ? panel : false );
        };

    console.log( "----->>>", expanded );

    // main-menu            
    // sub-menu
    // nested-sub-menu
    return (
        <AppBar position="relative" sx={{ bgcolor: '#fff', color: '#000' }} className='orgadmin-navbar'>
            <Toolbar>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                    <Box>
                        <NavLink to={'/dashboard'}><img src={hatchLogo} alt="" className='w-100' /></NavLink>
                    </Box>
                    <Stack direction={'row'} gap={1} sx={{ display: { xs: 'none', lg: 'block' } }}>
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
                                        <PopupState key={index} variant="popover" popupId="demoMenu">
                                            {( popupState ) => (
                                                <React.Fragment>
                                                    <Button
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
                                                        }}
                                                        variant="text"
                                                        {...bindHover( popupState )}
                                                        {...bindFocus( popupState )}
                                                    >
                                                        {menu.title}
                                                    </Button>
                                                    <HoverMenu
                                                        sx={{

                                                            '& .MuiList-root': {
                                                                maxHeight: 'none'
                                                            },
                                                            '& .MuiList-root.MuiMenu-list': {
                                                                padding: 0,
                                                            },

                                                        }}
                                                        {...bindMenu( popupState )}
                                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                                    >
                                                        <Grid container width={isSingleCol() ? 400 : 900} p={1} className=''>
                                                            {
                                                                menu.subMenu.map( ( submemu, index ) => {
                                                                    return (
                                                                        <>
                                                                            {
                                                                                isSingleCol() ?
                                                                                    <Grid item xs={12} key={index} p={1} bgcolor={'#e8fafe'} borderRadius={'7px'} m={1}>
                                                                                        <Box p={2} sx={{ borderRadius: '7px'}}>

                                                                                            <Stack direction={'row'} gap={1}>
                                                                                                <MaterialIcon iconName={submemu.icon} /> <Typography variant='h1' fontSize={20} fontWeight={600}> {submemu.title}</Typography></Stack>
                                                                                            <Stack direction={'column'} gap={2} mt={1}>
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
                                                                                    <Grid item xs={5.7} key={index} p={1} bgcolor={'#e8fafe'} borderRadius={'7px'} m={1}>
                                                                                        <Box p={2}>
                                                                                            <Stack direction={'row'} gap={1}><MaterialIcon iconName={submemu.icon} /> <Typography variant='h1' fontSize={20} fontWeight={600}>{submemu.title}</Typography></Stack>
                                                                                            <Stack direction={'column'} gap={2} mt={1}>
                                                                                                {
                                                                                                    submemu.subMenu.map( ( nested_submenu, index ) => (
                                                                                                        <Box className="link" >
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
                                                    </HoverMenu>
                                                </React.Fragment>
                                            )}
                                        </PopupState>

                                    </>
                                )
                            } )
                        }

                    </Stack>
                    <Button variant='text' sx={{ display: { xs: 'block', lg: 'none' } }} onClick={() => {
                        setOpenNavbar( !openNavbar )
                    }}>
                        <MenuIcon />
                    </Button>

                </Stack>
            </Toolbar>
            {
                openNavbar && (
                    <Box bgcolor={'#fff'} width={'100%'} sx={{ zIndex: 999, position: 'absolute', top: 65, display: { sm: 'block', lg: 'none' } }}>
                        {
                            OrgAdminNavbarData.map( ( menu, index ) => {
                                console.log( "Condition ---- ", expanded === `expanded${index}` );

                                return (
                                    <Accordion expanded={expanded === `panel${index}`} onChange={handleChange( `panel${index}` )} sx={{
                                        '& .MuiPaper-root.MuiAccordion-root.Mui-expanded ': {
                                            margin:'0px'
                                        }
                                    }} >
                                        <AccordionSummary
                                            expandIcon={expanded === `panel${index}` ? <RemoveIcon /> : <AddIcon />}
                                            aria-controls="panel1-content"
                                            id={`panel${index}-header`}

                                        >
                                            {menu.title}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Grid container>
                                                {
                                                    menu.subMenu.map( ( submenu, index ) => (
                                                        <Grid item key={index} xs={12} sm={6} p={1}>
                                                            <Box p={2} sx={{ backgroundColor: '#e8fafe', borderRadius: '7px', height: '100%' }}>
                                                                <Stack direction={'row'} gap={1}><MaterialIcon iconName={submenu.icon} /> <Typography variant='h1' fontSize={20} fontWeight={600}>{submenu.title}</Typography></Stack>
                                                                <Stack direction={'column'} gap={1} mt={1}>
                                                                    {
                                                                        submenu.subMenu.map( ( nested_submenu, index ) => (
                                                                            <Box className="link">
                                                                                <NavLink
                                                                                    to={nested_submenu.link}
                                                                                    key={index}
                                                                                    onClick={() => { setOpenNavbar( false ) }}
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
                                                    ) )
                                                }
                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                )
                            } )
                        }
                    </Box>
                )
            }
        </AppBar>
    );
};

export default Navbar;
