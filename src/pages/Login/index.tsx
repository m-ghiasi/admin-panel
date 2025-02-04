import { NavLink, useNavigate } from "react-router";
import logo from "../../assets/logo1.jpg";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useState } from "react";
export default function Login() {


    const correctUsername= "avin";
    const corretPassword= "avin"
    const navigate= useNavigate()

   const [username, setUsername]=useState("");
   const [password, setPassword]=useState("");

    const hadelLogin= ()=> {
   
        if(username===correctUsername && password===corretPassword) {
            navigate("/home")
        } else {
            console.log("error----toast")
        }
    }




  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className=" w-[30%] h-[70%] border border-gray-300 rounded-2xl flex flex-col items-center justify-center">
        <img src={logo} className="w-11  p-2" alt="" />
        <h1 className="font-bold">Login To User Panel</h1>
        <br />
        <TextField label="User Name" id="name" className="placeholder:Username" type="text" onChange={(e)=> setUsername(e.target.value)}/>
        <TextField label="Password" id="name" className="placeholder:Username" type="password" onChange={(e)=>  setPassword(e.target.value)}/>
        <br />
        <NavLink className= "text-blue-600" to={"/ForgetPassword"}>Forget Password</NavLink>
        <br />
        <Button onClick={hadelLogin} label="Login" className="bg-purple-800 text-white font-bold w-50 p-2 rounded-2xl" />
        


     
      </div>
    </div>
  );
}
