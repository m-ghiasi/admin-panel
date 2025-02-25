import { useState } from "react";
import GetDataFetch from "../../components/GetDataFetch";
import TemplateCard from "../../components/TemplateCard";

export default function Services() {
  const [services, setServices] = useState<any>([]);

  return (
    <div>
      <GetDataFetch
        url="https://jsonplaceholder.typicode.com/users"
        handleFetchedData={setServices}
      />

      <div className="flex flex-wrap gap-5 p-30">
        {services.map((service: any, index: number) => (
          <div className=" " key={index}>
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
        ))}
      </div>
    </div>
  );
}
