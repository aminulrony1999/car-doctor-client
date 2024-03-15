import { useEffect, useState } from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-4">
      <div className="text-center space-y-4">
        <h3 className="text-3xl font-bold text-orange-600">Service</h3>
        <h2 className="text-5xl font-bold">Our Service Area</h2>
        <p className="text-[#737373]">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which dont look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
            services.map(service => <ServiceCard key={service._id} service = {service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
