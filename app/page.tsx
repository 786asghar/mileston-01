import Image from "next/image";
import img from "@/app/Image/img.jpg"
import Link from "next/link";
import aerrow from "@/app/Image/aerrow.png"


export default function Home() {
  return (
    <div>
      
        <div className="flex justify-between py-8 ">
        <div>
          <h1 className="text-4xl text-bold py-2 pl-4">Hello,</h1>
          <h1 className="text-4xl text-bold py-2 pl-4">Asghar Ali</h1>
          <h2 className="text-3xl text-bold py-2 pl-4">GIAIC Study</h2>
          <p className="pl-4 ">I’ am <b>Asghar Ali,</b> a senior year design student who <b>Artificul Intelgence & Web 3 Meta Werse.</b></p>
          <p className="pl-4 "><b>Giaic</b> piece. It took about 1 year. It was very educational to web develper.</p>
          <p className="pl-4 py-3 underline">More shots from this project ↗</p>
          <p className=" pl-4 py-10">Center assignment, 2024</p>
        </div>
        <div className="flex justify-end">
          
             <Image src = {img} width={300} height={90} alt="Image"></Image>
                 
        </div>
        </div>
        </div>
   )
}