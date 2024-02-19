import Image from "next/image";

export const Loading = () =>{
    return(
        <div className="h-screen w-full flex flex-col my-auto
        justify-center items-center">
            <Image
            src="/logo.svg"
            alt="logo"
            width={120}
            height={120}
            className="animate-pulse duration-700"
            ></Image>

        </div>
    )
}