import { FC } from "react";

type PropTypes = {
  name: string;
  id: number;
};

const TemplateCard: FC<PropTypes> = (props) => {
  const {name, id} = props;

  return (
    <div>
      <p>id: {id}</p>
      <p>name : {name}</p>
    </div>
  );
};

export default TemplateCard;
