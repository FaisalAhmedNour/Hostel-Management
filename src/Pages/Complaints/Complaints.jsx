import {
    Input,
    Button,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ComplaintsBox = () => {

    const { user } = useContext(AuthContext);
    console.log(user?.displayName);
    const navigate = useNavigate();
    const handleAddFine = (e) => {
        e.preventDefault();

        const description = e.target.description.value;
        console.log(description);

        fetch(`https://hostel-management-backend-pi.vercel.app/complaints`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description, userName: user.displayName }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fine added successfully:', data);
                navigate('/')
            })
            .catch(error => {
                console.error('Error adding fine:', error);
            });
    }

    return (
        <div className="bg-[#5B5B5B] p-5 h-screen">
            <div className="bg-[#202020] rounded-md p-5">
                <div className="bg-[#202020]">
                    <Typography variant="h4" color="white" className="text-center">
                        Drop a Complaint
                    </Typography>
                    <form className="mt-3 mb-2" onSubmit={handleAddFine}>
                        <div className="mb-1">
                            <div className="flex">
                                <Typography variant="h6" color="white" className="w-40">
                                    Description
                                </Typography>
                                <div className="w-full">
                                    <Textarea
                                        name="description"
                                        className="!border-white text-white"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="text-center col-span-2">
                            <Button
                                className="mt-6 mx-auto w-40"
                                variant="gradient"
                                type="submit"
                            >
                                Add
                            </Button>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    );
};

export default ComplaintsBox;