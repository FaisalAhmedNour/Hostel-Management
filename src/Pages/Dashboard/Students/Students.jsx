import {
    Button,
    Avatar,
    Input
} from "@material-tailwind/react";

const Students = () => {
    return (
        <div className="mb-2 grid grid-cols-4">
            <div className='col-span-3'>
                <div className='bg-[#2e2e2e] rounded-md p-2 mt-2 grid grid-cols-4 gap-x-6 gap-y-3'>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Total Students<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <p className='text-xl text-white'>3569</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>In Hostel<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <p className='text-xl text-[#00FFF5]'>1569</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Outside Hostel<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <p className='text-xl text-[#B0B0B0]'>2500</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg row-span-2 flex flex-col justify-between'>
                        <p className='text-white text-sm flex gap-1'>Fees Defaulters</p>
                        <p className='text-3xl font-semibold text-[#FFE605]'>150</p>
                        <Button>Button</Button>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Students Assigned<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <p className='text-xl text-[#FF05C8]'>2500</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Student Removed<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <p className='text-xl text-[#F10606]'>1000</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#2e2e2e] rounded-md p-2 mt-2">
                        <p className="text-white text-sm flex items-center gap-1">Students <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <div className="mt-2 flex gap-2">
                            <Input
                                style={{ 'background-color': 'black' }}
                                className="bg-[#111111]"
                                label="Search"
                            />
                            <Button className="flex items-center gap-3 w-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter text-white"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                Filter
                            </Button>
                        </div>
                        <div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                            <div className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                <div>
                                    <Avatar
                                        alt="avatar"
                                        className="w-7 h-7"
                                        src="https://docs.material-tailwind.com/img/face-2.jpg"
                                    />
                                </div>
                                <div className="flex-grow text-white">Faisal Ahmed</div>
                                <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#2e2e2e] rounded-md p-2 mt-2">
                        <p className="text-white text-sm flex items-center gap-1">Defaulters Students <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <div className="mt-2 flex gap-2">
                            <Input
                                style={{ 'background-color': 'black' }}
                                className="bg-[#111111]"
                                label="Search"
                            />
                            <Button className="flex items-center gap-3 w-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter text-white"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
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
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p>
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1">12 Nov 2022</span>
                                </p>
                                <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Remove Defaulter</Button>
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
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p>
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1">12 Nov 2022</span>
                                </p>
                                <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Remove Defaulter</Button>
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
                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Broke 4 Test Tubes in Hostel Mess</p>
                                <p>
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1">12 Nov 2022</span>
                                </p>
                                <p className="mt-5 mb-1 flex justify-around">
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#FF1010] border-[#FF1010]"
                                    >Remove Defaulter</Button>
                                    <Button
                                        variant="outlined"
                                        size="sm"
                                        className="text-[#00FFF5] border-[#00FFF5]"
                                    >Send Payment Link</Button>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Students;