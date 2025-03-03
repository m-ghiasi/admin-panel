
import { HiOutlineMenu } from "react-icons/hi";
import Button from "../Button";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useState } from "react";
import Menu from "../Menu";

export default function Aside() {
  const [hamMenu , setHamMenu]= useState<boolean>(false)

  const handelMobileMenu = ()=>{
    setHamMenu((prev)=>!prev)
  }
  return (
    <div>
      <div className="md:hidden bg-purple-600  w-[100vw] flex justify-between items-center px-4 py-5">
        <div className="flex gap-2 items-center">
          <Button
            className=""
            onClick={handelMobileMenu}
            label={<HiOutlineMenu size={40} color="white" />}
          />
          <span className="text-2xl text-white font-medium">Fitilo</span>
        </div>
        <div className="flex gap-2">
        <IoIosNotificationsOutline  size={40} color="gray" />
          <IoPersonCircleOutline  size={40} color="white" />
          
        </div>
      </div>
      <div className={`md:hidden transition-opacity duration-300  w-[60%] h-screen bg-purple-600 absolute ${hamMenu ? "opacity-100" : "opacity-0"}`}>

        <Menu className=""/>
      </div>
      <div className="hidden  md:flex  h-screen relative  ">

        <Menu className="group w-[70px] absolute z-10 h-full bg-purple-600   hover:w-[250px] transition-all duration-300  "/>
        
      </div>
    </div>
  );
}
