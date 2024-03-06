import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../Pages/Components/Header/Header";
import { useEffect } from "react";

const DashboardLayout = () => {

    const { pathname } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (pathname === '/dashboard') {
            navigate('/dashboard/analysis')
        }
        else if (pathname === '/dashboard/rooms') {
            navigate('/dashboard/rooms/occupancy')
        }
        else if (pathname === '/dashboard/students') {
            navigate('/dashboard/students/manegestudents')
        }
    })

    return (
        <div className="min-h-screen bg-[#5B5B5B] flex flex-col">
            <Header />
            <div className="flex-grow h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;