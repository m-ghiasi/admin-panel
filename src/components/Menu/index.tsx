import { FC } from "react";

import { RxDashboard } from "react-icons/rx";

import { MdOutlineManageAccounts } from "react-icons/md";

import { IoSettingsOutline } from "react-icons/io5";

import { SiFitbit } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
import MenuItm from "../MenuItem";

type PropTypes = { className: string };

const Menu: FC<PropTypes> = ({ className }) => {
  return (
    <div className={`${className} flex flex-col gap-7 pl-3 pt-10`}>
      <MenuItm
      className={"text-2xl  mb-10"}
      label={"Fitilo"}
        to={"dashboard"}
        icon={
          <SiFitbit
            className="min-w-[40px] min-h-[40px]"
            color="white"
            size={30}
          />
        }
      />
      <MenuItm
      label={"Dashboard"}
        to={"/dashboard"}
        icon={
          <RxDashboard
            className="min-w-[40px] min-h-[40px]"
            color="white"
            size={30}
          />
        }
      />
      <MenuItm
      label={"Profile"}
        to={"/Profile"}
        icon={
          <MdOutlineManageAccounts
            className="min-w-[40px] min-h-[40px]"
            color="white"
            size={30}
          />
        }
      />
      
      <MenuItm
      label={"AddNewUser"}
        to={"/NewUser"}
        icon={
          <IoPersonAddOutline
            className="min-w-[40px] min-h-[40px]"
            color="white"
            size={30}
          />
        }
      />
      <MenuItm
      label={"Users"}
        to={"/Users"}
        icon={
          <FiUsers
            className="min-w-[40px] min-h-[40px]"
            color="white"
            size={30}
          />
        }
      />
      <MenuItm
      label={"Services"}
        to={"/Services"}
        icon={
          <MdProductionQuantityLimits
            className="min-w-[40px] min-h-[40px]"
            color="white"
            size={30}
          />
        }
      />
      <MenuItm
      label={"Setting"}
        to={"/Services"}
        icon={
          <IoSettingsOutline
            className="min-w-[40px] min-h-[40px]"
            color="white"
            size={30}
          />
        }
      />
     
    </div>
  );
};

export default Menu;
