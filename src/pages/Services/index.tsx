import { useState } from "react";
import GetDataFetch from "../../components/GetDataFetch";
import TemplateCard from "../../components/TemplateCard";
import Button from "../../components/Button";

export default function Services() {
  const [services, setServices] = useState<any>([]);

  const [selectTab, setSelectedTab] = useState<string | null>("all");
  const handelServices = () => {
    setSelectedTab("all");
  };
  const handelMaster = () => {
    setSelectedTab("master");
  };
  const handelBachelor = () => {
    setSelectedTab("bachelor");
  };

  const filterServices = services.filter((service: any) => {
    if (selectTab === "master") return service.id < 5;
    if (selectTab === "bachelor") return service.id >= 6;
    return true;
  });

  return (
    <div className="overflow-x-hidden w-full overflow-auto md:px-10 mt-10 mb-10 flex flex-col md:items-start items-center">
      <GetDataFetch
        url="https://jsonplaceholder.typicode.com/users"
        handleFetchedData={setServices}
      />
      <div className="flex gap-1 md:px-20 items-center justify-center md:justify-start mx-2">
        <Button
          label="All State"
          className={`font-bold rounded-t-2xl px-5 py-3 ${
            selectTab === "all"
              ? "bg-white text-purple-600"
              : "bg-purple-600 text-white"
          }`}
          onClick={handelServices}
        />
        <Button
          label="Master"
          className={`font-bold rounded-t-2xl px-5 py-3 ${
            selectTab === "master"
              ? "bg-white text-purple-600"
              : "bg-purple-600 text-white"
          }`}
          onClick={handelMaster}
        />
        <Button
          label="Bachelor"
          className={`font-bold rounded-t-2xl px-5 py-3 ${
            selectTab === "bachelor"
              ? "bg-white text-purple-600"
              : "bg-purple-600 text-white"
          }`}
          onClick={handelBachelor}
        />
      </div>

      <div className=" flex flex-wrap gap-5 md:ml-20 items-center justify-center md:p-5 shadow-xl shadow-b-xl pb-10 shadow-purple-300  rounded-2xl md:w-[85%] w-[80%] ">
        {filterServices.lenghth === 0 ? (
          <div>is loading...</div>
        ) : (
          filterServices.map((service: any, index: number) => (
            <div key={index} className="justify-between">
              <TemplateCard
                id={service.id}
                name={service.name}
                address={service.address}
                company={service.company}
                email={service.email}
                username={service.username}
                website={service.website}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
