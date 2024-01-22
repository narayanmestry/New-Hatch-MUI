import { common } from '@mui/material/colors';
import hatchLogo from '../../assets/insights_logo.png'
import OrgAdminNavbarData from '../../dummyData/OrgAdminNavbarData';
import { NavLink } from 'react-router-dom';


function Navbar() {
    const navbarData = OrgAdminNavbarData;
    return (
        <nav className="navbar navbar-expand-lg py-0">
            <div className="container-fluid">
                <div className='logo-wrapper ms-2'>
                    <NavLink to={'/dashboard'}><img src={hatchLogo} alt="" className='w-100' /></NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        {
                            navbarData.map( ( menu, index ) => (
                                <li key={index} className="nav-item dropdown py-3" color={common.black}>
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {menu.menuTitle}
                                    </a>
                                    <ul className="dropdown-menu p-0 m-0">
                                        {
                                            menu.subMenu.map( ( submenu, index ) => (
                                                <NavLink className="dropdown-item py-2" to={submenu.urlLink} key={index}>
                                                    {
                                                        submenu.subMenuTitle
                                                    }
                                                </NavLink>
                                            ) )
                                        }
                                    </ul>
                                </li>
                            ) )
                        }
                    </ul>
                    <div className='me-2 d-flex align-items-center mt-1' style={{ gap: '10px' }}>
                        <button className='blue-btn py-0 px-3'>
                            <div className='same-view-icon'></div>
                            <div>Sameview</div>
                        </button>
                        <button className='blue-btn py-0 px-3 ml-3'>
                            <div className='emulate-icon'></div>
                            <div>Emulate</div>
                        </button>
                    </div>





                    {/* <ul className="navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ORGANIZATIONS
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        DEVICES
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        DCM 
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        LICENSES
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ADMIN 
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        REPORTS
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ACCOUNT 
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul> */}

                    {/* <div>
                    <button></button>
                </div> */}
                </div>

            </div>
        </nav>
    )
}

export default Navbar