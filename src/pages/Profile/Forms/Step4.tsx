import StepWraper from "./StepWaper";
import { useFormStore } from "../../../store";


export default function Step4(){
    const step1=useFormStore((st)=>st.step1)
    const step2=useFormStore((st)=>st.step2)
    const step3=useFormStore((st)=>st.step3)

  if (!step1 || !step2 || !step3) return <p>Loading...</p>;

    return(
       <div>
        <StepWraper>
            <h1 className="font-medium text m-auto">your Data  </h1>
            <hr className="text-gray-300 " />
           <p> First Name  <span className="text-purple-600 rounded-2xl min-w-[200px]  mx-2">{step1.firstName}</span> </p>
           <p> Last Name  <span className="text-purple-600 rounded-2xl min-w-[200px]  mx-2">{step1.lastName}</span></p>
           <p> Job  <span className="text-purple-600 rounded-2xl min-w-[200px]  mx-2">{step2.job}</span></p>
           <p> Year Of Experience   <span className="text-purple-600 rounded-2xl min-w-[200px]  mx-2">{step2.experience}</span></p>
           <p>  Education <span className="text-purple-600 rounded-2xl min-w-[200px]  mx-2">{step3.profession}</span></p>
           <p> Age  <span className="text-purple-600 rounded-2xl min-w-[200px]  mx-2">{step3.age}</span></p>
         

        </StepWraper>
       </div>
    )
   }