import {
    Card,
    Input,
    Button,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const Signin = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signInUserWithPass } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data);
        console.log(data.email, data.password)
        signInUserWithPass(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully loged in...',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage)
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
                    Login
                </Typography>
                {/* <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography> */}
                <form onSubmit={handleSubmit(onSubmit)} className="mt-3 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        /> */}
                        <Typography variant="h6" color="blue-gray" className="-mb-5">
                            Your Email
                        </Typography>
                        <Input
                            {...register("email", { required: true })}
                            size="sm"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.email && <span className='text-[red] text-xs'>This field is required</span>}
                        <Typography variant="h6" color="blue-gray" className="-mb-5">
                            Password
                        </Typography>
                        <Input
                            {...register("password", { required: true })}
                            type="password"
                            size="sm"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.email && <span className='text-[red] text-xs'>This field is required</span>}
                    </div>
                    <Button type="submit" className="mt-6" fullWidth>
                        Login
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="/signup" className="font-medium text-gray-900 hover:underline">
                            Register
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>
    );
};

export default Signin;