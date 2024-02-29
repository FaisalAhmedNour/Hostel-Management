import { Outlet } from "react-router-dom";
import SideBar from "../Components/SideBar/SideBar";

const MainRooms = () => {
    return (
        <div className="grid grid-cols-5">
            <div
                className="h-full"
                style={{
                    minHeight: 'calc(100vh - 68px)'
                }}
            >
                <SideBar />
            </div>
            <div className="col-span-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MainRooms;