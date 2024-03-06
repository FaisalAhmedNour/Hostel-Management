import SideBar from '../Components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const MainStudents = () => {
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

export default MainStudents;