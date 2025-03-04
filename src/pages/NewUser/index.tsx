import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { TailSpin } from "react-loader-spinner";
import {  Outlet, useNavigate } from "react-router";
import Select from "../../components/Select";




export default function NewUser() {
    const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const [Firstname, setFirstname] = useState("");
  const [newjob, setNewjob] = useState("");
  const [availability, setAvailability] = useState("Available");
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewjob(e.target.value);
  };
  const handleavailability = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAvailability(e.target.value);
  };

  const CreateUser = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: Firstname,
          job: newjob,
          status:availability,
        }),
      });
      const data = await response.json();

      console.log("user Created ", data);
      navigate("/NewUser/myuser");


      setFirstname("");
      setNewjob("");
      setAvailability("")
      
      

      
    } catch (error) {
      console.error("error create user", error);
    } finally {
      setLoading(false);
    }
  };

  const handelSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
   await
    CreateUser()
   
    
  }

  return (
  <div  className="m-auto">
      <form className="bg-gray-200 p-10 rounded-2xl" onSubmit={handelSubmit} >
        <h1 className="flex  justify-center m-2 font-bold text-2xl">Create New User</h1>
      <TextField
      
        label="First Name"
        type="text"
        value={Firstname}
        onChange={handleName}
        plac="Ali"
      />
      <br />
      <TextField label="Last Name" type="text" onChange={handleLastName} value={newjob} plac="olovi" />
      <br />
      <Select options={[
        {value:"Available", label:"Available"},
        {value:"Unavailable", label:"Unavailable"}
      ]} onChange={handleavailability}/>
      <br />
      <Button
        
        className="bg-purple-600 text-white p-2 rounded-2xl font-bold"
        type="submit"
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <TailSpin width={20} height={20} color="purple" />
          </div>
        ) : (
          "Add New User"
        )}
      </Button>
      
      
    </form>
    <div>
      <Outlet/>
    </div>
  </div>
    
  );
}
