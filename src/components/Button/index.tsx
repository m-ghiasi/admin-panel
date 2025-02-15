type BuType = {
  label?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode; 
  type?:string
};

export default function Button(props: BuType) {
  return (
    <button
      onClick={props.onClick}
      className={`cursor-pointer ${props.className}`}
    >
      {props.children}
      {props.label}
    </button>
  );
}
