import { useState } from "react";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { TailSpin } from "react-loader-spinner";
import {  Outlet, useNavigate } from "react-router";




export default function NewUser() {
    const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const [Firstname, setFirstname] = useState("");
  const [newjob, setNewjob] = useState("");
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstname(e.target.value);
  };
  const handleJob = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewjob(e.target.value);
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
        }),
      });
      const data = await response.json();

      console.log("user Created ", data);
      navigate("/Home/NewUser/myuser");


      setFirstname("");
      setNewjob("");
      
      

      
    } catch (error) {
      console.error("error create user", error);
    } finally {
      setLoading(false);
    }
  };

  const handelSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    CreateUser()
    e.preventDefault();
    
  }

  return (
  <div className="m-auto">
      <form onSubmit={handelSubmit} >
      <TextField
        label="First Name"
        type="text"
        value={Firstname}
        onChange={handleName}
      />
      <br />
      <TextField label="Job" type="text" onChange={handleJob} value={newjob} />
      <br />
      <Button
        
        className="bg-purple-600 text-white p-2 rounded-2xl font-bold"
        type="submit"
      >
        {loading ? (
          <div className="flex justify-center items-center">
            <TailSpin width={20} height={20} color="gray" />
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
