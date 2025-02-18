import { useEffect, useState } from "react";
import { FcOk } from "react-icons/fc";
import { MdDoNotDisturbOn } from "react-icons/md";
import Button from "../Button";
import { IoTrashBin } from "react-icons/io5";
type User = {
  id: number;
  name: string;
  job: string;
  status: string;
};
export default function GetMyUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/users");
      const data: User[] = await res.json();
      console.log(data);
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error("getdata failed", error);
    }
  };
  const handleDelete=async(id:number)=>{
    try {
      const res= await fetch(`http://localhost:5000/users/${id}`, {
        method:"DELETE"
      });
      if(!res.ok){
        throw new Error("Failed to delete user")
      }
      setUsers((prevUsers) => prevUsers.filter((user)=> user.id !== id));



    } catch(error){
      console.error("Delete failled ", error)
    }

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr className="grid grid-cols-5 gap-4  p-4 rounded-2xl bg-gray-300">
            <td>Number</td>
            <td>Name</td>
            <td>Job</td>
            <td>status</td>
            <td>stability</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              className="grid grid-cols-5 gap-4  p-4 rounded-2xl border border-gray-300"
              key={user.id}
            >
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.job}</td>
              <td>{user.status === "Available" ? <FcOk /> : <MdDoNotDisturbOn color="red"/>}</td>
              <td><Button onClick={()=> handleDelete(user.id)} label={<IoTrashBin color="purple" />}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
