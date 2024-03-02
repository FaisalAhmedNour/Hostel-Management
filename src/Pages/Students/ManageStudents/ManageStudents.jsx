import { Typography, Card, Button } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Batch", "Department", "Semester", "Registration", "Hostel", "Floor", "Room"];

const TABLE_ROWS = [
    {
        name: "Yousuf Hossain",
        Batch: "13",
        Department: "CSE",
        Semester: "4th",
        Registration: '652',
        Hostel: 'H1',
        Floor: "5th",
        Room: "509"
    },
    {
        name: "Shadhin",
        Batch: "13",
        Department: "CSE",
        Semester: "4th",
        "Registration": '653',
        Hostel: 'H1',
        Floor: "5th",
        Room: "510"
    },
];

const ManageStudents = () => {
    return (
        <div className="bg-[#202020] rounded-md p-2 mt-2 mr-2">
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
                            {TABLE_ROWS.map(({ name, Batch, Department, Semester, Registration, Hostel, Floor, Room }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
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
                                                {Batch}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-white"
                                            >
                                                {Department}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-white"
                                            >
                                                {Semester}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-white"
                                            >
                                                {Registration}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-white"
                                            >
                                                {Hostel}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-white"
                                            >
                                                {Floor}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal text-white"
                                            >
                                                {Room}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-2 justify-center">
                                                <Button size="sm" color="blue">Edit</Button>
                                                <Button size="sm" color="red">Delete</Button>
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