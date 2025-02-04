type BuType = { label: string; className?: string; onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; };

export default function Button(props: BuType) {
  return <button onClick={props.onClick} className={props.className}>{props.label}</button>;
}
