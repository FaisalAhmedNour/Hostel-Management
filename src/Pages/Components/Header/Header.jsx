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
    const path = pathname.split('/')?.[1]
    console.log(pathname, path);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-0">
            <Typography
                as="li"
                color="text-[#B0B0B0]"
                className={`p-1 font-medium rounded-xl  ${path === 'dashboard' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
            >
                <Link to='/' className="flex items-center px-4">
                    Dashboard
                </Link>
            </Typography>
            <Typography
                as="li"
                color="text-[#B0B0B0]"
                className={`p-1 font-medium rounded-xl  ${path === 'rooms' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
            >
                <Link to="/rooms" className="flex items-center px-4">
                    Rooms
                </Link>
            </Typography>
            <Typography
                as="li"
                color="text-[#B0B0B0]"
                className={`p-1 font-medium rounded-xl  ${path === 'students' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
            >
                <Link to="/students" className="flex items-center px-4">
                    Students
                </Link>
            </Typography>
            <Typography
                as="li"
                color="text-[#B0B0B0]"
                className={`p-1 font-medium rounded-xl  ${path === 'notice_board' ? " shadow-inner shadow-white" : "hover:bg-[#111111] "}`}
            >
                <Link to="/notice_board" className="flex items-center px-4">
                    Notice Board
                </Link>
            </Typography>
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
                        Hostel Management
                    </Typography>
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-x-1">
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                            >
                                <span>Sign in</span>
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
            {/* <div className="mx-auto max-w-screen-md py-12">
                <Card className="mb-12 overflow-hidden">
                    <img
                        alt="nature"
                        className="h-[32rem] w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
                    />
                </Card>
                <Typography variant="h2" color="text-[#B0B0B0]" className="mb-2">
                    What is Material Tailwind
                </Typography>
                <Typography color="gray" className="font-normal">
                    Can you help me out? you will get a lot of free exposure doing this
                    can my website be in english?. There is too much white space do less
                    with more, so that will be a conversation piece can you rework to make
                    the pizza look more delicious other agencies charge much lesser can
                    you make the blue bluer?. I think we need to start from scratch can my
                    website be in english?, yet make it sexy i&apos;ll pay you in a week
                    we don&apos;t need to pay upfront i hope you understand can you make
                    it stand out more?. Make the font bigger can you help me out? you will
                    get a lot of free exposure doing this that&apos;s going to be a chunk
                    of change other agencies charge much lesser. Are you busy this
                    weekend? I have a new project with a tight deadline that&apos;s going
                    to be a chunk of change. There are more projects lined up charge extra
                    the next time.
                </Typography>
            </div> */}
        </div>
    );
}