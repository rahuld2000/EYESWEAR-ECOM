import react from "react"
import main1 from "../assests/2.jpg"
import main2 from "../assests/1.png"
import Image from "next/image"
import Quality from "./quality/Quality"
import Typo from "./typo/Typo"
import Collection from "./collection/Collection"
import Recommendation from "./Recomendation/Recommendation"
import Featured from "./featured/Featured"
import Footer from "@/components/footer/Footer"
import Support from "./Support/Support"

export default function Home() {
  
  return (
    <div>
   <div >
   <div className="relative ">
    <Image className="" src={main2}/>
    </div>
    <h1 className="text-[#F2FF68] text-[27.5rem] -top-24 absolute -z-10 -left-0 font-Antonio font-bold max-md:text-[10rem]">CHICLOBE</h1>
    <div  className="absolute top-0 -z-50"  >  
    <Image  src={main1}/>
    </div>
    
   </div>
   <Quality/>
   <Typo/>
   <Collection/>
   <Support/>
   <Recommendation/>
   <Featured/>
   <Footer/>
  
   </div>
  
  )
}
