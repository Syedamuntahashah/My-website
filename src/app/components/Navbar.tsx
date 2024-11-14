
import Image from "next/image";
import Link from "next/link";

function Navbar(){
    return (
<nav className="flex h-16 W-[95%] m-auto justify-around md:h-20 lg:w[90%] xl:w[1300px] items-center bg-sky-700">
 <div className="flex justify-around gap-4 mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]">
   <Link href="/images/logo.png">
    <Image 
    src="/images/logo.png"
    alt="logo"
    width={90}
    height={113}
    />
    </Link>
    </div>
    <h1 className="text-center text-shadow text-[1.25rem] font-extrabold text-[#b9d8f3]">Tuition Free Education Program on Latest Technologies</h1>
     <div>
        <ul className="flex justify-around items-center gap-5 h-14">
            <li className="text-white">Home</li>
            <li className="text-white">Apply</li>
            <li className="text-white">Jobs</li>
            <li className="text-white">Result</li>
            <li className="text-white">Courses</li>
        </ul>
    </div>
</nav>
    )
}
export default Navbar;