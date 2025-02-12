import { NavLink } from "react-router";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { MdOutlineManageAccounts } from "react-icons/md";
import { MdPermIdentity } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { SiFitbit } from "react-icons/si";

export default function Aside() {
  return (
    <div className="w-full h-full relative ">
      <div className="group w-[10%] h-full bg-purple-600   hover:w-[30%] transition-all duration-300  flex flex-col gap-5 pl-10 pt-10">
        <NavLink className="pb-10 flex " to="home">
          <SiFitbit color="white" size={50} />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white font-bold">Fitilo </span>
        </NavLink>
        <NavLink to="/home/Services">
          <RxDashboard size={30} color="white" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white font-bold">Dashboard</span>
        </NavLink>
        <NavLink to="/home/Services">
          <MdOutlineAddToPhotos size={30} color="white" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white font-bold">Dashboard</span>
        </NavLink>
        <NavLink to="/home/Services">
          <MdOutlineManageAccounts size={30} color="white" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white font-bold">Dashboard</span>
        </NavLink>
        <NavLink to="/home/Services">
          <MdPermIdentity size={30} color="white" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white font-bold">Dashboard</span>
        </NavLink>
        <NavLink to="/home/Services">
          <IoSettingsOutline size={30} color="white" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white font-bold">Dashboard</span>
        </NavLink>
        <NavLink to="/home/Services">
          <RiBillLine size={30} color="white" />
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300  text-white font-bold">Dashboard</span>
        </NavLink>
      </div>
    </div>
  );
}
