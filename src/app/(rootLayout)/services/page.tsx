import Service from "@/components/ui/Services";

const ServicesPage = async () => {
  const res = await fetch("http://localhost:5001/api/v1/services", {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <Service services={data.data}></Service>
    </div>
  );
};

export default ServicesPage;
