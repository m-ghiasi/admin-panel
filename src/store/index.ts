import { create } from 'zustand'

type step1 = {
  firstName:string;
  lastName:string;
  
} 
type step2 ={
  job:string;
  experience:number;
}
 type step3 ={
  profession: string;
  age:number;
 }

 type FormStore ={
  step1:step1;
  step2:step2;
  step3:step3;
  setStep1:(input:step1)=>void;
  setStep2:(input:step2)=>void;
  setStep3:(input:step3)=>void;
 }
export const useFormStore = create<FormStore>((set) => ({
  step1:{firstName: "" , lastName:""},
  step2:{job: "" , experience:0},
  step3:{profession: "" , age:0},

  setStep1:(input)=> set((st)=>({...st, step1: {...st.step1, ...input  }})),
  setStep2:(input)=> set((st)=>({...st, step2: {...st.step2, ...input  }})),
  setStep3:(input)=> set((st)=>({...st, step3: {...st.step3, ...input  }})),

}))