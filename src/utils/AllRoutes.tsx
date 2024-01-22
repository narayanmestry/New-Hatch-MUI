import { Route, Routes } from "react-router-dom"

import LoginRegistrationPage from "../pages/auth/LoginRegistrationPage"
import RootLayout from "../pages/Root/RootLayout"
// import HatchAdminDashboard from "../pages/HatchAdminDashboard"
import AddOrganization from '../pages/AddOrganization';
import ViewAllOrganization from "../pages/ViewAllOrganization";
import ViewAllSchool from "../pages/ViewAllSchool";
import AddSchool from "../pages/AddSchool";
import ViewAllUser from "../pages/ViewAllUser";
import AddUser from "../pages/AddUser";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginRegistrationPage />} />
            <Route element={<RootLayout />}>
                <Route path="dashboard" element={<ViewAllUser/>} />
                <Route path="view-all-organization" element={<ViewAllOrganization/>}/>
                <Route path="add-organization" element={<AddOrganization/>}/>
                <Route path="view-all-school" element={<ViewAllSchool/>}/>
                <Route path="add-school" element={<AddSchool/>}/>
                <Route path="view-all-user" element={<ViewAllUser/>}/>
                <Route path="add-user" element={<AddUser/>}/>
            </Route>
        </Routes>
    )
}

export default AllRoutes    