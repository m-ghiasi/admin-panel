import { useEffect, useState } from "react";
type User = {
    id: number;
    name: string;
    job: string;
  };
export default function GetMyUsers() {

    const[users, setUsers]= useState<User[]>([])
  const getData = async () => {
    try {
      const res = await fetch("http://localhost:5000/users");
      const data:User[]= await res.json()
      console.log(data)
      setUsers(data)
      console.log(data)
    } catch (error) {
      console.error("getdata failed", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);



  return <div>
   <table >
    <thead>
    <tr>
        <td>Number</td>
        <td>Name</td>
        <td>Job</td>
    </tr>
    </thead>
    <tbody>
        {users.map((user, index)=>(
            <tr key={user.id}>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.job}</td>
        </tr>
        ))}
    </tbody>
   </table>
  </div>;
}
