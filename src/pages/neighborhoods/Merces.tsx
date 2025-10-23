import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Merces = () => {
  const data = neighborhoods.find(n => n.slug === "merces")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Merces;
