import Image from "next/image";

const dataNav = [
    {
        src: "/travel-tour2.jpg",
        title: "บริษัททัวร์"
    },
    {
        src: "/travel-tour1.jpg",
        title: "แพคเกจทัวร์อิสระ"
    },
    {
        src: "/travel-tour3.jpg",
        title: " แพคเกจทัวร์ภายในประเทศ"
    },
    {
        src: "/travel-tour4.jpg",
        title: " แพคเกจทัวร์ต่างประเทศ"
    },
    {
        src: "/travel-tour5.jpg",
        title: "เรือสำราญ"
    },
]

export default function Navbar() {
    return (
        <>
            <nav className="w-10/12 m-auto mt-2">
                <ul className="flex">
                    {dataNav.map(el => (
                        <li className="flex items-center  cursor-pointer
                         gap-2 w-full justify-center hover:bg-sky-100 hover:rounded-lg ">
                            <Image
                                src={el.src}
                                height={35}
                                width={35}
                            />
                            <p>{el.title}</p>
                        </li>
                    ))}
                </ul>
            </nav>
        </>

    )
}