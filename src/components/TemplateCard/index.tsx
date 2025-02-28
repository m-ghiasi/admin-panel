import { FC, useState } from "react";
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

  const [selsctCard, setSelectCard]= useState(false)
  const hadleSelect = ()=>{
    setSelectCard((prev)=> !prev)

  }

  return (
    <div className=" rounded-2xl shadow    ">
      <div className="bg-purple-200 rounded-b-[50%] rounded-t-2xl p-5 flex flex-col items-center justify-center gap-2">
        <h1 className="font-bold text-xl">Plan- {id}</h1>

        <p className="text-gray-500 ">
          Company<span className="font-normal">{company.name}</span>
        </p>
        <br />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p><span className="font-bold">UserName:</span> {username}</p>
        <p><span className="font-bold">Name:</span> {name}</p>
        <p>
          <span className="font-bold">City :</span> {address.city}-{address.zipcode}
        </p>
        <p><span className="font-bold">Reservation Link :</span> {website}</p>
        <p><span className="font-bold">Email:</span> {email}</p>
      </div>
      <div className="flex justify-between p-2 items-center">
      <Button
        label={selsctCard? "Selected": "Select"}
        onClick={hadleSelect}
        className={`text-purple-700 px-5 py-3  border-purple-700 border-3 m-2 rounded-xl  font-bold ${selsctCard? "bg-purple-200 ": "bg-white"}`}
      />
      <span className="font-bold text-purple-600 text-2xl">320$</span>
      </div>
    </div>
  );
};

export default TemplateCard;
