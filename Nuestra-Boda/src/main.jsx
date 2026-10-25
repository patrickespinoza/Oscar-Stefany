
import React from "react";
import ReactDOM from "react-dom/client";

import PaginaPrincipal from "./PaginaPrincipal";
import Generador from "./pages/Generador";

import "./index.css";

// ==========================================
// WEDLY PLUS
// OSCAR & STEFANY
// ==========================================

function App() {
  // Funciona en localhost y en producción.
  const ruta = window.location.pathname
    .replace(/\/+$/, "")
    .toLowerCase();

  // Ruta del generador
  if (ruta === "/generador") {
    return <Generador />;
  }

  // Invitación principal y personalizada
  return <PaginaPrincipal />;
}

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
