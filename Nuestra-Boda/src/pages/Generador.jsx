
import React, { useState } from "react";
import {
  Copy,
  Link2,
  ShieldCheck,
  UsersRound,
  UserRound,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";

// ==========================================
// WEDLY PLUS - OSCAR & STEFANY
// ==========================================

const API_URL =
  "https://script.google.com/macros/s/AKfycbzh7OJ8G6G2p9AbDy5dUJp68iW3TfhUKqY8jnGyCq6tF0i8Vgp2_e4px30QafkAWQNzZg/exec";

// ==========================================
// GENERAR TOKEN ÚNICO
// ==========================================

function crearToken() {
  const bytes = new Uint8Array(24);
  window.crypto.getRandomValues(bytes);

  return Array.from(bytes, (byte) =>
    byte.toString(16).padStart(2, "0")
  ).join("");
}

// ==========================================
// CONSULTAR GOOGLE APPS SCRIPT
// ==========================================

function consultarInvitacion(token) {
  return new Promise((resolve, reject) => {
    const callback =
      "wedly_" +
      Date.now() +
      "_" +
      Math.random().toString(36).slice(2);

    const script = document.createElement("script");
    let terminado = false;

    const limpiar = () => {
      delete window[callback];
      script.remove();
      clearTimeout(timeout);
    };

    const finalizar = (error, datos) => {
      if (terminado) return;

      terminado = true;
      limpiar();

      if (error) reject(error);
      else resolve(datos);
    };

    const timeout = setTimeout(() => {
      finalizar(
        new Error("Google Apps Script no respondió.")
      );
    }, 15000);

    window[callback] = (datos) => {
      finalizar(null, datos);
    };

    script.onerror = () => {
      finalizar(
        new Error("No se pudo consultar Google Apps Script.")
      );
    };

    script.src =
      `${API_URL}?accion=consultar` +
      `&token=${encodeURIComponent(token)}` +
      `&callback=${encodeURIComponent(callback)}`;

    document.body.appendChild(script);
  });
}

// ==========================================
// ESPERAR CONFIRMACIÓN DEL SERVIDOR
// ==========================================

async function verificarInvitacion(token, nombre, pases) {
  for (let intento = 0; intento < 5; intento++) {
    try {
      const resultado = await consultarInvitacion(token);

      if (
        resultado.ok &&
        resultado.nombre === nombre &&
        Number(resultado.pases) === pases
      ) {
        return true;
      }
    } catch (error) {
      console.warn("Verificación pendiente:", error);
    }

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );
  }

  throw new Error(
    "No se pudo verificar el registro de la invitación. " +
    "Comprueba que Apps Script esté actualizado."
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Generador() {
  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState("1");

  const [link, setLink] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [estado, setEstado] = useState("");
  const [tipoEstado, setTipoEstado] = useState("");

  const [cargando, setCargando] = useState(false);
  const [copiado, setCopiado] = useState("");

  // ========================================
  // GENERAR INVITACIÓN
  // ========================================

  const generarInvitacion = async (event) => {
    event.preventDefault();

    setEstado("");
    setTipoEstado("");
    setLink("");
    setMensaje("");
    setCopiado("");

    const nombreLimpio = nombre.trim();
    const cantidad = Number(pases);

    if (!nombreLimpio || nombreLimpio.length > 150) {
      setEstado("Escribe un nombre válido.");
      setTipoEstado("error");
      return;
    }

    if (
      !pases.trim() ||
      !Number.isSafeInteger(cantidad) ||
      cantidad < 1
    ) {
      setEstado("Escribe una cantidad válida de lugares.");
      setTipoEstado("error");
      return;
    }

    if (!window.crypto?.getRandomValues) {
      setEstado(
        "Debes utilizar HTTPS o localhost para generar enlaces."
      );
      setTipoEstado("error");
      return;
    }

    setCargando(true);

    const token = crearToken();

    try {
      // Crear invitación en Apps Script.
      // No se utiliza clave de administrador.
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          accion: "crearInvitacion",
          token,
          nombre: nombreLimpio,
          pases: cantidad,
        }),
      });

      // Verificar que se registró correctamente.
      await verificarInvitacion(
        token,
        nombreLimpio,
        cantidad
      );

      // Generar URL automáticamente según el dominio.
      const url = new URL("/", window.location.origin);
      url.searchParams.set("id", token);

      const enlaceFinal = url.toString();

      setLink(enlaceFinal);

      const textoPases =
        cantidad === 1
          ? "1 lugar"
          : `${cantidad} lugares`;

      const mensajeWhatsApp = `✨ INVITACIÓN ESPECIAL ✨

Hola ${nombreLimpio} 🤍

Con mucha alegría queremos compartir contigo uno de los días más importantes de nuestras vidas.

Oscar & Stefany
02 de enero de 2027

Hemos reservado especialmente para ti:
🎟️ ${textoPases}

Puedes consultar los detalles de nuestra boda y confirmar tu asistencia en el siguiente enlace:

${enlaceFinal}

Nos encantará compartir este momento contigo.

Con cariño,
Oscar & Stefany 🤍`;

      setMensaje(mensajeWhatsApp);

      setEstado(
        "Invitación creada y verificada correctamente."
      );
      setTipoEstado("exito");

    } catch (error) {
      console.error(error);

      setEstado(
        error.message ||
          "No fue posible generar la invitación."
      );
      setTipoEstado("error");

    } finally {
      setCargando(false);
    }
  };

  // ========================================
  // COPIAR TEXTO
  // ========================================

  const copiarTexto = async (texto, tipo) => {
    try {
      await navigator.clipboard.writeText(texto);
      setCopiado(tipo);
    } catch (error) {
      console.error(error);
      setEstado("No se pudo copiar automáticamente.");
      setTipoEstado("error");
    }
  };

  const inputClass = `
    w-full border border-[#E5CCB0]
    bg-white px-4 py-4
    font-serif text-base text-[#45413F]
    outline-none transition-colors
    placeholder:text-[#B09D87]
    focus:border-[#8F7D68]
  `;

  const labelClass = `
    mb-3 block text-[10px] uppercase
    tracking-[0.23em] text-[#766A5F]
  `;

  return (
    <main
      className="
        min-h-screen w-full
        bg-[#FCFAEF] px-4 py-12
        sm:px-8 sm:py-16
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* ENCABEZADO */}

        <header className="mb-12 text-center">
          <p
            className="
              text-[10px] uppercase
              tracking-[0.35em] text-[#8F7D68]
            "
          >
            Oscar & Stefany · 02.01.2027
          </p>

          <h1
            className="
              mt-5 font-serif
              text-3xl text-[#45413F]
              sm:text-4xl md:text-5xl
            "
          >
            Generador de invitaciones
          </h1>

          <div
            className="
              mx-auto mt-6 h-px
              w-20 bg-[#B09D87]
            "
          />

          <p
            className="
              mx-auto mt-6 max-w-xl
              font-serif text-lg italic
              leading-relaxed text-[#766A5F]
            "
          >
            Personaliza cada invitación y genera
            un enlace privado para tus invitados.
          </p>
        </header>

        {/* CONTENIDO */}

        <div
          className="
            grid grid-cols-1 gap-10
            lg:grid-cols-[1fr_0.9fr]
          "
        >
          {/* FORMULARIO */}

          <section
            className="
              border border-[#E5CCB0]
              bg-white/80 p-5
              shadow-[0_20px_50px_rgba(69,65,63,0.08)]
              sm:p-9
            "
          >
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={25}
                strokeWidth={1.3}
                color="#8F7D68"
              />

              <h2
                className="
                  font-serif text-2xl
                  text-[#45413F]
                "
              >
                Datos del invitado
              </h2>
            </div>

            <form
              onSubmit={generarInvitacion}
              className="mt-9 space-y-7"
            >
              {/* NOMBRE */}

              <div>
                <label
                  htmlFor="generador-nombre"
                  className={labelClass}
                >
                  Nombre o familia
                </label>

                <div className="relative">
                  <UserRound
                    size={18}
                    className="
                      absolute left-4 top-1/2
                      -translate-y-1/2 text-[#B09D87]
                    "
                  />

                  <input
                    id="generador-nombre"
                    type="text"
                    required
                    maxLength={150}
                    value={nombre}
                    onChange={(event) => {
                      setNombre(event.target.value);
                      setLink("");
                      setMensaje("");
                    }}
                    placeholder="Ej. Familia Hernández"
                    className={`${inputClass} pl-12`}
                  />
                </div>
              </div>

              {/* PASES */}

              <div>
                <label
                  htmlFor="generador-pases"
                  className={labelClass}
                >
                  Lugares reservados
                </label>

                <div className="relative">
                  <UsersRound
                    size={18}
                    className="
                      absolute left-4 top-1/2
                      -translate-y-1/2 text-[#B09D87]
                    "
                  />

                  <input
                    id="generador-pases"
                    type="text"
                    inputMode="numeric"
                    required
                    value={pases}
                    onChange={(event) => {
                      const valor =
                        event.target.value.replace(/\D/g, "");

                      setPases(valor);
                      setLink("");
                      setMensaje("");
                    }}
                    placeholder="Cantidad de lugares"
                    className={`${inputClass} pl-12`}
                  />
                </div>

                <p className="mt-2 text-xs text-[#766A5F]">
                  Cantidad máxima de personas autorizadas.
                </p>
              </div>

              {/* GENERAR */}

              <button
                type="submit"
                disabled={cargando}
                className="
                  flex w-full items-center
                  justify-center gap-3
                  bg-[#8F7D68] px-6 py-4
                  text-[11px] uppercase
                  tracking-[0.2em] text-white
                  transition-colors
                  hover:bg-[#766A5F]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {cargando ? (
                  "Creando invitación..."
                ) : (
                  <>
                    <Link2 size={17} />
                    Generar invitación
                  </>
                )}
              </button>
            </form>

            {/* ESTADO */}

            {estado && (
              <div
                role="status"
                className={`
                  mt-6 flex items-start gap-3
                  border p-4 text-sm
                  ${
                    tipoEstado === "exito"
                      ? "border-[#8F7D68]/40 bg-[#F5F1E8] text-[#45413F]"
                      : "border-red-200 bg-red-50 text-red-700"
                  }
                `}
              >
                {tipoEstado === "exito" ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}

                <span>{estado}</span>
              </div>
            )}

            {/* ENLACE */}

            {link && (
              <div className="mt-9">
                <h3
                  className="
                    font-serif text-2xl
                    text-[#45413F]
                  "
                >
                  Enlace personalizado
                </h3>

                <div
                  className="
                    mt-4 break-all border
                    border-[#E5CCB0]
                    bg-[#FCFAEF] p-4
                    text-sm leading-relaxed
                    text-[#45413F]
                  "
                >
                  {link}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    copiarTexto(link, "link")
                  }
                  className="
                    mt-3 flex w-full items-center
                    justify-center gap-2 border
                    border-[#8F7D68] px-5 py-3
                    text-xs uppercase
                    tracking-[0.16em] text-[#45413F]
                    transition-colors
                    hover:bg-[#F5F1E8]
                  "
                >
                  <Copy size={16} />
                  {copiado === "link"
                    ? "Enlace copiado"
                    : "Copiar enlace"}
                </button>
              </div>
            )}

            {/* WHATSAPP */}

            {link && (
              <div
                className="
                  mt-9 border-t
                  border-[#E5CCB0] pt-8
                "
              >
                <h3
                  className="
                    font-serif text-2xl
                    text-[#45413F]
                  "
                >
                  Mensaje para WhatsApp
                </h3>

                <p className="mt-3 text-sm text-[#766A5F]">
                  Puedes modificar el mensaje antes de copiarlo.
                </p>

                <textarea
                  value={mensaje}
                  onChange={(event) =>
                    setMensaje(event.target.value)
                  }
                  rows={13}
                  className="
                    mt-4 w-full resize-y border
                    border-[#E5CCB0] bg-white
                    p-4 text-sm leading-6
                    text-[#45413F] outline-none
                    focus:border-[#8F7D68]
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    copiarTexto(mensaje, "mensaje")
                  }
                  className="
                    mt-3 flex w-full items-center
                    justify-center gap-2
                    bg-[#8F7D68] px-5 py-4
                    text-xs uppercase
                    tracking-[0.16em] text-white
                    hover:bg-[#766A5F]
                  "
                >
                  <Send size={16} />
                  {copiado === "mensaje"
                    ? "Mensaje copiado"
                    : "Copiar mensaje para WhatsApp"}
                </button>
              </div>
            )}
          </section>

          {/* PORTADA */}

          <section className="flex flex-col items-center">
            <h2
              className="
                mb-6 font-serif text-3xl
                text-[#45413F]
              "
            >
              Oscar & Stefany
            </h2>

            <div
              className="
                w-full max-w-[430px]
                border border-[#E5CCB0]
                bg-white p-3
                shadow-[0_25px_60px_rgba(69,65,63,0.13)]
              "
            >
              <img
                src="/portada.jpg"
                alt="Portada de Oscar y Stefany"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* VISTA PREVIA */}

            {mensaje && (
              <div className="mt-10 w-full max-w-[430px]">
                <p
                  className="
                    mb-3 text-center text-[10px]
                    uppercase tracking-[0.2em]
                    text-[#766A5F]
                  "
                >
                  Vista previa de WhatsApp
                </p>

                <div
                  className="
                    rounded-2xl bg-[#EFEAE2]
                    p-4 shadow-lg
                  "
                >
                  <div
                    className="
                      ml-auto max-w-[95%]
                      rounded-xl rounded-tr-sm
                      bg-[#D9FDD3] p-4
                    "
                  >
                    <p
                      className="
                        whitespace-pre-wrap
                        break-words text-[13px]
                        leading-relaxed text-[#45413F]
                      "
                    >
                      {mensaje}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
