import { useState } from "react";
import Button from "../../components/Button";
import Step1 from "./Forms/Step1";
import Step2 from "./Forms/Step2";
import Step3 from "./Forms/Step3";
import Step4 from "./Forms/Step4";
import { useNavigate } from "react-router";

export default function Profile() {
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate()

  const stepLength = [1, 2, 3, 4];
  const handelStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    }if(step===4 ){
      navigate("/dashboard")
    }
    
  };

  return (
    <div
      className=" w-full h-full flex items-center justify-center
     "
    >
      <form className=" bg-gray-200 w-96 p-4 rounded-2xl">
        <header>
          <h1 className="font-bold text-2xl">Information</h1>
        </header>
        <hr className="text-gray-400 my-3" />
        {/* step */}
        <div className="flex justify-evenly gap-2">
          {stepLength.map((st) => (
            <div
              key={st}
              className={` w-8 rounded-full flex items-center justify-center  h-8  ${
                st <= step
                  ? "bg-purple-500 text-white"
                  : "bg-white text-purple-500"
              }`}
            >
              {st}
            </div>
          ))}
        </div>

        {/* content */}
        <div  className="my-3 min-h-50">
            {step===1? <Step1/>:
            step===2? <Step2/>:
            step===3 ? <Step3/>:
            <Step4/>}
            
        </div>

        {/* button */}
        <div className="flex justify-center">
        <Button
          onClick={handelStep}
          label={step===4?"FINISH": "NEXT"}
          className="bg-purple-500 text-white  rounded-2xl p-3 px-6"
        />
        </div>
      </form>
    </div>
  );
}
