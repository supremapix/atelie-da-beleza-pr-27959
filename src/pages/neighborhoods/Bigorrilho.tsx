import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Bigorrilho = () => {
  const data = neighborhoods.find(n => n.slug === "bigorrilho")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Bigorrilho;
