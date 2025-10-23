import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const Batel = () => {
  const data = neighborhoods.find(n => n.slug === "batel")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default Batel;
