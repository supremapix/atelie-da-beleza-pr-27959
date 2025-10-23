import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Reboucas = () => {
  const data = neighborhoods.find(n => n.slug === "reboucas")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Reboucas;
