
import Link from "next/link";
export default function Header(){
    return(
        <div>
             <header>
            <div className="flex bg-blue-600 h-10 ">
                <h1 className= "pl-8 text-2xl font-bold pt-2">This Is Best Institute For Learning</h1>
            <div className="flex justify-end pt-3 pr-5 space-x-7 px-64">
            <Link href ="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/courses">Courses</Link>
            <Link href="/cards">Card</Link>
            
            </div>
            </div>
             
            </header>
        </div>
    )
}