import TextField from "../../../components/TextField";
import StepWraper from "./StepWaper";
import { useFormStore } from "../../../store";

export default function Step2(){


    const{step2, setStep2}=useFormStore()

    const handleJob=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStep2({...step2, job: e.target.value})

    }
    const handleExperience=(e:React.ChangeEvent<HTMLInputElement>)=>{
            <TextField type="number" label="Year Of Experience" id="experience" onChange={handleExperience}/>
        setStep2({...step2, experience:Number( e.target.value)})
    }
    return(
       <div>
        <StepWraper>
            <TextField type="text" label="Job" id="job" onChange={handleJob}/>
            <TextField type="number" label="Year Of Experience" id="experience" onChange={handleExperience}/>

        </StepWraper>
        
       </div>
    )
   }