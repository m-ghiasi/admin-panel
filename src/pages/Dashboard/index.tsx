// import Aside from "../../components/Aside";

import { NavLink } from "react-router";
import Step4 from "../Profile/Forms/Step4";
import { IoPersonAddOutline } from "react-icons/io5";
import Button from "../../components/Button";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className=" h-screen w-[100%] flex flex-col  p-10  bg-purple-200 justify-between items-center ">
      
      <div className="w-[100%] p-3 flex gap-5 justify-center">
        <div className="bg-white rounded-2xl w-[400px] flex items-center justify-center">
          <NavLink
            to={""}
            className="rounded-full md:w-52 md:h-52  bg-gray-300 flex justify-center items-center p-4"
          >
            <IoPersonAddOutline className="w-30 h-30 text-gray-400" />
          </NavLink>
        </div>

        <div className="md:w-[600px] flex flex-col gap-4 ">
          <Step4 />

          <Button
            label="Go TO PROFILE"
            className="w-40 px-6 py-2 bg-purple-600 text-white rounded-2xl font-medium"
          />
        </div>
      </div>
      <div className="rounded-2xl flex-col w-[70%] bg-white flex justify-between items-center p-10">
        <p>Services</p>
        <hr className="w-full m-2 text-gray-400" />

        <MdProductionQuantityLimits className="w-60 h-60 text-gray-300" />
        <p>You haven't purchased yet.</p>
        <Button
          label="Go TO SERVICES"
          className="w-60 px-6 py-2 bg-purple-600 text-white rounded-2xl font-medium"
        />
      </div>

    </div>
  );
}
