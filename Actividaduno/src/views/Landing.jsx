import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LandingStatic from "../components/LandingStatic";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/inicio");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing">
      <LandingStatic/>
      <div className="landing-entrada">
        <p>"A todos nos toca un relato"</p>
        <p>Redirigiendo al inicio...</p>
      </div>

    </div>
  );
}