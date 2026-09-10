import ServiceManager from "./ServiceManager";

function TourManager() {
  return (
    <ServiceManager
      title="Tour"
      api="/tours"
    />
  );
}

export default TourManager;