type propsType={
    onChange:(event: React.ChangeEvent<HTMLSelectElement>)=> void;
    options:{value:string; label:string}[];

}
export default function Select(props:propsType){
    const {onChange,options}=props
    return(
        <div>
            <select id="status" onChange={onChange} >
                {options.map((option,index)=>(
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>

                ))}
                
            </select>
        </div>
    )
}