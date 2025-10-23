import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const AltoDaXV = () => {
  const data = neighborhoods.find(n => n.slug === "alto-da-xv")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default AltoDaXV;
