import { Input } from "@material-tailwind/react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const HostelRooms = () => {
    return (
        <div className="my-2 mr-2">
            <div className="w-[30%]">
                <Input
                    style={{ 'background-color': '#141414' }}
                    className="bg-[#141414] border-none"
                    label="Search"
                    size="lg"
                />
            </div>
            <div className="flex gap-2 mt-2">
                <p className="text-white text-sm px-5 py-3 bg-[#141414] rounded-lg flex justify-between gap-3"><span>Total Rooms</span><span>456</span></p>
                <p className="text-white text-sm px-5 py-3 bg-[#00868D] rounded-lg">+Add Rooms</p>
            </div>
            <div className="grid grid-cols-5 gap-2 mt-2">
                <div className="bg-[#141414] p-3 rounded-md">
                    <p className="text-sm text-white">Occupied</p>
                    <p className="text-xl text-[#00FFF5]">756</p>
                </div>
                <div className="bg-[#141414] p-3 rounded-md">
                    <p className="text-sm text-white">Vacant</p>
                    <p className="text-xl text-[#FFE605]">98</p>
                </div>
                <div className="bg-[#141414] p-3 rounded-md">
                    <p className="text-sm text-white">Types</p>
                    <p className="text-xl text-white">14</p>
                </div>
                <div className="bg-[#141414] p-3 rounded-md">
                    <p className="text-sm text-white">Tenants</p>
                    <p className="text-xl text-white">756</p>
                </div>
            </div>
            <div className="bg-[#202020] p-3 rounded-md grid grid-cols-5 gap-2 mt-2">
                <div className="col-span-2">
                    <div className="flex gap-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-single"><path d="M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" /><path d="M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" /><path d="M3 18h18" /></svg>
                        4 Bedded Room
                        <span className="flex items-center gap-1 border border-white px-2 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>Edit</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 px-1 py-4">
                        <div className='bg-[#141414] p-3 rounded-md text-base'>
                            <p className='text-white text-'>Total Rooms</p>
                            <p className='text-white text-lg'>256</p>
                        </div>
                        <div className='bg-[#141414] p-3 rounded-md text-base'>
                            <p className='text-white text-'>Occupied</p>
                            <p className='text-lg text-[#FFE605]'>215</p>
                        </div>
                        <div className='bg-[#141414] p-3 rounded-md text-base'>
                            <p className='text-white text-'>Tenants</p>
                            <p className='text-white text-lg'>650</p>
                        </div>
                        <div className='bg-[#141414] p-3 rounded-md text-base'>
                            <p className='text-white text-'>Furniture</p>
                            <p className='text-white text-lg'>125</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-white text-sm">Distribution</p>
                        <p className="rounded-full grid grid-cols-6 overflow-hidden">
                            <span className="col-span-2 grid grid-cols-5">
                                <span className="py-[5px] col-span-4 bg-[#CE1A1A]"></span>
                                <span className="py-[5px] bg-[#0094FF]"></span>
                            </span>
                            <span className="grid grid-cols-2">
                                <span className="bg-[#00FFA3] py-[5px]"></span>
                                <span className="bg-[#FFE605] py-[5px]"></span>
                            </span>
                            <span className="py-[5px] bg-[#0094FF] col-span-3"></span>
                        </p>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex gap-2">
                        <div className="flex gap-1 px-3 py-2 rounded-md bg-[#111111] text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>H1</div>
                        <div className="flex gap-1 px-3 py-2 rounded-md bg-[#111111] text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></svg>05</div>
                        <div className="flex gap-1 px-3 py-2 rounded-md bg-[#111111] text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" /><rect width="12" height="12" x="6" y="10" /></svg>12</div>
                        <div className="flex gap-1 px-3 py-2 rounded-md bg-[#111111] text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>6</div>
                    </div>
                    <div className="rounded-md bg-[#111111] mt-1 text-white p-2">
                        <p>Collection</p>
                        <div className="grid grid-cols-3 gap-2">
                            <div>
                                <div className='p-2 mx-auto'>
                                    <CircularProgressbar
                                        value={75}
                                        text={`${75}%`}
                                        styles={buildStyles({
                                            rotation: 0.25,
                                            strokeLinecap: 'round',
                                            textSize: '14px',
                                            pathTransitionDuration: 0.5,
                                            // Colors
                                            pathColor: `#FFE605`,
                                            textColor: '#FFFFFF',
                                            trailColor: '#00FFF5',
                                            backgroundColor: '#292929',
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 col-span-2">
                                <div className='bg-[#141414] p-2 rounded-md text-base'>
                                    <p className='text-white text-sm'>Furniture</p>
                                    <p className='text-white text-lg'>6,58,000</p>
                                </div>
                                <div className='bg-[#141414] p-2 rounded-md text-base'>
                                    <p className='text-white text-sm'>Furniture</p>
                                    <p className='text-[#00FFF5] text-lg'>1,54,500</p>
                                </div>
                                <div className='bg-[#141414] p-2 rounded-md text-base'>
                                    <p className='text-white text-sm'>Furniture</p>
                                    <p className='text-[#FFE605] text-lg'>3,00,000</p>
                                </div>
                                <div className='bg-[#141414] p-2 rounded-md text-base'>
                                    <p className='text-white text-sm'>Furniture</p>
                                    <p className='text-[#FF05C8] text-lg'>2,04,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className='col-span-2 bg-[#141414] rounded-md p-2'>
                        <p className="text-white flex items-center gap-1">Furniture <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                        <div className='space-y-[6px]'>
                            <p className='text-white flex text-sm bg-[#202020] px-2 py-2 mt-2 rounded-xl'>
                                <span className='flex grow'>Ceiling Fan</span>
                                <span>50</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                            </p>
                            <p className='text-white flex text-sm bg-[#202020] px-2 py-2 mt-2 rounded-xl'>
                                <span className='flex grow'>Tables</span>
                                <span>50</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                            </p>
                            <p className='text-white flex text-sm bg-[#202020] px-2 py-2 mt-2 rounded-xl'>
                                <span className='flex grow'>Chairs</span>
                                <span>50</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                            </p>
                            <p className='text-white flex text-sm bg-[#202020] px-2 py-2 mt-2 rounded-xl'>
                                <span className='flex grow'>Lights</span>
                                <span>50</span>
                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HostelRooms;