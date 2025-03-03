import { FC } from "react";
import { NavLink } from "react-router";

type PropTypes = { icon: React.ReactNode; label: string;  to:string; className ?:string };

const MenuItm: FC<PropTypes> = ({icon,label,to,className}) => {
  

  return (
    <NavLink className= {`${className} flex gap-3 items-center`} to={to}>
      {icon}
      <span className={` overflow-hidden w-0 group-hover:w-auto opacity-0 group-hover:opacity-100 group-hover:font-bold  transition-opacity duration-300  text-white`} >
        {label}
      </span>
      <span className={` md:hidden text-white`}> {label}</span>
    </NavLink>
  );
};

export default MenuItm;
