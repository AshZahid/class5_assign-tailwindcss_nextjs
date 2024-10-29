import Image from "next/image";
import image from "../image/image.jpg"

export default function Cards(){
    return(

        <div>
        <div className="flex justify-center items-center h-screen space-x-4">
        <div className="bg-teal-300 rounded-lg shadow-lg p-4">
            <Image src={image} alt="card" className="rounded-full w-40 h-40 mx-auto mb-4" />
            <p className="text-center">Name:Asma Zahid</p>
            <p className="text-center">Roll No: 42674</p>
        
       </div>


       <div className="bg-teal-300 rounded-lg shadow-lg p-4">
            <Image src={image} alt="card" className="rounded-full w-40 h-40 mx-auto mb-4" />
            <p className="text-center">Name:Asma Zahid</p>
            <p className="text-center">Roll No: 42674</p>
        
       </div>

       <div className="bg-teal-300 rounded-lg shadow-lg p-4">
            <Image src={image} alt="card" className="rounded-full w-40 h-40 mx-auto mb-4" />
            <p className="text-center">Name:Asma Zahid</p>
            <p className="text-center">Roll No: 42674</p>
        
       </div>
       </div>
       <div className="flex justify-center items-center h-32 space-x-4 mb-96">
       <div className="bg-teal-300 rounded-lg shadow-lg p-4">
            <Image src={image} alt="card" className="rounded-full w-40 h-40 mx-auto mb-4" />
            <p className="text-center">Name:Asma Zahid</p>
            <p className="text-center">Roll No: 42674</p>
        
       </div>

       <div className="bg-teal-300 rounded-lg shadow-lg p-4 ">
            <Image src={image} alt="card" className="rounded-full w-40 h-40 mx-auto mb-4" />
            <p className="text-center">Name:Asma Zahid</p>
            <p className="text-center">Roll No: 42674</p>
        
       </div>

       </div>

       </div>      

    )
}