import { Route, Routes } from "react-router-dom"

import LoginRegistrationPage from "../pages/auth/LoginRegistrationPage"
import RootLayout from "../pages/Root/RootLayout"
// import HatchAdminDashboard from "../pages/HatchAdminDashboard"
import AddOrganization from '../pages/hatchadmin/AddOrganization';
import ViewAllOrganization from "../pages/hatchadmin/ViewAllOrganization";
import ViewAllSchool from "../pages/hatchadmin/ViewAllSchool";
import AddSchool from "../pages/hatchadmin/AddSchool";
import ViewAllUser from "../pages/hatchadmin/ViewAllUser";
import AddUser from "../pages/hatchadmin/AddUser";
import ViewChildren from "../pages/orgadmin/ViewChildren";
import AddChild from "../pages/orgadmin/AddChild";

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginRegistrationPage />} />
            <Route path="hatch" element={<RootLayout />}>
                {/* Hatch Admin Routes */}
                <Route path="dashboard" element={<ViewAllUser />} />
                <Route path="view-all-organization" element={<ViewAllOrganization />} />
                <Route path="add-organization" element={<AddOrganization />} />
                <Route path="view-all-school" element={<ViewAllSchool />} />
                <Route path="add-school" element={<AddSchool />} />
                <Route path="view-all-user" element={<ViewAllUser />} />
                <Route path="add-user" element={<AddUser />} />


                <Route path="view-children" element={<ViewChildren />} />
                <Route path="add-child" element={<AddChild />} />
            </Route>
            <Route path="org" element={<RootLayout />}>
                {/* Hatch Admin Routes */}
                <Route path="dashboard" element={<ViewAllUser />} />
                <Route path="view-children" element={<ViewChildren />} />
                <Route path="add-child" element={<AddChild />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes    