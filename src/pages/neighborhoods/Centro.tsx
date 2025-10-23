import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Centro = () => {
  const data = neighborhoods.find(n => n.slug === "centro")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Centro;
