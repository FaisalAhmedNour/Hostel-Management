export function Gallery() {
    const data = [
        {
            imageLink:
                "/image1.jpeg",
        },
        {
            imageLink:
                "/image2.jpeg",
        },
        {
            imageLink:
                "/image3.jpeg",
        },
        {
            imageLink:
                "/image4.jpeg",
        },
        {
            imageLink:
                "/image5.jpeg",
        },
        {
            imageLink:
                "/image6.jpeg",
        },
        {
            imageLink:
                "/image7.jpeg",
        },
        {
            imageLink:
                "/image8.jpeg",
        },
        {
            imageLink:
                "/image9.jpeg",
        },
    ];

    return (
        <div className="my-5 text-center text-2xl font-medium">
            <h1 className="">Gallery</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 m-5">
                {data.map(({ imageLink }, index) => (
                    <div key={index}>
                        <img
                            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                            src={imageLink}
                            alt="gallery-photo"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;
