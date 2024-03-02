import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../Pages/Components/Header/Header";
import { useEffect } from "react";

const DashboardLayout = () => {

    const { pathname } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        if (pathname === '/') {
            navigate('/dashboard/analysis')
        }
        else if (pathname === '/rooms') {
            navigate('/rooms/occupancy')
        }
        else if (pathname === '/students') {
            navigate('/students/manegestudents')
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