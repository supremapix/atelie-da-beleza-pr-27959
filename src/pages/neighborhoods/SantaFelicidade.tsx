import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const SantaFelicidade = () => {
  const data = neighborhoods.find(n => n.slug === "santa-felicidade")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default SantaFelicidade;
