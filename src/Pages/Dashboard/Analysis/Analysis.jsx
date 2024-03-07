import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Analysis = () => {

    const [allFines, setAllFines] = useState([]);
    const [allComplaints, setAllComplaints] = useState([]);
    const [complaintsCount, setComplaintsCount] = useState(0);
    const [fineCount, setFineCount] = useState(0);

    useEffect(() => {
        getFines();
        getComplaints();
    }, [])

    const getFines = () => {
        fetch('https://hostel-management-backend-pi.vercel.app/fines')
            .then(data => data.json())
            .then(result => {
                console.log(result);
                // setFines(result);
                setAllFines(result);
                const unresolvedComplaintsCount = result.filter(fine => !fine.received).length;
                setComplaintsCount(unresolvedComplaintsCount)
            })
    }

    const getComplaints = () => {
        fetch('https://hostel-management-backend-pi.vercel.app/complaints')
            .then(data => data.json())
            .then(result => {
                console.log(result);
                // setComplaints(result);
                setAllComplaints(result);
                const unresolvedComplaintsCount = result.filter(complaint => !complaint.solved).length;
                setFineCount(unresolvedComplaintsCount)
            })
    }

    return (
        <div className="my-2 grid grid-cols-4">
            <div className='col-span-3'>
                <div className="bg-[#2e2e2e] rounded-md p-2">
                    <p className="text-white flex items-center gap-1">Occupancy</p>
                    <div className="grid grid-cols-3 gap-2 p-2">
                        <div className="bg-[#111111] rounded-lg">
                            <p className="text-white text-sm p-3 pb-0">Hall 1</p>
                            <div className='px-12 pb-8'>
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
                        <div className="bg-[#111111] rounded-lg">
                            <p className="text-white text-sm p-3">Hall 2</p>
                            <div className='px-12 pb-8'>
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
                        <div className="bg-[#111111] rounded-lg">
                            <p className="text-white text-sm p-3">Hall 3</p>
                            <div className='px-12 pb-8'>
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
                    </div>
                </div>
                <div className='bg-[#2e2e2e] rounded-md p-2 mt-2'>
                    <p className="text-white flex items-center gap-1">Fees Collection</p>
                    <div className='grid grid-cols-8 gap-5'>
                        <div className='p-3 col-span-2'>
                            <CircularProgressbar
                                value={77}
                                text={`${77}%`}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    strokeLinecap: 'round',
                                    textSize: '14px',
                                    pathTransitionDuration: 0.5,
                                    // Colors
                                    pathColor: `#00FFF5`,
                                    textColor: '#FFFFFF',
                                    trailColor: '#FFE605',
                                    backgroundColor: '#292929',
                                })}
                            />
                        </div>
                        <div className='col-span-6 grid grid-cols-2 gap-5 p-5'>
                            <div className='bg-[#111111] rounded-lg text-white p-3 flex justify-between items-center'>
                                <div className=''>
                                    <p className='text-sm'>Expected</p>
                                    <p className='text-xl'>5200000</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
                                </div>
                            </div>
                            <div className='bg-[#111111] rounded-lg text-[#FFE605] p-3 flex justify-between items-center'>
                                <div className=''>
                                    <p className='text-sm text-white'>Remaining</p>
                                    <p className='text-xl'>1600000</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
                                </div>
                            </div>
                            <div className='bg-[#111111] rounded-lg text-[#00FFF5] p-3 flex justify-between items-center'>
                                <div className=''>
                                    <p className='text-sm text-white'>Collected</p>
                                    <p className='text-xl'>3600000</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right-from-square"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" /><path d="m21 3-9 9" /><path d="M15 3h6v6" /></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#2e2e2e] rounded-md p-2 mt-2 grid grid-cols-4 gap-5'>
                    <div className='bg-[#111111] rounded-lg flex  overflow-hidden'>
                        <div className={`bg-[#00FFF5] w-[${((allComplaints.length + allFines.length - complaintsCount - fineCount) / (allComplaints.length + allFines.length)) * 100}%]`}></div>
                        <div className={`bg-[#FFE605] w-[${(((complaintsCount + fineCount) / (allComplaints.length + allFines.length)) * 100)}%]`}></div>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Total Complaints</p>
                        <p className='text-xl text-white'>{allComplaints.length + allFines.length}</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Resolved</p>
                        <p className='text-xl text-[#00FFF5]'>{allComplaints.length + allFines.length - complaintsCount - fineCount}</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Open</p>
                        <p className='text-xl text-[#FFE605]'>{complaintsCount + fineCount}</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
};

export default Analysis;
