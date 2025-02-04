type PropsType = {
  id: string;
  label: string;
  className?: string;
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};
export default function TextField(props: PropsType) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={props.id}>{props.label}</label>

      <input
        className="bg-gray-300 rounded-2xl p-2 w-50"
        type={props.type}
        name={props.id}
        id={props.id}
        onChange={props.onChange}
      />
    </div>
  );
}
