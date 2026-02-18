import { useEffect } from "react";
import LandingStatic from "../components/LandingStatic";
import { useNavigate } from "react-router-dom";

export default function Pagado() {
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
        <h1 className="landing-titulo">Pago Realizado</h1>
      </div>

    </div>
  );
}