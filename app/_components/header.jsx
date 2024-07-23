import Image from "next/image"

const icons = [
    {
        src: "/line.png",
    },
    {
        src: "/facebook.png",
    },
    {
        src: "/instagram.png",
    },
]


export default function Header() {
    return (
        <div className="flex items-center w-10/12 justify-between m-auto p-2 border-b-2">
            <h1 className="font-semibold pl-3">Travel Center Company</h1>
            <div className="flex">
                <div className=" text-xs border-r-2 pr-2">
                    <p>ศูนย์บริการช่วยเหลือลูกค้า 02-882-8288</p>
                    <p>เปิดให้บริการตลอด 24 ชั่วโมง</p>
                </div>
                <div className="flex px-1 ">
                    {icons.map(icon => (
                        <div className="px-1">
                            <Image
                                src={icon.src}
                                height={28}
                                width={28}
                            />
                        </div>
                    ))}

                </div>

            </div>



        </div>
    )
}