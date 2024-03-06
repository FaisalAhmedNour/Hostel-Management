import { Button, Input, Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const Complaints = () => {

    const [allFines, setAllFines] = useState([]);
    const [fines, setFines] = useState([]);
    const [complaints, setComplaints] = useState([]);
    const [allComplaints, setAllComplaints] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getFines();
        getComplaints();
    }, [reload])

    const getFines = () => {
        fetch('http://localhost:5000/fines')
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setFines(result);
                setAllFines(result);
            })
    }

    const handleReceive = (id) => {
        fetch(`http://localhost:5000/fines/received/${id}`,)
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setReload(!reload)
            })
    }

    const handleDeleteFines = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/fines/delete/${id}`,)
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setReload(!reload)
            })
    }

    const getComplaints = () => {
        fetch('http://localhost:5000/complaints')
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setComplaints(result);
                setAllComplaints(result);
            })
    }

    const handleSolve = (id) => {
        fetch(`http://localhost:5000/complaints/solved/${id}`,)
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setReload(!reload)
            })
    }

    const handleDeleteComplaints = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/complaints/delete/${id}`,)
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setReload(!reload)
            })
    }

    const handleSearchFines = (param) => {
        console.log(param);
    }

    const handleSearchComplaints = (param) => {
        console.log(param);
    }

    return (
        <div className="mb-2 grid grid-cols-4">
            <div className='col-span-3'>
                <div className='bg-[#2e2e2e] rounded-md p-2 mt-2 grid grid-cols-4 gap-5'>
                    <div className='bg-[#111111] rounded-lg grid grid-cols-3 overflow-hidden'>
                        {/* todo: make the ratio */}
                        <div className='bg-[#00FFF5] col-span-2'></div>
                        <div className='bg-[#FFE605] '></div>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Total Complaints</p>
                        <p className='text-xl text-white'>{complaints.length + fines.length}</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        {/* TODO: resolved count */}
                        <p className='text-white text-sm flex gap-1'>Resolved</p>
                        <p className='text-xl text-[#00FFF5]'>96</p>
                    </div>
                    <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                        <p className='text-white text-sm flex gap-1'>Open</p>
                        {/* TODO: open count */}
                        <p className='text-xl text-[#FFE605]'>62</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-[#2e2e2e] rounded-md p-2 mt-2">
                        <p className="text-white text-sm flex items-center gap-1">Fined Complaints</p>
                        <div className="mt-2 flex gap-2">
                            <Input
                                onChange={(e) => handleSearchFines(e.target.value)}
                                style={{ 'background-color': 'black' }}
                                className="bg-[#111111]"
                                label="Search"
                            />
                            {/* for next  */}
                            {/* <Button className="flex items-center gap-3 w-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucideList-filter text-white"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                Filter
                            </Button> */}
                        </div>
                        <div>
                            {
                                fines.map(fine => (
                                    <div
                                        key={fine._id}
                                        className="bg-[#111111] rounded-lg py-2 px-3 mt-2"
                                    >
                                        <div className="flex justify-between items-center gap-2">
                                            <div>
                                                <Avatar
                                                    alt="avatar"
                                                    className="w-7 h-7"
                                                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                                                />
                                            </div>
                                            <div className="flex-grow text-white">{fine?.name}</div>
                                            {
                                                fine?.received ?
                                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[green]"><path d="M20 6 9 17l-5-5" /></svg></div> :
                                                    <div onClick={() => handleDeleteFines(fine?._id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 text-[red]"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg></div>
                                            }

                                        </div>
                                        <p className="text-white my-2 text-sm font-thin">{fine?.fineComplaint}</p>
                                        <p className="flex">
                                            <span className="border rounded-md text-white text-xs py-1 px-1 mr-3">Fine: {fine?.fineAmount}tk</span> <span className="border rounded-md text-white text-xs py-1 px-1 flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg> {fine?.date}</span>
                                        </p>
                                        <p className="mt-5 mb-1 flex justify-end">
                                            <Button
                                                size="sm"
                                                variant="outlined"
                                                disabled={fine?.received}
                                                onClick={() => handleReceive(fine?._id)}
                                                className="text-[#00FFF5] border-[#00FFF5]"
                                            >Fine Received</Button>
                                        </p>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="bg-[#2e2e2e] rounded-md p-2 mt-2">
                        <p className="text-white text-sm flex items-center gap-1">General Complaints</p>
                        <div className="mt-2 flex gap-2">
                            <Input
                                onChange={(e) => handleSearchComplaints(e.target.value)}
                                style={{ 'background-color': 'black' }}
                                className="bg-[#111111]"
                                label="Search"
                            />
                            {/* for next */}
                            {/* <Button className="flex items-center gap-3 w-36">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucideList-filter text-white"><path d="M3 6h18" /><path d="M7 12h10" /><path d="M10 18h4" /></svg>
                                Filter
                            </Button> */}
                        </div>
                        <div>
                            {
                                complaints?.map(complaint => (
                                    <div
                                        key={complaint._id}
                                        className="bg-[#111111] rounded-lg py-2 px-3 mt-2">
                                        <div className="flex justify-between items-center gap-2">
                                            <div>
                                                <Avatar
                                                    alt="avatar"
                                                    className="w-7 h-7"
                                                    src="https://docs.material-tailwind.com/img/face-2.jpg"
                                                />
                                            </div>
                                            {
                                                complaint?.received ?
                                                    <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check text-[green]"><path d="M20 6 9 17l-5-5" /></svg></div> :
                                                    <div onClick={() => handleDeleteComplaints(complaint?._id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash-2 text-[red]"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /><line x1="10" x2="10" y1="11" y2="17" /><line x1="14" x2="14" y1="11" y2="17" /></svg></div>
                                            }
                                        </div>
                                        <p className="text-white my-2 text-sm font-thin">{complaint?.description}</p>
                                        <p className="flex gap-2 items-center mb-2">
                                            <span className="border rounded-md text-white text-xs py-1 px-1 flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg> {complaint?.date}</span>
                                        </p>
                                        <p className="mt-5 mb-1 flex justify-end">
                                            <Button
                                                size="sm"
                                                variant="outlined"
                                                onClick={() => handleSolve(complaint?._id)}
                                                className="text-[#00FFF5] border-[#00FFF5]"
                                            >Solved</Button>
                                        </p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Complaints;