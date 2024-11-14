import Link from "next/link";
import Image from "next/image";

function Hero(){
    return (
        <main className="flex gap-5 mx-7">
            <div className="h-fit w-full pt-5 md:w-1/2 md:py-10">
            <h1 className="whitespace-nowrap text-center text-[2rem] font-extrabold leading-10 tracking-wider 
            text-main sm:text-5xl sm:leading-none md:text-left lg:text-6xl text-sky-800">Governor Sindh</h1>
            <h1 className="whitespace-nowrap text-center text-[1.5rem] font-normal leading-[2rem] tracking-wider
            text-main sm:text-4xl sm:leading-[3rem] md:text-left lg:text-[2.5rem] text-sky-800">Kamran Khan Tessori</h1>
            <h1 className="mt-5 whitespace-nowrap text-center
            text-[1.5rem] font-semibold leading-[2rem] tracking-wider text-sub sm:text-4xl sm:leading-[3rem] md:text-left
            lg:text-[2.5rem] text-sky-300">Certified Clould <br/> Applied Generative AI <br/> Engineer(GenEng)</h1>
            <p className="mt-5 whitespace-nowrap text-center text-[1.25rem] font-extrabold text-main sm:text-2xl md:text-left 
            text-sky-800">Earn up to $5,000 / month</p>
            <p className="my-5 w-full text-center text-[1.25rem] font-bold tracking-wider
            text-main sm:text-2xl md:w-[80%] md:text-left text-sky-800">Now admissions are open in Hyderabad</p>
            <p className="mt-5 w-full text-center md:text-left font-extrabold sm:text3xl text-sky-950">Designed by-Syeda Muntaha Shah</p>
            </div>
            
            <div className="flex md: ml-40 h-auto min-w-[900px] lg:w-[600px]">
                <Link href="/images/governor.png">
                <Image 
                src="/images/governor.png"
                alt="Governor Sindh"
                width={1600}
                height={1212}
                />
                </Link>
            </div>
            
        </main>
    )
}
export default Hero;