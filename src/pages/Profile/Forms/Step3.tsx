import TextField from "../../../components/TextField";
import StepWraper from "./StepWaper";
import { useFormStore } from "../../../store";

export default function Step3(){
    const {step3, setStep3}= useFormStore()
    const handleprofession=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStep3({...step3, profession: e.target.value})
    }
    const handleAge=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStep3({...step3, age:Number (e.target.value)})
      
    }
    return(
       <div>
        <StepWraper>
            <TextField  type="text" label="Education" id="profession" onChange={handleprofession}/>
            <TextField  type="number" label="Age" id="age" onChange={handleAge}/>
        </StepWraper>
       </div>
    )
   }