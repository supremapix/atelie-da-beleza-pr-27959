import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Cabral = () => {
  const data = neighborhoods.find(n => n.slug === "cabral")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Cabral;
