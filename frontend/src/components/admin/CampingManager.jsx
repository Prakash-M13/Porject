import ServiceManager from "./ServiceManager";

function CampingManager() {
  return (
    <ServiceManager
      title="Camping"
      api="/campings"
    />
  );
}

export default CampingManager;