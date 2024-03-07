import { Typography, Card, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Name", "Batch", "Department", "Semester", "Registration", "Hostel", "Floor", "Room"];

const ManageStudents = () => {

    const [students, setStudents] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        getStudents();
    }, [reload])

    const getStudents = () => {
        fetch('https://hostel-management-backend-pi.vercel.app/students')
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setStudents(result)
            })
    }

    const handleDeleteStudents = (id) => {
        console.log(id);
        fetch(`https://hostel-management-backend-pi.vercel.app/students/delete/${id}`,)
            .then(data => data.json())
            .then(result => {
                console.log(result);
                setReload(!reload)
            })
    }

    return (
        <div className="bg-[#744040] rounded-md p-2 mt-2 mr-2">
            <p className="text-xl text-white">Manage Students</p>
            <div className="">
                <Card className="h-full w-full">
                    <table className="w-full min-w-max table-auto text-left rounded-md overflow-hidden">
                        <thead className="">
                            <tr className="bg-[#2e2e2e] ">
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-blue-gray-100 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal text-white leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                                <th
                                    className="border-b border-blue-gray-100 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal text-white leading-none opacity-70 text-center"
                                    >
                                        Action
                                    </Typography>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                students &&
                                students?.map(({ _id, name, batch, department, semester, registration, hostel, floor, room }, index) => {
                                    const isLast = index === students.length - 1;
                                    const classes = isLast ? "p-4 bg-[#111111]" : "p-4 border-b border-blue-gray-50 bg-[#111111]";

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-white"
                                                >
                                                    {name}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-white"
                                                >
                                                    {batch}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-white"
                                                >
                                                    {department}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-white"
                                                >
                                                    {semester}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-white"
                                                >
                                                    {registration}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-white"
                                                >
                                                    {hostel}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-white"
                                                >
                                                    {floor}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal text-white"
                                                >
                                                    {room}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex items-center gap-2 justify-center">
                                                    <Link to={`/students/addcomplaints/${_id}`}>
                                                        <Button
                                                            size="sm"
                                                            color="red"
                                                        >Complaint</Button>
                                                    </Link>
                                                    <Button
                                                        onClick={() => handleDeleteStudents(_id)}
                                                        size="sm"
                                                        color="red"
                                                    >Delete</Button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};

export default ManageStudents;