import TextField from "../../../components/TextField";
import StepWraper from "./StepWaper";
import {useFormStore} from "../../../store"




export default function Step1(){

    const {step1, setStep1}= useFormStore()

    

    const handelName=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStep1({...step1, firstName: e.target.value})

    }
    

    const handelNLastame=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setStep1({...step1,lastName: e.target.value})

    }
    
 return(
    <div>
        <StepWraper>
            <TextField value={step1.firstName} label="First Name :" type="text" id="firstName" onChange={handelName} />
            <TextField value={step1.lastName} label="Last Name :" type="text" id="lastName" onChange={handelNLastame} />

        </StepWraper>
        
    </div>
 )
}