import Image from "next/image";
import homeimg from "../image/homeimg.jpeg"
export default function Navigation(){
    return(
       
       <div>
      <Image src={homeimg} alt="image" className="w-screen"/>
             </div>
    )
}