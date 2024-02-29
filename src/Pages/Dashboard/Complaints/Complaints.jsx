import { Button, Input, Avatar } from "@material-tailwind/react";

const Complaints = () => {
    return (
        <div className="mb-2 grid grid-cols-4">
            <div className='col-span-3'>
                <div className='bg-[#2e2e2e] rounded-md p-2 mt-2 grid grid-cols-4 gap-5'>
                    <div className='bg-[#111111] rounded-lg grid grid-cols-3 overflow-hidden'>
                        <div className='bg-[#00FFF5] col-span-2'></div>
                        <div className='bg-[#FFE605] '></div>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Total Complaints<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <p className='text-xl text-white'>158</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Resolved<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <p className='text-xl text-[#00FFF5]'>96</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Open<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <p className='text-xl text-[#FFE605]'>62</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#2e2e2e] rounded-md p-2 mt-2">
                        <p className="text-white text-sm flex items-center gap-1">Recent Complaints <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <div className="mt-2 flex gap-2">
                            <Input
                                style={{ 'background-color': 'black' }}
                                className="bg-[#111111]"
                                label="Search"
                            />
                            <Button className="flex items-center gap-3 w-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucideList-filter text-white"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                Filter
                            </Button>
                        </div>
                        <div>
                            <div className="bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div className="flex justify-between items-center gap-2">
                                    <div>
                                        <Avatar
                                            alt="avatar"
                                            className="w-7 h-7"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                    </div>
                                    <div className="flex-grow text-white">Faisal Ahmed</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 text-[red]"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p className="flex">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2022</span>
                                </p>
                                <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Add Delay Fine</Button>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#00FFF5] border-[#00FFF5]"
                                    >Fine Received</Button>
                                </p>

                            </div>
                            <div className="bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div className="flex justify-between items-center gap-2">
                                    <div>
                                        <Avatar
                                            alt="avatar"
                                            className="w-7 h-7"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                    </div>
                                    <div className="flex-grow text-white">Faisal Ahmed</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 text-[red]"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p className="flex">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2022</span>
                                </p>
                                <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Add Fine</Button>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#00FFF5] border-[#00FFF5]"
                                    >Send Payment Link</Button>
                                </p>

                            </div>
                            <div className="bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div className="flex justify-between items-center gap-2">
                                    <div>
                                        <Avatar
                                            alt="avatar"
                                            className="w-7 h-7"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                    </div>
                                    <div className="flex-grow text-white">Faisal Ahmed</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 text-[red]"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p className="flex">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2022</span>
                                </p>
                                <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Add Fine</Button>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#00FFF5] border-[#00FFF5]"
                                    >Send Payment Link</Button>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="bg-[#2e2e2e] rounded-md p-2 mt-2">
                        <p className="text-white text-sm flex items-center gap-1">Solved Complaints <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <div className="mt-2 flex gap-2">
                            <Input
                                style={{ 'background-color': 'black' }}
                                className="bg-[#111111]"
                                label="Search"
                            />
                            <Button className="flex items-center gap-3 w-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucideList-filter text-white"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                Filter
                            </Button>
                        </div>
                        <div>
                            <div className="bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div className="flex justify-between items-center gap-2">
                                    <div>
                                        <Avatar
                                            alt="avatar"
                                            className="w-7 h-7"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                    </div>
                                    <div className="flex-grow text-white">Faisal Ahmed</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[green]"><path d="M20 6 9 17l-5-5" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p className="flex mb-2">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2022</span>
                                </p>
                                {/* <p className="mt-5 mb-1 flex justify-around">
                                        <Button
                                            variant="outlined"
                                            size="sm"
                                            className="text-[#FF1010] border-[#FF1010]"
                                        >Add Delay Fine</Button>
                                        <Button
                                            variant="outlined"
                                            size="sm"
                                            className="text-[#00FFF5] border-[#00FFF5]"
                                        >Fine Received</Button>
                                    </p> */}

                            </div>
                            <div className="bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div className="flex justify-between items-center gap-2">
                                    <div>
                                        <Avatar
                                            alt="avatar"
                                            className="w-7 h-7"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                    </div>
                                    <div className="flex-grow text-white">Faisal Ahmed</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[green]"><path d="M20 6 9 17l-5-5" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p className="flex mb-2">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2022</span>
                                </p>
                                {/* <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Add Fine</Button>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#00FFF5] border-[#00FFF5]"
                                    >Send Payment Link</Button>
                                </p> */}

                            </div>
                            <div className="bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div className="flex justify-between items-center gap-2">
                                    <div>
                                        <Avatar
                                            alt="avatar"
                                            className="w-7 h-7"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                    </div>
                                    <div className="flex-grow text-white">Faisal Ahmed</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[green]"><path d="M20 6 9 17l-5-5" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p className="flex mb-2">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2022</span>
                                </p>
                                {/* <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Add Fine</Button>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#00FFF5] border-[#00FFF5]"
                                    >Send Payment Link</Button>
                                </p> */}
                            </div>
                            <div className="bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div className="flex justify-between items-center gap-2">
                                    <div>
                                        <Avatar
                                            alt="avatar"
                                            className="w-7 h-7"
                                            src="https://docs.material-tailwind.com/img/face-2.jpg"
                                        />
                                    </div>
                                    <div className="flex-grow text-white">Faisal Ahmed</div>
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[green]"><path d="M20 6 9 17l-5-5" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p className="flex mb-2">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2022</span>
                                </p>
                                {/* <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Add Fine</Button>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#00FFF5] border-[#00FFF5]"
                                    >Send Payment Link</Button>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complaints;