import Button from "../../components/Button";
import Cards from "../../components/Cards";
import { useState } from "react";

import GetMyUsers from "../../components/GetMyUsers";

export default function Users() {

    const [selectedTab , setSelectedTab]= useState<string | JSX.Element | null>(null)

    const handleMyUser= ()=>{
        setSelectedTab("MyUser")

    }
    const ReqresUsers= ()=>{
        setSelectedTab("reqres" )

    }
  return (
    <div className="ml-[10%]">
      <div className="flex gap-4 ">
        <Button
          className={`text-purple-700 font-bold h-20 p-4 rounded-t-2xl mb-3 ${selectedTab==="MyUser" ? "bg-purple-600 text-white":"bg-gray-2npnnnn00 text-black" } bg-purple-300 `}
          label="My Current Users"
          onClick={handleMyUser}
        />
        <Button
          className={`text-purple-700 font-bold h-20 p-4 rounded-t-2xl mb-3 ${selectedTab==="reqres" ? "bg-purple-600 text-white":"bg-gray-200 text-black" } bg-purple-300 `}
          label="Reqres Users"
          onClick={ReqresUsers}
        />
        
      </div>
      <div>
        {selectedTab==="MyUser" && <GetMyUsers/>}
        {selectedTab==="reqres" && <Cards/>}
      </div>
      
    </div>
  );
}
