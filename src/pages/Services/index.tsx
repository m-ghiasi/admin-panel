import { useState } from "react";
import GetDataFetch from "../../components/GetDataFetch";
import TemplateCard from "../../components/TemplateCard";

export default function Services(){

    const[services, setServices]= useState<any>([])
    return(
        <div className="p-20">
           hi servics
           <GetDataFetch url="https://jsonplaceholder.typicode.com/users" handleFetchedData={setServices}/>


           {services.map((service:any, index:number)=>(

                <div key={index}><TemplateCard id={service.id} name={service.name}/></div>

           ))}

           






           
        </div>
    )
}