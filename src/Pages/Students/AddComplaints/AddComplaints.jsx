import {
    Input,
    Button,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { useParams } from "react-router-dom";

const AddComplaints = () => {

    const { id } = useParams()
    console.log(id);

    const handleAddFine = (e) => {
        e.preventDefault();

        const description = e.target.description.value;
        const fineAmount = e.target.fineAmount.value;
        console.log(description, fineAmount);

        fetch(`https://hostel-management-backend-pi.vercel.app/fines/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description, fineAmount }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Fine added successfully:', data);
            })
            .catch(error => {
                console.error('Error adding fine:', error);
            });
    }

    return (
        <div className="bg-[#202020] rounded-md p-2 mt-2 mr-2">
            <div className="bg-[#202020]">
                <Typography variant="h4" color="white">
                    Add Fine
                </Typography>
                <form className="mt-3 mb-2" onSubmit={handleAddFine}>
                    <div className="mb-1">
                        <div className="flex">
                            <Typography variant="h6" color="white" className="w-40">
                                Complaint
                            </Typography>
                            <div className="w-full">
                                <Textarea
                                    name="description"
                                    className="!border-white text-white"
                                />
                            </div>
                        </div>
                        <div className="flex">
                            <Typography variant="h6" color="white" className="w-40">
                                Fine Amount
                            </Typography>
                            <Input
                                name="fineAmount"
                                size="sm"
                                className=" !border-white text-white w-96"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
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
    );
};

export default AddComplaints;