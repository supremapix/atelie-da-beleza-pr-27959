import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Cajuru = () => {
  const data = neighborhoods.find(n => n.slug === "cajuru")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Cajuru;
