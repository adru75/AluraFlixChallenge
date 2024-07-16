import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      <h2>Enlace no encontrado</h2>
      <p>
        <Link to="/">Inicio</Link>
      </p>
    </div>
  );
}
