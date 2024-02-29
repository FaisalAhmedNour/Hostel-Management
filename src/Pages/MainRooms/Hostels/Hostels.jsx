import { Input, Button } from "@material-tailwind/react";

const Hostels = () => {
    return (
        <div className="my-2 mr-2">
            <div className="w-[30%]">
                <Input
                    style={{ 'background-color': 'black' }}
                    className="bg-[#141414] border-none"
                    label="Search"
                    size="lg"
                />
            </div>
            <div className="flex gap-2 mt-2">
                <p className="text-white text-sm px-5 py-3 bg-black rounded-lg flex justify-between gap-3"><span>Total Hostels</span><span>4</span></p>
                <p className="text-white text-sm px-5 py-3 bg-[#00868D] rounded-lg">+Add Hostel</p>
            </div>
        </div>
    );
};

export default Hostels;