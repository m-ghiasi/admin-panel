import { Outlet } from "react-router";
import Aside from "../../components/Aside";

export default function Home(){
    return( 
        <div className="flex h-screen  flex-row  ">

            
           
            <Aside />
            <main className="flex flex-1 p-5  bg-gray-100">
                {/*dynamic contents  */}
            <Outlet/>

            </main>
           
        

        </div>
    )
}