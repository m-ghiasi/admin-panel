import { NavLink } from "react-router";
import { RxDashboard } from "react-icons/rx";

import { MdOutlineManageAccounts } from "react-icons/md";

import { IoSettingsOutline } from "react-icons/io5";

import { SiFitbit } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import Button from "../Button";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Aside() {
  return (
    <div>
      <div className="md:hidden bg-purple-600  w-[100vw] flex justify-between items-center px-4 py-5">
        <div className="flex gap-2 items-center">
          <Button
            className=""
            label={<HiOutlineMenu size={40} color="white" />}
          />
          <span className="text-2xl text-white font-medium">Fitilo</span>
        </div>
        <div className="flex gap-2">
        <IoIosNotificationsOutline  size={40} color="gray" />
          <IoPersonCircleOutline  size={40} color="white" />
          
        </div>
      </div>
      <div className="hidden  md:flex  h-screen relative  ">
        <div className=" group w-[70px] absolute z-10 h-full bg-purple-600   hover:w-[250px] transition-all duration-300  flex flex-col gap-7 pl-3 pt-10">
          <NavLink className="pb-10 flex gap-3 items-center " to="dashboard">
            <SiFitbit
              className="min-w-[40px] min-h-[40px]"
              color="white"
              size={30}
            />
            <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 group-hover:font-bold text-2xl transition-opacity duration-300  text-white ">
              Fitilo
            </span>
          </NavLink>
          <NavLink className="flex gap-3 items-center" to="/dashboard">
            <RxDashboard
              className="min-w-[30px] min-h-[30px]"
              size={30}
              color="white"
            />
            <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
              Dashboard
            </span>
          </NavLink>
          <NavLink className="flex gap-3 items-center" to="/Profile">
            <MdOutlineManageAccounts
              className="min-w-[30px] min-h-[30px]"
              size={30}
              color="white"
            />
            <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
              Profile
            </span>
          </NavLink>
          <NavLink className="flex gap-3 items-center" to="/NewUser">
            <IoPersonAddOutline
              className="min-w-[30px] min-h-[30px]"
              size={30}
              color="white"
            />
            <span className=" overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
              AddNewUser
            </span>
          </NavLink>
          <NavLink className="flex gap-3 items-center" to="/Users">
            <FiUsers
              className="min-w-[30px] min-h-[30px]"
              size={30}
              color="white"
            />
            <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
              Users
            </span>
          </NavLink>
          <NavLink className="flex gap-3 items-center" to="/Services">
            <MdProductionQuantityLimits
              className="min-w-[30px] min-h-[30px]"
              size={30}
              color="white"
            />
            <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
              Services
            </span>
          </NavLink>

          <NavLink className="flex gap-3 items-center" to="/Services">
            <IoSettingsOutline
              className="min-w-[30px] min-h-[30px]"
              size={30}
              color="white"
            />
            <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
              Setting
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
