
const Rooms = () => {
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3">
                <div className="bg-[#2e2e2e] rounded-md p-2 mt-2 ">
                    <p className="text-white flex items-center gap-1">Hostel 1</p>
                    <div className='grid grid-cols-4 gap-5'>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Total Rooms</p>
                            <p className='text-xl text-white'>158</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Full</p>
                            <p className='text-xl text-[red]'>96</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Partial full</p>
                            <p className='text-xl text-[#FFE605]'>62</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Empty</p>
                            <p className='text-xl text-[#00FFF5]'>62</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#2e2e2e] rounded-md p-2 mt-2 ">
                    <p className="text-white flex items-center gap-1">Hostel 2</p>
                    <div className='grid grid-cols-4 gap-5'>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Total Rooms</p>
                            <p className='text-xl text-white'>158</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Full</p>
                            <p className='text-xl text-[red]'>96</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Partial full</p>
                            <p className='text-xl text-[#FFE605]'>62</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Empty</p>
                            <p className='text-xl text-[#00FFF5]'>62</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#2e2e2e] rounded-md p-2 mt-2 ">
                    <p className="text-white flex items-center gap-1">Hostel 3</p>
                    <div className='grid grid-cols-4 gap-5'>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Total Rooms</p>
                            <p className='text-xl text-white'>158</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Full</p>
                            <p className='text-xl text-[red]'>96</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Partial full</p>
                            <p className='text-xl text-[#FFE605]'>62</p>
                        </div>
                        <div className='bg-[#111111] px-3 py-1 rounded-lg'>
                            <p className='text-white text-sm flex gap-1'>Empty</p>
                            <p className='text-xl text-[#00FFF5]'>62</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rooms;