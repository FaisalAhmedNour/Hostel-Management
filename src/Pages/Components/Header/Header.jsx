import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const { pathname } = useLocation()
    const basePath = pathname.split('/')?.[1];
    const path = pathname.split('/')?.[2]
    console.log(pathname, path);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
            {
                basePath === 'dashboard' ?
                    <>
                        <Typography
                            as="li"
                            color="text-[#B0B0B0]"
                            className={`p-1 font-medium rounded-xl  ${path === 'analysis' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
                        >
                            <Link to='/dashboard' className="flex items-center px-4">
                                Dashboard
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            color="text-[#B0B0B0]"
                            className={`p-1 font-medium rounded-xl  ${path === 'rooms' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
                        >
                            <Link to="/dashboard/rooms" className="flex items-center px-4">
                                Rooms
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            color="text-[#B0B0B0]"
                            className={`p-1 font-medium rounded-xl  ${path === 'students' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
                        >
                            <Link to="/dashboard/students" className="flex items-center px-4">
                                Students
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            color="text-[#B0B0B0]"
                            className={`p-1 font-medium rounded-xl  ${path === 'notice_board' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
                        >
                            <Link to="/dashboard/notice_board" className="flex items-center px-4">
                                Notice Board
                            </Link>
                        </Typography>
                    </> :
                    <>
                        <Typography
                            as="li"
                            color="text-[#B0B0B0]"
                            className={`p-1 font-medium rounded-xl  ${pathname === '/' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
                        >
                            <Link to='/' className="flex items-center px-4">
                                Home
                            </Link>
                        </Typography>
                        <Typography
                            as="li"
                            color="text-[#B0B0B0]"
                            className={`p-1 font-medium rounded-xl  ${basePath === 'noticeBoard' ? "shadow-inner shadow-white" : "hover:bg-[#111111]"}`}
                        >
                            <Link to='/noticeBoard' className="flex items-center px-4">
                                Notice Board
                            </Link>
                        </Typography>
                    </>
            }
        </ul>
    );

    return (
        <div className="max-h-[768px] w-screen mx-auto mt-[.1px] bg-[#202020]">
            <Navbar className="sticky top-10 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-[#202020] border-0">
                <div className="flex items-center justify-between text-[#B0B0B0]">
                    <Typography
                        as="a"
                        to="/"
                        className="mr-4 cursor-pointer font-semibold text-[24px] text-[#FFFFFF]"
                    >
                        Hall Management
                    </Typography>
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-x-1">
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Sign Out</span>
                            </Button>
                        </div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </MobileNav>
            </Navbar>
        </div>
    );
}