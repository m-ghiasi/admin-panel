import TextField from "../../../components/TextField";
import StepWraper from "./StepWaper";

export default function Step3(){
    const handleprofession=()=>{

    }
    const handleAge=()=>{

    }
    return(
       <div>
        <StepWraper>
            <TextField  type="text" label="Profession" id="profession" onChange={handleprofession}/>
            <TextField  type="number" label="Age" id="age" onChange={handleAge}/>
        </StepWraper>
       </div>
    )
   }