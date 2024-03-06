import {
    Button,
    Avatar,
    Input
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Students = () => {

    const [students, setStudents] = useState([]);
    // const [reload, setReload] = useState(false);

    useEffect(() => {
        getStudents();
    }, [])

    const getStudents = () => {
        fetch('http://localhost:5000/students')
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setStudents(result)
            })
    }

    const handleSearchStudents = (param) => {
        console.log(param);
    }
    const handleSearchPaymentHistory = (param) => {
        console.log(param);
    }

    return (
        <div className="mb-2 grid grid-cols-4">
            <div className='col-span-3'>
                <div className='bg-[#2e2e2e] rounded-md p-2 mt-2 grid grid-cols-4 gap-x-6 gap-y-3'>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Total Students</p>
                        <p className='text-xl text-white'>3569</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>In Hostel</p>
                        <p className='text-xl text-[#00FFF5]'>1569</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Outside Hostel</p>
                        <p className='text-xl text-[#B0B0B0]'>2500</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg row-span-2 flex flex-col justify-between'>
                        <p className='text-white text-sm flex gap-1'>Fees Defaulters</p>
                        <p className='text-3xl font-semibold text-[#FFE605]'>150</p>
                        <Button>Button</Button>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Students Assigned</p>
                        <p className='text-xl text-[#FF05C8]'>2500</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Student Removed</p>
                        <p className='text-xl text-[#F10606]'>1000</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#2e2e2e] rounded-md p-2 mt-2">
                        <p className="text-white text-sm flex items-center gap-1">Students In Hostel</p>
                        <div className="mt-2 flex gap-2">
                            <Input
                                onChange={(e) => handleSearchStudents(e.target.value)}
                                style={{ 'background-color': 'black' }}
                                className="bg-[#111111]"
                                label="Search"
                            />
                            {/* for next semester */}
                            {/* <Button className="flex items-center gap-3 w-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter text-white"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                Filter
                            </Button> */}
                        </div>
                        <div>
                            {
                                students?.map(student => (
                                    <div
                                        key={student._id}
                                        className="flex justify-between items-center gap-2 bg-[#111111] rounded-lg py-2 px-3 mt-2"
                                    >
                                        <div>
                                            <Avatar
                                                alt="avatar"
                                                className="w-7 h-7"
                                                src="https://docs.material-tailwind.com/img/face-2.jpg"
                                            />
                                        </div>
                                        <div className="flex-grow text-white">{student?.name}</div>
                                        {/* todo: show students details */}
                                        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="bg-[#2e2e2e] rounded-md p-2 mt-2">
                        <p className="text-white text-sm flex items-center gap-1">Payment History </p>
                        <div className="mt-2 flex gap-2">
                            <Input
                                onChange={(e) => handleSearchPaymentHistory(e.target.value)}
                                style={{ 'background-color': 'black' }}
                                className="bg-[#111111]"
                                label="Search"
                            />
                            {/* for next semester */}
                            {/* <Button className="flex items-center gap-3 w-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-list-filter text-white"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                Filter
                            </Button> */}
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
                                    {/* <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div> */}
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Paid semester fee</p>
                                <p className="flex">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Amount: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2023</span>
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
                                    <div className="flex-grow text-white">Yousuf Hossain</div>
                                    {/* <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div> */}
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Paid semester fee</p>
                                <p className="flex">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Amount: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2023</span>
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
                                    <div className="flex-grow text-white">Shadin Hasan</div>
                                    {/* <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye text-white"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg></div> */}
                                </div>
                                <p className="text-white my-2 text-sm font-thin">Paid semester fee</p>
                                <p className="flex">
                                    <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Amount: 1,500tk</span><span className="border rounded-md text-white text-xs py-1 px-1 flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 Nov 2023</span>
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