import {
    Card,
    Input,
    Button,
    Option,
    Select,
    Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Signup = () => {

    const [session, setSession] = useState('2023-2024');
    const [semester, setSemester] = useState('1st');
    const [department, setDepartment] = useState('');
    const [hostel, setHostel] = useState('');
    const [floor, setFloor] = useState('');
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUserWithPass, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUserWithPass(data.email, data.password)
            .then(() => {
                updateUser(data.name, "student",)
                    .then(() => {
                        const savedUser = {
                            name: data.name,
                            room: data.room,
                            role: "student",
                            email: data.email,
                            session: session,
                            floor: floor,
                            hostel: hostel,
                            semester: semester,
                            department: department,
                            registration: data.registration,
                            image: data.image,
                        }
                        fetch('https://hostel-management-backend-pi.vercel.app/students', {
                            method: "POST",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Successfully Signed in...',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate('/');
                                }
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage)
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    };


    return (
        <div className="flex justify-center items-center h-[90vh]">
            <Card color="white" shadow={false} className="p-5">
                <Typography variant="h4" color="blue-gray">
                    Register
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mb-2 w-[800px]">
                    <div className="mb-1  grid grid-cols-2 gap-x-6 ">
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Your Name
                            </Typography>
                            <Input
                                // size="sm"
                                placeholder="name"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-[red] text-xs'>This field is required</span>}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Your Email
                            </Typography>
                            <Input
                                // size="sm"
                                placeholder="name@mail.com"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-[red] text-xs'>This field is required</span>}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Password
                            </Typography>
                            <Input
                                type="password"
                                // size="sm"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span className='text-[red] text-xs'>This field is required</span>}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Session
                            </Typography>
                            <Select
                                label="Select Session"
                                // {...register("session", { required: true })}
                                value={session}
                                onChange={(value) => setSession(value)}
                            >
                                <Option value="2010-2011">2010-2011</Option>
                                <Option value="2011-2012">2011-2012</Option>
                                <Option value="2012-2013">2012-2013</Option>
                                <Option value="2013-2014">2013-2014</Option>
                                <Option value="2014-2015">2014-2015</Option>
                                <Option value="2016-2017">2016-2017</Option>
                                <Option value="2017-2018">2017-2018</Option>
                                <Option value="2018-2019">2018-2019</Option>
                                <Option value="2019-2020">2019-2020</Option>
                                <Option value="2020-2021">2020-2021</Option>
                                <Option value="2021-2022">2021-2022</Option>
                                <Option value="2022-2023">2022-2023</Option>
                                <Option value="2023-2024">2023-2024</Option>
                            </Select>
                            {/* {errors.session && <span className='text-[red] text-xs'>This field is required</span>} */}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Semester
                            </Typography>
                            <Select
                                label="Select Semester"
                                onChange={(value) => setSemester(value)}
                                value={semester}
                            // {...register("semester", { required: true })}
                            >
                                <Option value="1st">1st</Option>
                                <Option value="2nd">2nd</Option>
                                <Option value="3rd">3rd</Option>
                                <Option value="4th">4th</Option>
                                <Option value="5th">5th</Option>
                                <Option value="6th">6th</Option>
                                <Option value="7th">7th</Option>
                                <Option value="8th">8th</Option>
                            </Select>
                            {/* {errors.semester && <span className='text-[red] text-xs'>This field is required</span>} */}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Department
                            </Typography>
                            <Select
                                label="Select Department"
                                onChange={(value) => setDepartment(value)}
                                value={department}
                            // {...register("department", { required: true })}
                            >
                                <Option value="CSE">CSE</Option>
                                <Option value="EEE">EEE</Option>
                                <Option value="CE">CE</Option>
                            </Select>
                            {/* {errors.department && <span className='text-[red] text-xs'>This field is required</span>} */}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Registration No
                            </Typography>
                            <Input
                                type="text"
                                // size="sm"
                                placeholder=""
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("registration", { required: true })}
                            />
                            {errors.registration && <span className='text-[red] text-xs'>This field is required</span>}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Hostel Name
                            </Typography>
                            <Select
                                label="Select Hostel"
                                value={hostel}
                                onChange={(value) => setHostel(value)}
                            // {...register("hostel", { required: true })}
                            >
                                <Option value="Hostel 1">Hostel 1</Option>
                                <Option value="Hostel 2">Hostel 2</Option>
                                <Option value="Hostel 3">Hostel 3</Option>
                            </Select>
                            {/* {errors.hostel && <span className='text-[red] text-xs'>This field is required</span>} */}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Floor
                            </Typography>
                            <Select
                                label="Select Floor"
                                value={floor}
                                onChange={(value) => setFloor(value)}
                            // {...register("batch", { required: true })}
                            >
                                <Option value="1st">1st</Option>
                                <Option value="2nd">2nd</Option>
                                <Option value="3rd">3rd</Option>
                                <Option value="4th">4th</Option>
                                <Option value="5th">5th</Option>
                            </Select>
                            {/* {errors.floor && <span className='text-[red] text-xs'>This field is required</span>} */}
                        </div>
                        <div>
                            <Typography variant="h6" color="blue-gray" className="">
                                Room
                            </Typography>
                            <Input
                                type="text"
                                // size="sm"
                                placeholder=""
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("room", { required: true })}
                            />
                            {errors.room && <span className='text-[red] text-xs'>This field is required</span>}
                        </div>
                        <div className="col-span-2">
                            <Typography variant="h6" color="blue-gray" className="">
                                Image Link
                            </Typography>
                            <Input
                                type="text"
                                // size="sm"
                                placeholder="Paste image link"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                {...register("image", { required: false })}
                            />
                        </div>
                    </div>
                    <Button type="submit" className="mt-6 col-span-2" fullWidth>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="/signin" className="font-medium text-gray-900 col-span-2">
                            Login
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Signup;