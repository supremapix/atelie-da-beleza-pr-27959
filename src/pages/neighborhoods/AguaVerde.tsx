import LocationPage from "../LocationPage";
import { neighborhoods } from "@/data/neighborhoods";

const AguaVerde = () => {
  const data = neighborhoods.find(n => n.slug === "agua-verde")!;
  return <LocationPage {...data} neighborhood={data.name} />;
};

export default AguaVerde;
