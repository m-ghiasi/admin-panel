import { FC } from "react";
import Button from "../Button";

type PropTypes = {
  name: string;
  email: string;
  website: string;
  username: string;
  id: number;
  company: CompanyType;
  address: Addresstype;
};
type CompanyType = {
  name: string;
  catchPhrase: string;
};
type Addresstype = {
  city: string;
  zipcode: number;
};

const TemplateCard: FC<PropTypes> = (props) => {
  const { name, id, company, address, username, website, email } = props;

  return (
    <div className=" rounded-2xl shadow   ">
      <div className="bg-purple-200 rounded-b-[50%] rounded-t-2xl p-5 flex flex-col items-center justify-center gap-2">
        <h1 className="font-bold text-xl">Plan- {id}</h1>

        <p className="text-gray-500 ">
          Company<span className="font-normal">{company.name}</span>
        </p>
        <br />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p>UserName: {username}</p>
        <p>Name : {name}</p>
        <p>
          City : {address.city}-{address.zipcode}
        </p>
        <p>Reservation Link : {website}</p>
        <p>Email: {email}</p>
      </div>
      <Button
        label="Select"
        className="text-purple-700 bg-white px-5 py-3  border-purple-700 border-3 m-2 rounded-xl  font-bold"
      />
    </div>
  );
};

export default TemplateCard;
