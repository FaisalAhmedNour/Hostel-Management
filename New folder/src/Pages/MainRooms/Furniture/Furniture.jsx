import { Input } from "@material-tailwind/react";

const Furniture = () => {
    return (
        <div className="my-2 mr-2">
            <div className="flex gap-3">
                <div className=" w-[30%]">
                    <Input
                        style={{ 'background-color': '#141414' }}
                        className="bg-[#141414] border-none"
                        label="Search"
                        size="lg"
                    />
                </div>
                <p className="text-white text-sm px-5 py-3 bg-[#00868D] rounded-lg">+Add Furniture</p>
                <p className="text-white text-sm px-5 py-3 bg-[#FF0000] rounded-lg flex justify-between gap-3">Report Damage</p>
            </div>
            <div className="grid grid-cols-4 ">
                <div className="col-span-3 rounded-md bg-[#141414] mt-2 p-2 grid grid-cols-2 gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className='bg-[#000000] p-2 rounded-md text-base'>
                            <p className='text-white text-sm'>Total</p>
                            <p className='text-[#FF05C8] text-lg'>45689</p>
                        </div>
                        <div className='bg-[#000000] p-2 rounded-md text-base'>
                            <p className='text-white text-sm'>Utilized</p>
                            <p className='text-[#00FFF5] text-lg'>24589</p>
                        </div>
                        <div className='bg-[#000000] p-2 rounded-md text-base'>
                            <p className='text-white text-sm'>Unutilized</p>
                            <p className='text-[#FFE605] text-lg'>21120</p>
                        </div>
                        <div className='bg-[#000000] p-2 rounded-md text-base'>
                            <p className='text-white text-sm'>Damaged</p>
                            <p className='text-[#FF05C8] text-lg'>569</p>
                        </div>
                        <div className='bg-[#000000] p-2 rounded-md text-base col-span-2 flex justify-between items-center'>
                            <p className='text-white text-sm'>Categories : 56</p>
                            <p className='text-[white] text-sm px-5 py-1 border rounded-md border-[#353535]'>View All</p>
                        </div>
                    </div>
                    <div className="bg-[#000000] p-2 rounded-md grid grid-cols-2 gap-2">
                        <div className='bg-[#000000] p-2 rounded-md text-base'>
                            <p className='text-white text-sm'>Expense Monitor</p>
                            <p className='text-[#B0B0B0] text-xs mt-3'>Total Expense</p>
                            <p className='text-[#FFE605]'>5,24,45,685</p>
                            <p className='text-[#B0B0B0] text-xs mt-2'>Unpaid Payments</p>
                            <p className='text-[#FF1010]'>5,24,45,685</p>
                        </div>
                        <div className="text-white">
                            <div className="border border-[#353535] mb-2 p-2 rounded-md">
                                <p className='text-white text-sm'>Highest Expense</p>
                                <p className='text-[#B0B0B0] text-xs mt-3'>Beds</p>
                                <p className='text-[#FFE605]'>24,45,685</p>
                            </div>
                            <div className="border border-[#353535] mb-2 p-2 rounded-md">
                                <p className='text-white text-sm'>Lowest Expense</p>
                                <p className='text-[#B0B0B0] text-xs mt-3'>Irons</p>
                                <p className='text-[#FFE605]'>4,45,685</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md bg-[#141414] mt-2 p-2">
                    <p className="flex justify-between">
                        <span className="flex gap-2 items-center"><span className="text-white">Categories</span><span className="text-[#FFE605]">5</span></span>
                        <span className="text-white text-sm px-3 py-1 bg-[#00868D] rounded-md">+Add Furniture</span>
                    </p>
                    <div className="flex flex-col">
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Bed</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Table</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Closet</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Bed</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Table</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Closet</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Bed</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Table</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Closet</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Bed</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Table</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Closet</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Bed</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Table</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                            <div className="rounded-md p-2 bg-[#000000]">
                                <p className="text-xs text-[#8E8E8E]">Closet</p>
                                <p className="flex justify-between">
                                    <p className="text-lg text-white">65</p>
                                    <p className="text-lg text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rounded-md bg-[#141414] mt-2 p-2">
                    <p className="flex justify-between">
                        <span className="flex gap-2 items-center"><span className="text-white">Orders</span><span className="text-[#FFE605]">5</span></span>
                        {/* <span className="text-white text-sm px-3 py-1 bg-[#00868D] rounded-md">+Add Furniture</span> */}
                    </p>
                    <div className="flex flex-col">
                        <div className="rounded-md p-2 px-3 bg-[#000000] mt-2">
                            <p className="text-xs text-[#8E8E8E]">Bed</p>
                            <p className="flex justify-between items-center gap-8">
                                <p className="text-lg text-white flex-grow">Double</p>
                                <p className="text-lg text-white">24</p>
                                <p className="text-lg text-white">20000 BDT</p>
                                <p className="text-md text-white border rounded px-3 py-[2px]">Double</p>
                            </p>
                        </div>
                        <div className="rounded-md p-2 px-3 bg-[#000000] mt-2">
                            <p className="text-xs text-[#8E8E8E]">Bed</p>
                            <p className="flex justify-between items-center gap-8">
                                <p className="text-lg text-white flex-grow">Double</p>
                                <p className="text-lg text-white">24</p>
                                <p className="text-lg text-white">20000 BDT</p>
                                <p className="text-md text-white border rounded px-3 py-[2px]">Double</p>
                            </p>
                        </div>
                        <div className="rounded-md p-2 px-3 bg-[#000000] mt-2">
                            <p className="text-xs text-[#8E8E8E]">Bed</p>
                            <p className="flex justify-between items-center gap-8">
                                <p className="text-lg text-white flex-grow">Double</p>
                                <p className="text-lg text-white">24</p>
                                <p className="text-lg text-white">20000 BDT</p>
                                <p className="text-md text-white border rounded px-3 py-[2px]">Double</p>
                            </p>
                        </div>
                        <div className="rounded-md p-2 px-3 bg-[#000000] mt-2">
                            <p className="text-xs text-[#8E8E8E]">Bed</p>
                            <p className="flex justify-between items-center gap-8">
                                <p className="text-lg text-white flex-grow">Double</p>
                                <p className="text-lg text-white">24</p>
                                <p className="text-lg text-white">20000 BDT</p>
                                <p className="text-md text-white border rounded px-3 py-[2px]">Double</p>
                            </p>
                        </div>
                        <div className="rounded-md p-2 px-3 bg-[#000000] mt-2">
                            <p className="text-xs text-[#8E8E8E]">Bed</p>
                            <p className="flex justify-between items-center gap-8">
                                <p className="text-lg text-white flex-grow">Double</p>
                                <p className="text-lg text-white">24</p>
                                <p className="text-lg text-white">20000 BDT</p>
                                <p className="text-md text-white border rounded px-3 py-[2px]">Double</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Furniture;