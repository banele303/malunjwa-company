import Image from "next/image";



const services = [
    {
        icon: "/plumbing.jpg",
        title: "Toilet Repair",
    },
    {
        icon: "/geyser-services.jpg",
        title: "plumber",
    },
    {
        icon: "/geyser2.jpg",
        title: "plumber",
    },
    {
        icon: "/geyser.jpg",
        title: "geyser",
    },
    {
        icon: "/plumbing.webp",
        title: "dont know",
    },
];

const PlumbingServices = () => {
    return (
        <section className=" py-[2rem]">
            <h3
                className="
           text-2xl md:text-4xl my-6 md:my-10 md:text-center px-[2rem] font-extrabold text-blue-500">

                All Plumbing Services
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-[2rem] md:mx-[4rem]">
                {services.map((service) => (
                    <div
                        key={service.title}
                        className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
                    >
                        <Image
                            src={service.icon}
                            width={10000}
                            height={10000}
                            className="object-contain rounded-md bg-gray-100 p-4 w-full"
                            alt="image"
                        />


                    </div>
                ))}
            </div>

            <div className="items-center px-[2rem] md:px-[4rem] pt-[3rem]">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Serving South Africa Since 2005</h3>
                <p className="text-gray-600 mb-4">
                    Mongameli Plumbing was founded with a vision to provide top-quality plumbing services to homes and businesses across South Africa. Our journey began in a small workshop in Johannesburg, fueled by passion and dedication to the craft of plumbing.
                </p>
                <p className="text-gray-600 mb-4">
                    Over the years, we&apos;ve grown from a local operation to a trusted name in the industry, serving clients in major cities and rural areas alike. Our commitment to excellence, integrity, and customer satisfaction has been the cornerstone of our success.
                </p>
                <p className="text-gray-600">
                    Today, we&apos;re proud to be one of the leading plumbing companies in South Africa, with a team of skilled professionals ready to tackle any plumbing challenge. Our story is one of growth, learning, and unwavering commitment to our craft and our customers.
                </p>
            </div>

        </section>
    );
};

export default PlumbingServices;