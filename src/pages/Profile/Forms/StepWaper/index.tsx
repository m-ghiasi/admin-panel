import { ReactNode } from "react";

type ChildrenType={
    children:ReactNode;
}
export default function StepWraper({children}:ChildrenType){
    return( 
        <div className="bg-white flex flex-col" >
            {children}
        </div>
    )
}