import Button from "../../components/Button";
import Cards from "../../components/Cards";
import { useState } from "react";
import { PiMaskSadLight } from "react-icons/pi";
import { PiMaskHappyLight } from "react-icons/pi";
import { useNavigate } from "react-router";

import GetMyUsers from "../../components/GetMyUsers";

export default function Users() {
  const [selectedTab, setSelectedTab] = useState<string | JSX.Element | null>(
    null
  );
  const navigate = useNavigate();

  const handleMyUser = () => {
    setSelectedTab("MyUser");
  };
  const ReqresUsers = () => {
    setSelectedTab("reqres");
  };
  const [hover, setHover] = useState<boolean>(false);
  const handleClick = () => {
    navigate("/Home/NewUser");
  };
  return (
    <div className="ml-[5%] w-full h-screen flex flex-col ">
      <div className="flex gap-4 ">
        <Button
          className={`text-purple-700 font-bold h-20 p-4 rounded-t-2xl mb-3 ${
            selectedTab === "MyUser"
              ? "bg-purple-600 text-white"
              : "bg-gray-2npnnnn00 text-black"
          } bg-purple-300 `}
          label="My Current Users"
          onClick={handleMyUser}
        />
        <Button
          className={`text-purple-700 font-bold h-20 p-4 rounded-t-2xl mb-3 ${
            selectedTab === "reqres"
              ? "bg-purple-600 text-white"
              : "bg-gray-200 text-black"
          } bg-purple-300 `}
          label="Reqres Users"
          onClick={ReqresUsers}
        />
      </div>
      <div className="flex justify-center mt-10">
        {selectedTab === "MyUser" ? (
          <GetMyUsers />
        ) : selectedTab === "reqres" ? (
          <Cards />
        ) : (
          <div className="flex flex-col  items-center pt-20 ">
            <div className="reletive w-40 h-40">
              <PiMaskHappyLight
                className={`w-40 h-40 text-purple-300 transition-opacity duration-400 absolute ${
                  hover ? "opacity-100" : "opacity-0"
                } `}
              />

              <PiMaskSadLight
                className={`w-40 h-40 text-gray-300 transition-opacity duration-400 absolute ${
                  hover ? "opacity-0" : "opacity-100"
                } `}
              />
            </div>

            <div className="p-3 flex flex-col gap-2 items-center text-gray-500">
              <p>you han no user!</p>
              <p>Here you can create new users. </p>
            </div>
            <Button
              label="Create New User"
              className="bg-purple-600 text-white font-bold text-2xl px-6 py-4 rounded-2xl "
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={handleClick}
            ></Button>
          </div>
        )}
      </div>
    </div>
  );
}
