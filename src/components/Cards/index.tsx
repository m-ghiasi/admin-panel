import { useEffect, useState } from "react";

type memberType= {
    id: number;
    first_name:string;
    last_name:string;
    email:string;
    avatar:string

}

export default function Cards() {
  const [members, setMembers] = useState<memberType[]>([]);

  const getData = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users?page=1");
      const data = await res.json();
      setMembers(data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" flex-1">
      <div className="grid grid-cols-2 gap-3 ">
        {members.map((member:memberType, index:number) => (
          <div className=" bg-gray-200 rounded-2xl flex items-center gap-3 p-3" key={index}>
            <img className="rounded-full" src={member.avatar} alt="" />
            <div className="flex flex-col">
            <span>First Name:{member.first_name}</span>
            <span>Last Name{member.last_name}</span>
            <span>email: <span className="text-blue-700">{member.email}</span> </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
