import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const CristoRei = () => {
  const data = neighborhoods.find(n => n.slug === "cristo-rei")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default CristoRei;
