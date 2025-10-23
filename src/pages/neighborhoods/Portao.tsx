import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Portao = () => {
  const data = neighborhoods.find(n => n.slug === "portao")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Portao;
