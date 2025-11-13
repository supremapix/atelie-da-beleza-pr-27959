import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Pilarzinho = () => {
  const data = neighborhoods.find(n => n.slug === "pilarzinho")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Pilarzinho;
