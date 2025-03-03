import { HiOutlineMenu } from "react-icons/hi";
import Button from "../Button";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";
import Menu from "../Menu";
import { RxCross2 } from "react-icons/rx";

export default function Aside() {
  const [hamMenu, setHamMenu] = useState<boolean>(false);

  useEffect(() => {
    // check mobile size
    const isMobile = window.matchMedia("(max-width:768px").matches;

    if (!isMobile) return;
    const handleClickOutside = () => {
      setHamMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handelMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHamMenu((prev) => !prev);
  };

  return (
    <div>
      {/* mobile header */}
      <div className="md:hidden bg-purple-600  w-[100vw] flex justify-between items-center px-4 py-5">
        <div className="flex gap-2 items-center">
          <Button
            className=""
            onClick={handelMobileMenu}
            label={
              hamMenu ? (
                <RxCross2 color="white" size={40} />
              ) : (
                <HiOutlineMenu size={40} color="white" />
              )
            }
          />
          <span className="text-2xl text-white font-medium">Fitilo</span>
        </div>
        <div className="flex gap-2">
          <IoIosNotificationsOutline size={40} color="gray" />
          <IoPersonCircleOutline size={40} color="white" />
        </div>
      </div>

      {/* mobile menu */}
     
        <div
          className={` md:hidden fixed top-20 left-0 transition-all duration-300  w-[60%] h-screen bg-purple-600 ${
            hamMenu ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <Menu />
        </div>
    

      {/* web menu */}
      <div className="hidden  md:flex  h-screen relative  ">
        <Menu className="group w-[70px] absolute z-10 h-full bg-purple-600   hover:w-[250px] transition-all duration-300  " />
      </div>
    </div>
  );
}
