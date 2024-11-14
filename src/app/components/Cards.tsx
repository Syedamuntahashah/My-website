import Image from "next/image";
function Cards(){
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
               <div className="shadow-black shadow-lg rounded-lg overflow-hidden p-6">
                    <Image 
                    src="/images/card1.jpeg"
                    alt="Card-1"
                    width={1088}
                    height={896}
                    className="h-[300px] w-full object-cover"
                    />
                </div>
                <div className="shadow-black shadow-lg rounded-lg overflow-hidden p-6">
                        <Image 
                        src="/images/card2.jpeg"
                        alt="Card-2"
                        width={500}
                        height={375}
                        className="h-[300px] w-full object-cover"
                        />
                </div>
                <div className="shadow-black shadow-lg rounded-lg overflow-hidden p-6">
                        <Image 
                        src="/images/card3.jpeg"
                        alt="card-3"
                        width={1088}
                        height={896}
                        className="h-[300px] w-full object-cover"
                        />
                </div>
        </div>
    
        
    )
}


export default Cards;