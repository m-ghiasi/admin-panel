import { NavLink } from "react-router";
import { RxDashboard } from "react-icons/rx";

import { MdOutlineManageAccounts } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { SiFitbit } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function Aside() {
  return (
    <div className="w-full h-full relative ">
      <div className="group w-[5%] h-full bg-purple-600   hover:w-[18%] transition-all duration-300  flex flex-col gap-7 pl-[1%] pt-10">
        <NavLink className="pb-10 flex gap-3 items-center " to="home">
          <SiFitbit
            className="min-w-[40px] min-h-[40px]"
            color="white"
            size={30}
          />
          <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 group-hover:font-bold text-2xl transition-opacity duration-300  text-white ">
            Fitilo
          </span>
        </NavLink>
        <NavLink className="flex gap-3 items-center" to="/home/Services">
          <RxDashboard
            className="min-w-[30px] min-h-[30px]"
            size={30}
            color="white"
          />
          <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
            Dashboard
          </span>
        </NavLink>
        <NavLink className="flex gap-3 items-center" to="/home/Services">
          <MdProductionQuantityLimits
            className="min-w-[30px] min-h-[30px]"
            size={30}
            color="white"
          />
          <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
            Services
          </span>
        </NavLink>
        <NavLink className="flex gap-3 items-center" to="/home/Services">
          <MdOutlineManageAccounts
            className="min-w-[30px] min-h-[30px]"
            size={30}
            color="white"
          />
          <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
          Customer
          </span>
        </NavLink>
        <NavLink className="flex gap-3 items-center" to="/home/Services">
          <MdPermIdentity
            className="min-w-[30px] min-h-[30px]"
            size={30}
            color="white"
          />
          <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
            Dashboard
          </span>
        </NavLink>
        <NavLink className="flex gap-3 items-center" to="/home/Services">
          <IoSettingsOutline
            className="min-w-[30px] min-h-[30px]"
            size={30}
            color="white"
          />
          <span className="overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
            Setting
          </span>
        </NavLink>
        <NavLink className="flex gap-3 items-center" to="/home/Services">
          <RiBillLine
            className="min-w-[30px] min-h-[30px]"
            size={30}
            color="white"
          />
          <span className=" overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white ">
            Dashboard
          </span>
        </NavLink>
      </div>
    </div>
  );
}
