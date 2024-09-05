import { useState, useEffect } from "react";

// Definición del tipo para el tipo de dispositivo
type DeviceType = "mobile" | "desktop";

const useDeviceType = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>(getDeviceType());

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType());
    };

    window.addEventListener("resize", handleResize);

    // Limpieza del evento cuando se desmonta el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

const getDeviceType = (): DeviceType => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return isMobile ? "mobile" : "desktop";
};

export default useDeviceType;
