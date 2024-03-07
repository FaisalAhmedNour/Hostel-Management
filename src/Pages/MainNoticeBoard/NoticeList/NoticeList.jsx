import { useEffect, useState } from "react";

const NoticeList = () => {

    const [notices, setNotices] = useState([]);
    const [allNotices, setAllNotices] = useState([]);

    useEffect(() => {
        getNotices();
    }, [])

    const getNotices = () => {
        fetch('https://hostel-management-backend-pi.vercel.app/notices')
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setNotices(result);
                setAllNotices(result);
            })
    }

    return (
        // for next semester(search and delete and edit)
        <div className="bg-[#2e2e2e] rounded-md p-2 mt-2 mx-2">
            <p className="text-white mb-2">Notice List</p>
            <div className="p-3 bg-[#141414] rounded-md">
                {
                    notices.map(notice => (
                        <div
                            key={notice._id}
                            className="flex justify-between gap-10 px-3"
                        >
                            <p className="text-white">
                                # {notice.description}
                            </p>
                            <p className="text-white text-sm whitespace-nowrap flex items-start gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>{notice?.date}</p>
                        </div>
                    ))
                }
                {/* <div className="flex justify-between gap-10 px-3">
                    <p className="text-white">
                        # Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptas sunt reprehenderit temporibus beatae delectus aliquid cupiditate optio, eveniet voluptatibus repellendus, quisquam incidunt dolore? Quam beatae rem maiores corporis consequatur.
                    </p>
                    <p className="text-white text-sm whitespace-nowrap flex items-start gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-days"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>12 nov 2023</p>
                </div> */}
            </div>
        </div>
    );
};

export default NoticeList;