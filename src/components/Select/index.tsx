type propsType={
    onChange:(event: React.ChangeEvent<HTMLSelectElement>)=> void;

}
export default function Select(props:propsType){
    return(
        <div>
            <select id="status" onChange={props.onChange} >
                <option  value="Available">Available</option>
                <option value="UnAvailable">UnAvailable</option>
            </select>
        </div>
    )
}