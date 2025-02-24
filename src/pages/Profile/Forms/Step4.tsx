import StepWraper from "./StepWaper";
import { useFormStore } from "../../../store";

export default function Step4(){
    const step1=useFormStore((st)=>st.step1)
    const step2=useFormStore((st)=>st.step2)
    const step3=useFormStore((st)=>st.step3)

    return(
       <div>
        <StepWraper>
            your Data  🎈: 
           <p> First Name: {step1.firstName}</p>
           <p> Last Name: {step1.lastName}</p>
           <p> Job: {step2.job}</p>
           <p> Experience: {step2.experience}</p>
           <p> Year Of Experience: {step3.profession}</p>
           <p> Age: {step3.age}</p>

        </StepWraper>
       </div>
    )
   }