import { Link, useLocation } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const SideBar = () => {

    const { pathname } = useLocation()
    const path = pathname.split('/')?.[2];
    const page = pathname.split('/')?.[1];

    return (
        <div className='h-full p-2'>
            <div className="bg-[#202020] rounded-md h-full overflow-hidden">
                {
                    page === 'dashboard' &&
                    <ul className="flex flex-col items-center">
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'analysis' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/analysis">
                                Analysis
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'students' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/students">
                                Students
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'rooms' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/rooms">
                                Rooms
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'complaints' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/complaints">
                                Complaints
                            </Link>
                        </Typography>
                    </ul>
                }
                {
                    page === 'rooms' &&
                    <ul className="flex flex-col items-center">
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'occupancy' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/rooms/occupancy">
                                Occupancy
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'hostel' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/rooms/hostel">
                                Hostel
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'rooms' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/rooms/rooms">
                                Rooms
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'furniture' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/rooms/furniture">
                                Furniture
                            </Link>
                        </Typography>
                    </ul>
                }
                {
                    page === 'students' &&
                    <ul className="flex flex-col items-center">
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'manegestudents' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/students/manegestudents">
                                Manage Students
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'addstudents' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/students/addstudents">
                                Add Students
                            </Link>
                        </Typography>
                    </ul>
                }
            </div>
        </div>
    );
};

export default SideBar;