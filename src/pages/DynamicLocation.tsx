import { useParams, useNavigate } from "react-router-dom";
import { getLocationBySlug } from "@/data/locations";
import LocationPage from "./LocationPage";
import NotFound from "./NotFound";

const DynamicLocation = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const location = slug ? getLocationBySlug(slug) : undefined;

  if (!location) {
    return <NotFound />;
  }

  return <LocationPage {...location} neighborhood={location.name} />;
};

export default DynamicLocation;
