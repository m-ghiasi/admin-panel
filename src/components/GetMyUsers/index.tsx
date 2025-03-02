import { useEffect, useState } from "react";
import { FcOk } from "react-icons/fc";
import { MdDoNotDisturbOn } from "react-icons/md";
import Button from "../Button";
import { IoTrashBin } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { TailSpin } from "react-loader-spinner";
type User = {
  id: number;
  name: string;
  job: string;
  status: string;
};
export default function GetMyUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading]= useState(false)
  const getData = async () => {
    try {
      setLoading(true)
      const res = await fetch("http://localhost:5000/users");
      const data: User[] = await res.json();
      console.log(data);
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error("getdata failed", error);
    } finally{
      setLoading(false)
    }
  };
  // const handleDelete = async (id: number) => {
  //   try {
  //     const res = await fetch(`http://localhost:5000/users/${id}`, {
  //       method: "DELETE",
  //     });
  //     if (!res.ok) {
  //       throw new Error("Failed to delete user");
  //     }
  //     setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  //   } catch (error) {
  //     console.error("Delete failled ", error);
  //   }
  // };


  const handleDelete=async(id:number)=> {
    try {
      const res= await fetch(`http://localhost:5000/users/${id}` , {
        method: "DELETE"
      }) 
      if(!res.ok) {
        throw new Error("Failed delet")
      }
      setUsers((prevUsers)=>prevUsers.filter((user)=> user.id !== id))
    } catch (error) {
      console.error("failed", error)

      
    }
  }

  const handleEdit=async(id:number)=> {
    // try {
      // const res= await fetch(`http://localhost:5000/users/${id}` , {
        // method: ""
      // }) 
    //   if(!res.ok) {
    //     throw new Error("Failed delet")
    //   }
    //   setUsers((prevUsers)=>prevUsers.filter((user)=> user.id !== id))
    // } catch (error) {
    //   console.error("failed", error)

      
    // }
    console.log(id)
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-[100%]">
      {loading ? (<div className="flex justify-center mt-10">
        <TailSpin width={50} height={50} color="purple" />
      </div>) :(
        
      <table className="w-[100%]">
      <thead className="w-[100%]">
        <tr className="md:grid md:grid-cols-6 flex justify-between gap-1  p-4 rounded-2xl bg-gray-300 w-[100%] font-bold">
          <td className="">Nu</td>
          <td>Name</td>
          <td className="flex-2">Job</td>
          <td>status</td>
          <td>Delete</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            className="md:grid md:grid-cols-6 gap-4 flex justify-between p-4 rounded-2xl border border-gray-300"
            key={user.id}
          >
            <td>{index + 1}</td>
            <td >{user.name}</td>
            <td className="flex-2">{user.job}</td>
            <td>
              {user.status === "Available" ? (
                <FcOk />
              ) : (
                <MdDoNotDisturbOn color="red" />
              )}
            </td>
            <td>
              <Button
                onClick={()=>handleDelete(user.id)}
                label={<IoTrashBin color="purple" />}
              />
            </td>
            <td>
              <Button
                onClick={()=>handleEdit(user.id)}
                label={<CiEdit color="purple" />}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      )}
    </div>
  );
}
