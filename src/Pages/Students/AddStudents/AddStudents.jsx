import {
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
 
const AddStudents = () => {
    return (
        <div className="bg-[#202020] rounded-md p-2 mt-2 mr-2">
            <div className="bg-[#202020]">
                <Typography variant="h4" color="white">
                    Add Students
                </Typography>
                {/* <Typography color="white" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography> */}
                <form className="mt-3 mb-2 ">
                    <div className="mb-1 grid grid-cols-2 gap-6">
                        <div className="">
                            <Typography variant="h6" color="white" className="">
                                Student Name
                            </Typography>
                            <Input
                                size="sm"
                                className=" !border-white !text-white w-full"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="white" className="">
                                Batch
                            </Typography>
                            <Input
                                size="sm"
                                className=" !border-white !text-white w-full"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="white" className="">
                                Semester
                            </Typography>
                            <Input
                                size="sm"
                                className=" !border-white !text-white w-full"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="white" className="">
                                Department
                            </Typography>
                            <Input
                                size="sm"
                                className=" !border-white !text-white w-full"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="white" className="">
                                Registration No
                            </Typography>
                            <Input
                                size="sm"
                                className=" !border-white !text-white w-full"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="white" className="">
                                Hostel Name
                            </Typography>
                            <Input
                                size="sm"
                                className=" !border-white !text-white w-full"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="white" className="">
                                Floor
                            </Typography>
                            <Input
                                size="sm"
                                className=" !border-white !text-white w-full"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <div className="">
                            <Typography variant="h6" color="white" className="">
                                Room
                            </Typography>
                            <Input
                                size="sm"
                                className=" !border-white !text-white w-full"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                    </div>
                    <div className="text-center col-span-2">
                        <Button
                            fullWidth
                            className="mt-6"
                            variant="gradient"
                        >
                            Add
                        </Button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default AddStudents;