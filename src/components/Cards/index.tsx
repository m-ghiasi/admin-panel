import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";

type memberType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};

export default function Cards() {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<memberType[]>([]);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();
      setMembers(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[100%] flex-1 overflow-x-hidden ">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <TailSpin width={50} height={50} color="purple" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-3 ">
          {members.map((member: memberType, index: number) => (
            <div
              className=" bg-gray-200 rounded-2xl flex items-center gap-3 p-3"
              key={index}
            >
              <img className="rounded-full" src={member.avatar} alt="" />
              <div className="flex flex-col">
                <span>First Name:{member.first_name}</span>
                <span>Last Name{member.last_name}</span>
                <span>
                  email: <span className="text-blue-700">{member.email}</span>{" "}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
