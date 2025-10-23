import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const BoaVista = () => {
  const data = neighborhoods.find(n => n.slug === "boa-vista")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default BoaVista;
