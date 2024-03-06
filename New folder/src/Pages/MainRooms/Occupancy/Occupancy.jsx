import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Occupancy = () => {
    return (
        <div className="my-2 grid grid-cols-4 mr-2">
            <div className='col-span-3 space-y-3'>
                <div className="bg-[#2e2e2e] rounded-md p-2">
                    <div className="flex gap-5 p-2 pt-0">
                        <div className="rounded-lg">
                            <p className="text-white text-lg p-3">Hostel 1</p>
                            <div className='w-52'>
                                <CircularProgressbar
                                    value={50}
                                    text={`${50}%`}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        textSize: '14px',
                                        pathTransitionDuration: 0.5,
                                        // Colors
                                        pathColor: `#00FFF5`,
                                        textColor: '#FFFFFF',
                                        trailColor: '#292929',
                                        backgroundColor: '#292929',
                                    })}
                                />
                            </div>
                        </div>
                        <div className='flex-grow grid grid-cols-5'>
                            <div className='col-span-3 flex flex-col justify-around px-5'>
                                <div className='flex justify-between items-center '>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double text-[#FF05C8]"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M12 4v6" /><path d="M2 18h20" /></svg>
                                        <span className='text-white text-lg'>256</span>
                                    </div>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shower-head text-[#00FFA3]"><path d="m4 4 2.5 2.5" /><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" /><path d="M15 5 5 15" /><path d="M14 17v.01" /><path d="M10 16v.01" /><path d="M13 13v.01" /><path d="M16 10v.01" /><path d="M11 20v.01" /><path d="M17 14v.01" /><path d="M20 11v.01" /></svg>
                                        <span className='text-white  text-lg'>10</span>
                                    </div>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cooking-pot text-[#FF1010]"><path d="M2 12h20" /><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /><path d="m4 8 16-4" /><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" /></svg>
                                        <span className='text-white  text-lg'>1</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Total Rooms</p>
                                        <p className='text-white text-lg'>256</p>
                                    </div>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Occupied</p>
                                        <p className='text-lg text-[#FFE605]'>215</p>
                                    </div>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Floors</p>
                                        <p className='text-white text-lg'>5</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center bg-[#141414] rounded-md'>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>Students</p>
                                        <p className='text-white text-lg'>6582</p>
                                    </div>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>In Hostel</p>
                                        <p className='text-[#00FFF5] text-lg'>1569</p>
                                    </div>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>Outside Hostel</p>
                                        <p className='text-[#FFE605] text-lg'>2500</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 bg-[#141414] rounded-md m-3 p-2'>
                                <p className="text-white flex items-center gap-1">Furniture <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                                <div className='space-y-1'>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Ceiling Fan</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Tables</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Chairs</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Lights</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#2e2e2e] rounded-md p-2">
                    <div className="flex gap-5 p-2 pt-0">
                        <div className="rounded-lg">
                            <p className="text-white text-lg p-3">Hostel 2</p>
                            <div className='w-52'>
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
                                        trailColor: '#292929',
                                        backgroundColor: '#292929',
                                    })}
                                />
                            </div>
                        </div>
                        <div className='flex-grow grid grid-cols-5'>
                            <div className='col-span-3 flex flex-col justify-around px-5'>
                                <div className='flex justify-between items-center '>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double text-[#FF05C8]"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M12 4v6" /><path d="M2 18h20" /></svg>
                                        <span className='text-white text-lg'>256</span>
                                    </div>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shower-head text-[#00FFA3]"><path d="m4 4 2.5 2.5" /><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" /><path d="M15 5 5 15" /><path d="M14 17v.01" /><path d="M10 16v.01" /><path d="M13 13v.01" /><path d="M16 10v.01" /><path d="M11 20v.01" /><path d="M17 14v.01" /><path d="M20 11v.01" /></svg>
                                        <span className='text-white  text-lg'>10</span>
                                    </div>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cooking-pot text-[#FF1010]"><path d="M2 12h20" /><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /><path d="m4 8 16-4" /><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" /></svg>
                                        <span className='text-white  text-lg'>1</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Total Rooms</p>
                                        <p className='text-white text-lg'>256</p>
                                    </div>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Occupied</p>
                                        <p className='text-lg text-[#FFE605]'>215</p>
                                    </div>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Floors</p>
                                        <p className='text-white text-lg'>5</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center bg-[#141414] rounded-md'>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>Students</p>
                                        <p className='text-white text-lg'>6582</p>
                                    </div>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>In Hostel</p>
                                        <p className='text-[#00FFF5] text-lg'>1569</p>
                                    </div>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>Outside Hostel</p>
                                        <p className='text-[#FFE605] text-lg'>2500</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 bg-[#141414] rounded-md m-3 p-2'>
                                <p className="text-white flex items-center gap-1">Furniture <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                                <div className='space-y-1'>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Ceiling Fan</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Tables</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Chairs</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Lights</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#2e2e2e] rounded-md p-2">
                    <div className="flex gap-5 p-2 pt-0">
                        <div className="rounded-lg">
                            <p className="text-white text-lg p-3">Hostel 3</p>
                            <div className='w-52'>
                                <CircularProgressbar
                                    value={95}
                                    text={`${95}%`}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        textSize: '14px',
                                        pathTransitionDuration: 0.5,
                                        // Colors
                                        pathColor: `#FF05C8`,
                                        textColor: '#FFFFFF',
                                        trailColor: '#292929',
                                        backgroundColor: '#292929',
                                    })}
                                />
                            </div>
                        </div>
                        <div className='flex-grow grid grid-cols-5'>
                            <div className='col-span-3 flex flex-col justify-around px-5'>
                                <div className='flex justify-between items-center '>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed-double text-[#FF05C8]"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" /><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M12 4v6" /><path d="M2 18h20" /></svg>
                                        <span className='text-white text-lg'>256</span>
                                    </div>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shower-head text-[#00FFA3]"><path d="m4 4 2.5 2.5" /><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" /><path d="M15 5 5 15" /><path d="M14 17v.01" /><path d="M10 16v.01" /><path d="M13 13v.01" /><path d="M16 10v.01" /><path d="M11 20v.01" /><path d="M17 14v.01" /><path d="M20 11v.01" /></svg>
                                        <span className='text-white  text-lg'>10</span>
                                    </div>
                                    <div className='flex gap-1 bg-[#141414] p-3 rounded-md text-base'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cooking-pot text-[#FF1010]"><path d="M2 12h20" /><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" /><path d="m4 8 16-4" /><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" /></svg>
                                        <span className='text-white  text-lg'>1</span>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Total Rooms</p>
                                        <p className='text-white text-lg'>256</p>
                                    </div>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Occupied</p>
                                        <p className='text-lg text-[#FFE605]'>215</p>
                                    </div>
                                    <div className='bg-[#141414] p-3 rounded-md text-base'>
                                        <p className='text-white text-'>Floors</p>
                                        <p className='text-white text-lg'>5</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center bg-[#141414] rounded-md'>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>Students</p>
                                        <p className='text-white text-lg'>6582</p>
                                    </div>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>In Hostel</p>
                                        <p className='text-[#00FFF5] text-lg'>1569</p>
                                    </div>
                                    <div className='p-3 text-base'>
                                        <p className='text-white text-'>Outside Hostel</p>
                                        <p className='text-[#FFE605] text-lg'>2500</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 bg-[#141414] rounded-md m-3 p-2'>
                                <p className="text-white flex items-center gap-1">Furniture <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg></p>
                                <div className='space-y-1'>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Ceiling Fan</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Tables</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Chairs</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                    <p className='text-white flex text-sm bg-[#202020] px-2 py-2 rounded-xl'>
                                        <span className='flex grow'>Lights</span>
                                        <span>50</span>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Occupancy;