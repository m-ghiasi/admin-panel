type propsType={
    onChange:(event: React.ChangeEvent<HTMLSelectElement>)=> void;

}
export default function Select(props:propsType){
    const {onChange}=props
    return(
        <div>
            <select id="status" onChange={onChange} >
                <option  value="Available">Available</option>
                <option value="UnAvailable">UnAvailable</option>
            </select>
        </div>
    )
}