type PropsType = {
  id?: string;
  label: string;
  className?: string;
  value?: string;
  plac?: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};
export default function TextField(props: PropsType) {
  return (
    <div className="flex flex-col gap-3 p-2">
      <label className="" htmlFor={props.id}>
        {props.label}
      </label>

      <input
        required
        className="bg-gray-100 rounded-2xl p-2 w-50 border-2 border-white focus:outline-none focus:border-purple-600"
        type={props.type}
        name={props.id}
        id={props.id}
        onChange={props.onChange}
        value={props.value }
        placeholder={props.plac}
      />
    </div>
  );
}
