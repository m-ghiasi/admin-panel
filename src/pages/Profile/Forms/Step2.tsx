import TextField from "../../../components/TextField";
import StepWraper from "./StepWaper";

export default function Step2(){
    const handleJob=()=>{

    }
    const handleExperience=()=>{
        
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