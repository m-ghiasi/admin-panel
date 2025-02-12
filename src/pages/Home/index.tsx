import { Outlet } from "react-router";
import Aside from "../../components/Aside";

export default function Home(){
    return( 
        <div className="w-full h-full flex flex-row  ">

            
           
            <Aside />
            <div className="flex">
                {/*dynamic contents  */}
            <Outlet/>

            </div>
           
        

        </div>
    )
}