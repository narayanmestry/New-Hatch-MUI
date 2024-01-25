import { Route, Routes } from "react-router-dom"
import LoginRegistrationPage from "../pages/auth/LoginRegistrationPage"
import RootLayout from "../pages/Root/RootLayout"
import ViewChildren from "../pages/orgadmin/ViewChildren";
import AddChild from "../pages/orgadmin/AddChild";
import IgniteChildPLayTime from '../pages/orgadmin/IgniteChildPLayTime'

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginRegistrationPage />} />
            <Route path="org" element={<RootLayout />}>
                {/* Org Admin Routes */}
                <Route path="view-children" element={<ViewChildren />} />
                <Route path="add-child" element={<AddChild />} />
                <Route path="ignite-child-play-time" element={<IgniteChildPLayTime />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes    