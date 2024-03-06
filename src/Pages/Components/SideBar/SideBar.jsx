import { Link, useLocation } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const SideBar = () => {

    const { pathname } = useLocation()
    const path = pathname.split('/')?.[3];
    const page = pathname.split('/')?.[2];

    return (
        <div className='h-full p-2'>
            <div className="bg-[#202020] rounded-md h-full overflow-hidden">
                {
                    page === 'main' &&
                    <ul className="flex flex-col items-center">
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'analysis' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/main/analysis">
                                Analysis
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'mainstudents' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/main/mainstudents">
                                Students
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'mainrooms' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/main/mainrooms">
                                Rooms
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'maincomplaints' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/main/maincomplaints">
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
                            <Link className="w-full px-8 py-3" to="/dashboard/rooms/occupancy">
                                Occupancy
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'hostel' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/rooms/hostel">
                                Hostel
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'rooms' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/rooms/rooms">
                                Rooms
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'furniture' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/rooms/furniture">
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
                            <Link className="w-full px-8 py-3" to="/dashboard/students/manegestudents">
                                Manage Students
                            </Link>
                        </Typography>
                        {/* <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'addstudents' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/students/addstudents">
                                Add Students
                            </Link>
                        </Typography> */}
                        {/* <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'addcomplaints' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/students/addcomplaints">
                                Add Complaints
                            </Link>
                        </Typography> */}
                    </ul>
                }
                {
                    page === 'notice_board' &&
                    <ul className="flex flex-col items-center">
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'list' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/notice_board/list">
                                Notice List
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            className={`font-medium w-full flex justify-start ${path === 'addnotice' ? "bg-[#2e2e2e] text-white" : "hover:bg-[#272525] text-[#B0B0B0]"}`}
                        >
                            <Link className="w-full px-8 py-3" to="/dashboard/notice_board/addnotice">
                                Add Notice
                            </Link>
                        </Typography>
                    </ul>
                }
            </div>
        </div>
    );
};

export default SideBar;