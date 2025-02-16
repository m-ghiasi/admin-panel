import Button from "../../components/Button";
import Cards from "../../components/Cards";
import { useState } from "react";
import MyUser from "../MyUser";

export default function Users() {

    const [selectedTab , setSelectedTab]= useState(null)

    const handleMyUser= ()=>{
        setSelectedTab("myusere")

    }
    const ReqresUsers= ()=>{
        setSelectedTab("reqres" )

    }
  return (
    <div className="m-auto">
      <div className="flex gap-4 ">
        <Button
          className={`text-purple-700 font-bold h-20 p-4 rounded-t-2xl mb-3 ${selectedTab==="MyUser" ? "bg-white text-black":"bg-purple-300 text-white" } bg-purple-300 `}
          label="My Current Users"
          onClick={handleMyUser}
        />
        <Button
          className={`text-purple-700 font-bold h-20 p-4 rounded-t-2xl mb-3 ${selectedTab==="reqres" ? "bg-white text-black":"bg-purple-300 text-white" } bg-purple-300 `}
          label="Reqres Users"
          onClick={ReqresUsers}
        />
        
      </div>
      <div>
        {selectedTab==="myuser" &&  <div> my user</div>}
        {selectedTab==="reqres" && <Cards/>}
      </div>
      
    </div>
  );
}
