import { useState } from "react";
import Button from "../../components/Button";

export default function Profile() {
    const [step, setStep]= useState<number>(1)

    const stepLength=[1,2,3,4]
    const handelStep = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
       if(step < 4) {setStep(step+1)}
       console.log(step)

    }


  return (
    <div className="bg-purple-700 w-full h-full flex items-center justify-center
     ">
      <form className=" bg-white w-88 p-4 rounded-2xl">
        <header>
          <h1 className="font-bold text-2xl">Information</h1>
        </header>
        <hr className="text-gray-200 my-3"/>
        {/* step */}
        <div className="flex justify-evenly gap-2">
            {stepLength.map((st)=>(
                <div key={st} className={` w-8 rounded-full flex items-center justify-center  h-8 font-bold ${st<= step ? "bg-purple-500 text-white":"bg-white text-purple-500"}`}>{st}</div>
            ))}
        </div>

        {/* content */}
        <div></div>

        {/* button */}
        <Button onClick={handelStep} label="NEXT" className="bg-purple-500 text-white font-bold rounded-2xl p-3" />

      </form>
    </div>
  );
}
