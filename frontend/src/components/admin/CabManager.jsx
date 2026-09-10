import ServiceManager from "./ServiceManager";

function CabManager() {
  return (
    <ServiceManager
      title="Cab"
      api="/cabs"
    />
  );
}

export default CabManager;