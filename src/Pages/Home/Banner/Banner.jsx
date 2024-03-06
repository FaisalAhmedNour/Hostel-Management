import { Typography, Button } from "@material-tailwind/react";

const Banner = () => {
    return (
        <div className="relative h-[90vh] w-full">
            <img
                src="/banner.jpeg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                <div className="w-3/4 text-center md:w-2/4">
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                        Welcome to HallMaster!
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                    >
                        We’re thrilled to have you here, whether you’re a student, faculty member, or guest. HostelHub is your digital companion for seamless hostel living.
                    </Typography>
                    {/* <div className="flex justify-center gap-2">
                        <Button size="lg" color="white">
                            Explore
                        </Button>
                        <Button size="lg" color="white" variant="text">
                            Gallery
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Banner;