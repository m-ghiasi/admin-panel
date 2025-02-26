import { ReactNode } from "react";

type ChildrenType={
    children:ReactNode;
}
export default function StepWraper({children}:ChildrenType){
    return( 
        <div className="bg-white flex flex-col p-4 rounded-2xl gap-2 text-xl f" >
            {children}
        </div>
    )
}