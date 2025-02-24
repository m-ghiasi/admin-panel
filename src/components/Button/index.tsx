type BuType = {
  label?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode; 
  type?:string
};

export default function Button(props: BuType) {
  return (
    <button
      onClick={props.onClick}
      className={`cursor-pointer ${props.className}`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      {props.children}
      {props.label}
    </button>
  );
}
