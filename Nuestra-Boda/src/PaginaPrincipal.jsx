
import React, { useState } from "react";

import Portada from "./portada";
import Itinerario from "./componentes-encabezado/Itinerario";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import DireccionEvento from "./componentes-encabezado/Ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import AlbumCompartido from "./componentes-encabezado/album";
import ImagenSeparacion from "./componentes-encabezado/imagenseparacion";
import Padres from "./componentes-encabezado/Padres";
import FraseSeparacion from "./componentes-encabezado/FraseSeparacion";

export default function PaginaPrincipal() {
  const [mostrarContenido, setMostrarContenido] =
    useState(false);

  return (
    <div>

      {/* PORTADA ORIGINAL */}
      <Portada mostrarContenido={mostrarContenido} />

      <Padres/>

      {/* RESTO DE LA INVITACIÓN */}
      <DireccionEvento />

      <Itinerario />

      <FraseSeparacion/>

      <Vestimenta />

      <AlbumCompartido />

      <Regalos />

      <Confirmacion />

      <ImagenSeparacion />
    </div>
  );
}
