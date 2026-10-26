import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  Heart,
  HeartHandshake,
  UserRound,
  UsersRound,
  MessageSquareText,
  Send,
  LoaderCircle,
  Ticket,
  AlertCircle,
  LockKeyhole,
  CalendarDays,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN
// ==========================================

const API_URL =
  "https://script.google.com/macros/s/AKfycbzh7OJ8G6G2p9AbDy5dUJp68iW3TfhUKqY8jnGyCq6tF0i8Vgp2_e4px30QafkAWQNzZg/exec";

const FECHA_LIMITE = new Date(
  "2026-12-18T00:00:00-06:00"
);

const TEXTO_FECHA =
  "Favor de confirmar tu asistencia antes del 18 de diciembre de 2026.";

const esperar = (ms) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// ==========================================
// CONSULTAR GOOGLE APPS SCRIPT POR JSONP
// ==========================================

function consultarServidor(accion, token) {
  return new Promise((resolve, reject) => {
    const callback =
      "wedly_" +
      Date.now() +
      "_" +
      Math.random().toString(36).slice(2);

    const script = document.createElement("script");
    let finalizado = false;

    const limpiar = () => {
      delete window[callback];
      script.remove();
      clearTimeout(timeout);
    };

    const terminar = (error, datos) => {
      if (finalizado) return;
      finalizado = true;
      limpiar();

      if (error) reject(error);
      else resolve(datos);
    };

    const timeout = setTimeout(() => {
      terminar(new Error("El servidor no respondió."));
    }, 15000);

    window[callback] = (datos) => {
      terminar(null, datos);
    };

    script.onerror = () => {
      terminar(
        new Error("No se pudo consultar la invitación.")
      );
    };

    script.src =
      `${API_URL}?accion=${encodeURIComponent(accion)}` +
      `&token=${encodeURIComponent(token)}` +
      `&callback=${encodeURIComponent(callback)}`;

    document.body.appendChild(script);
  });
}

// ==========================================
// DECORACIÓN BOTÁNICA
// ==========================================

function RamaBotanica({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 340"
      fill="none"
      className={className}
    >
      <path
        d="M18 335C68 290 91 236 112 175C135 111 155 56 211 10"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M91 232C58 208 38 213 13 231M109 183C76 159 57 162 32 181M134 126C103 101 88 100 66 113M159 76C184 58 207 63 230 81M102 207C144 199 163 221 179 247M126 152C163 141 184 154 197 178"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M13 231Q22 207 51 210Q42 231 13 231ZM32 181Q44 155 75 162Q62 184 32 181ZM66 113Q80 89 108 100Q96 119 66 113ZM230 81Q215 52 185 62Q198 85 230 81ZM179 247Q150 239 151 213Q175 218 179 247ZM197 178Q169 169 170 145Q192 152 197 178Z"
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function Divisor() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-12 bg-[#E5CCB0]/70 sm:w-20" />
      <span className="h-2 w-2 rotate-45 border border-[#E5CCB0]" />
      <span className="h-px w-12 bg-[#E5CCB0]/70 sm:w-20" />
    </div>
  );
}

// ==========================================
// MENSAJE DE CONFIRMACIÓN BLOQUEADA
// ==========================================

function ConfirmacionRegistrada({
  nombre,
  asistencia,
  invitados,
}) {
  const asistira = asistencia === "Sí asistiré";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="py-4 text-center sm:py-8"
    >
      <div
        className="
          mx-auto flex h-20 w-20
          items-center justify-center
          rounded-full border border-[#E5CCB0]
          bg-[#F5F1E8]
        "
      >
        <Check
          size={35}
          strokeWidth={1.2}
          className="text-[#8F7D68]"
        />
      </div>

      <p
        className="
          mt-7 text-[10px] uppercase
          tracking-[0.28em] text-[#8F7D68]
        "
      >
        Respuesta registrada
      </p>

      <h3
        className="
          mt-4 font-serif text-3xl
          text-[#45413F] sm:text-4xl
        "
      >
        ¡Gracias por confirmar!
      </h3>

      <Divisor />

      {nombre && (
        <p
          className="
            mt-7 font-serif text-xl
            italic text-[#45413F]
          "
        >
          {nombre}
        </p>
      )}

      <p
        className="
          mx-auto mt-5 max-w-md
          text-sm leading-8 text-[#766A5F]
          sm:text-base
        "
      >
        {asistira
          ? "Hemos recibido tu confirmación. Nos llena de alegría saber que nos acompañarás en este día tan especial."
          : "Hemos recibido tu respuesta. Gracias por tomarte el tiempo de confirmarnos y por acompañarnos de corazón."}
      </p>

      {asistira && Number(invitados) > 0 && (
        <div
          className="
            mx-auto mt-7 flex max-w-xs
            items-center justify-center gap-3
            border border-[#E5CCB0]
            bg-[#F5F1E8] p-4
          "
        >
          <UsersRound
            size={20}
            className="text-[#8F7D68]"
          />

          <span className="font-serif text-[#45413F]">
            {invitados}{" "}
            {Number(invitados) === 1
              ? "persona confirmada"
              : "personas confirmadas"}
          </span>
        </div>
      )}

      <div
        className="
          mx-auto mt-8 flex max-w-md
          items-center justify-center gap-3
          border-t border-[#E5CCB0]
          pt-7 text-[#766A5F]
        "
      >
        <LockKeyhole size={17} />

        <p className="text-xs leading-6">
          Tu respuesta ha quedado registrada.
          Este enlace ya no permite realizar cambios.
        </p>
      </div>

      <p
        className="
          mt-9 font-serif text-xl
          italic text-[#8F7D68]
        "
      >
        Con cariño, Oscar & Stefany
      </p>
    </motion.div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Confirmacion() {
  const [token] = useState(() => {
    return (
      new URLSearchParams(
        window.location.search
      ).get("id") || ""
    );
  });

  const [nombreInvitado, setNombreInvitado] =
    useState("");

  const [mensajeInvitado, setMensajeInvitado] =
    useState("");

  const [asistencia, setAsistencia] =
    useState("");

  const [invitados, setInvitados] =
    useState("");

  const [pasesPermitidos, setPasesPermitidos] =
    useState(0);

  const [cargandoInvitacion, setCargandoInvitacion] =
    useState(true);

  const [invitacionValida, setInvitacionValida] =
    useState(false);

  const [bloqueado, setBloqueado] =
    useState(false);

  const [plazoTerminado, setPlazoTerminado] =
    useState(false);

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // ========================================
  // CARGAR INVITACIÓN Y ESTADO
  // ========================================

  useEffect(() => {
    let activo = true;

    const cargar = async () => {
      if (!/^[a-f0-9]{48}$/.test(token)) {
        if (activo) {
          setError(
            "Este enlace no contiene una invitación válida."
          );
          setCargandoInvitacion(false);
        }
        return;
      }

      try {
        const resultado = await consultarServidor(
          "consultar",
          token
        );

        if (!activo) return;

        if (!resultado.ok) {
          throw new Error(
            resultado.mensaje ||
              "No se encontró esta invitación."
          );
        }

        const pases = Number(resultado.pases);

        if (
          !Number.isSafeInteger(pases) ||
          pases < 1 ||
          !resultado.nombre
        ) {
          throw new Error(
            "Los datos de la invitación no son válidos."
          );
        }

        setNombreInvitado(resultado.nombre);
        setPasesPermitidos(pases);

        // Antes de habilitar el formulario
        // consultamos si ya existe una respuesta.
        const estado = await consultarServidor(
          "estado",
          token
        );

        if (!activo) return;

        if (!estado.ok) {
          throw new Error(
            estado.mensaje ||
              "No se pudo consultar el estado de la invitación."
          );
        }

        if (estado.registrado) {
          setBloqueado(true);
          setAsistencia(estado.asistencia || "");
          setMensajeInvitado(estado.mensaje || "");

          const cantidad = Number(estado.invitados);

          setInvitados(
            Number.isSafeInteger(cantidad) &&
              cantidad > 0
              ? String(cantidad)
              : ""
          );
        } else {
          setBloqueado(false);
          setPlazoTerminado(
            Boolean(estado.cerrado) ||
              Date.now() >= FECHA_LIMITE.getTime()
          );
        }

        setInvitacionValida(true);
        setError("");
      } catch (err) {
        if (activo) {
          setError(
            err.message ||
              "No se pudo cargar la invitación."
          );
          setInvitacionValida(false);
        }
      } finally {
        if (activo) {
          setCargandoInvitacion(false);
        }
      }
    };

    cargar();

    return () => {
      activo = false;
    };
  }, [token]);

  // ========================================
  // SELECCIONAR ASISTENCIA
  // ========================================

  const seleccionarAsistencia = (opcion) => {
    if (bloqueado || loading || plazoTerminado) {
      return;
    }

    setAsistencia(opcion);
    setError("");

    if (opcion === "No podré asistir") {
      setInvitados("");
    }
  };

  // ========================================
  // ENVIAR CONFIRMACIÓN
  // ========================================

  const enviarConfirmacion = async (event) => {
    event.preventDefault();

    if (
      loading ||
      bloqueado ||
      plazoTerminado ||
      !invitacionValida
    ) {
      return;
    }

    if (Date.now() >= FECHA_LIMITE.getTime()) {
      setPlazoTerminado(true);
      return;
    }

    if (!asistencia) {
      setError(
        "Selecciona una opción de asistencia."
      );
      return;
    }

    const cantidad = Number(invitados);

    if (asistencia === "Sí asistiré") {
      if (
        invitados === "" ||
        !Number.isSafeInteger(cantidad) ||
        cantidad < 1 ||
        cantidad > pasesPermitidos
      ) {
        setError(
          `Selecciona una cantidad entre 1 y ${pasesPermitidos}.`
        );
        return;
      }
    }

    const cantidadFinal =
      asistencia === "Sí asistiré"
        ? cantidad
        : 0;

    const mensajeFinal =
      mensajeInvitado.trim();

    setError("");
    setLoading(true);

    try {
      // Comprobación adicional para evitar
      // un segundo envío desde otra pestaña.
      const estadoPrevio = await consultarServidor(
        "estado",
        token
      );

      if (!estadoPrevio.ok) {
        throw new Error(
          estadoPrevio.mensaje ||
            "No se pudo verificar tu invitación."
        );
      }

      if (estadoPrevio.registrado) {
        setBloqueado(true);
        setAsistencia(
          estadoPrevio.asistencia || ""
        );
        setInvitados(
          Number(estadoPrevio.invitados) > 0
            ? String(estadoPrevio.invitados)
            : ""
        );
        setMensajeInvitado(
          estadoPrevio.mensaje || ""
        );
        return;
      }

      if (
        estadoPrevio.cerrado ||
        Date.now() >= FECHA_LIMITE.getTime()
      ) {
        setPlazoTerminado(true);
        return;
      }

      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type":
            "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          accion: "confirmar",
          token,
          nombre: nombreInvitado.trim(),
          asistencia,
          invitados: cantidadFinal,
          mensaje: mensajeFinal,
        }),
      });

      // En no-cors no se puede leer
      // directamente la respuesta del POST.
      // Consultamos Google Sheets mediante
      // el endpoint de estado.

      let registroVerificado = null;

      for (let intento = 0; intento < 6; intento++) {
        await esperar(1000);

        const resultado = await consultarServidor(
          "estado",
          token
        );

        if (!resultado.ok) {
          throw new Error(
            resultado.mensaje ||
              "No se pudo verificar la confirmación."
          );
        }

        if (resultado.registrado) {
          registroVerificado = resultado;
          break;
        }
      }

      if (!registroVerificado) {
        throw new Error(
          "No se pudo verificar el registro en Google Sheets. " +
          "Espera un momento y vuelve a abrir tu enlace " +
          "antes de intentar nuevamente."
        );
      }

      // Se muestra el resultado realmente
      // guardado, incluso si otra pestaña
      // confirmó primero.
      setAsistencia(
        registroVerificado.asistencia || ""
      );

      setInvitados(
        Number(registroVerificado.invitados) > 0
          ? String(registroVerificado.invitados)
          : ""
      );

      setMensajeInvitado(
        registroVerificado.mensaje || ""
      );

      setBloqueado(true);
      setError("");
    } catch (err) {
      console.error(err);

      // Si falla la verificación, consultamos
      // una última vez antes de permitir
      // cualquier nuevo intento.
      try {
        const estadoFinal = await consultarServidor(
          "estado",
          token
        );

        if (estadoFinal.ok && estadoFinal.registrado) {
          setAsistencia(
            estadoFinal.asistencia || ""
          );

          setInvitados(
            Number(estadoFinal.invitados) > 0
              ? String(estadoFinal.invitados)
              : ""
          );

          setMensajeInvitado(
            estadoFinal.mensaje || ""
          );

          setBloqueado(true);
          setError("");
          return;
        }

        if (estadoFinal.ok && estadoFinal.cerrado) {
          setPlazoTerminado(true);
          return;
        }
      } catch (consultaError) {
        console.error(consultaError);
      }

      setError(
        err.message ||
          "No se pudo verificar tu confirmación."
      );
    } finally {
      setLoading(false);
    }
  };

  // ========================================
  // ESTILOS
  // ========================================

  const labelClass = `
    text-[10px] uppercase
    tracking-[0.23em] text-[#766A5F]
  `;

  const inputClass = `
    w-full min-w-0 border
    border-[#B09D87]/45 bg-white
    py-4 pl-12 pr-4
    font-serif text-base text-[#45413F]
    outline-none transition-colors
    focus:border-[#8F7D68]
  `;

  // ========================================
  // RENDER
  // ========================================

  return (
    <section
      id="confirmacion"
      className="
        relative isolate w-full overflow-hidden
        bg-[#8F7D68] px-5 py-20
        sm:px-8 sm:py-24 md:py-32
      "
    >
      <RamaBotanica
        className="
          pointer-events-none absolute
          -right-14 -top-20 w-[170px]
          rotate-180 text-[#E5CCB0]/30
          sm:w-[230px] md:w-[290px]
        "
      />

      <RamaBotanica
        className="
          pointer-events-none absolute
          -bottom-20 -left-14 w-[170px]
          text-[#E5CCB0]/30
          sm:w-[230px] md:w-[290px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ENCABEZADO */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            mx-auto flex max-w-2xl
            flex-col items-center text-center
          "
        >
          <div
            className="
              flex h-16 w-16 items-center
              justify-center rounded-full
              border border-[#E5CCB0]/65
            "
          >
            <HeartHandshake
              size={28}
              strokeWidth={1.1}
              className="text-[#E5CCB0]"
            />
          </div>

          <p
            className="
              mt-7 text-[10px] uppercase
              tracking-[0.35em] text-[#E5CCB0]
              sm:text-xs
            "
          >
            Nos encantará contar contigo
          </p>

          <h2
            className="
              mt-5 font-serif
              text-[clamp(2.2rem,6vw,4rem)]
              leading-tight text-[#FCFAEF]
            "
          >
            Confirma tu asistencia
          </h2>

          <div className="mt-7">
            <Divisor />
          </div>

          <p
            className="
              mx-auto mt-7 max-w-xl
              font-serif text-lg italic
              leading-relaxed text-[#FCFAEF]/90
              sm:text-xl
            "
          >
            Ayúdanos a preparar cada detalle
            confirmando tu asistencia a este día
            tan especial.
          </p>
                     {/* FECHA LÍMITE */}

                  <div
                    className="
                      mt-8 flex items-center gap-3
                      border border-[#E5CCB0]
                      bg-[#F5F1E8] px-4 py-4
                    "
                  >
                    <CalendarDays
                      size={19}
                      className="
                        shrink-0 text-[#8F7D68]
                      "
                    />

                    <p
                      className="
                        text-sm leading-6
                        text-[#766A5F]
                      "
                    >
                      {TEXTO_FECHA}
                    </p>
                  </div>

         
        </motion.div>

        {/* TARJETA */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            relative mx-auto mt-14
            w-full max-w-3xl
            border border-[#E5CCB0]/65
            bg-[#FCFAEF] px-5 py-10
            sm:px-10 sm:py-12 md:px-14
          "
        >
          <div
            className="
              pointer-events-none absolute inset-2
              border border-[#B09D87]/25
              sm:inset-3
            "
          />

          <div className="relative z-10">
            {/* CARGANDO */}

            {cargandoInvitacion && (
              <div
                className="
                  flex items-center justify-center
                  gap-3 py-10 text-[#766A5F]
                "
              >
                <LoaderCircle
                  size={20}
                  className="animate-spin"
                />
                Consultando invitación...
              </div>
            )}

            {/* INVITACIÓN INVÁLIDA */}

            {!cargandoInvitacion &&
              !invitacionValida && (
                <div
                  className="
                    flex items-start gap-3
                    border border-red-200
                    bg-red-50 p-5
                    text-sm text-red-700
                  "
                >
                  <AlertCircle
                    size={20}
                    className="shrink-0"
                  />

                  <p>
                    {error ||
                      "Esta invitación no es válida."}
                  </p>
                </div>
              )}

            {/* CONFIRMACIÓN YA REGISTRADA */}

            {!cargandoInvitacion &&
              invitacionValida &&
              bloqueado && (
                <ConfirmacionRegistrada
                  nombre={nombreInvitado}
                  asistencia={asistencia}
                  invitados={invitados}
                />
              )}

            {/* FECHA LÍMITE TERMINADA */}

            {!cargandoInvitacion &&
              invitacionValida &&
              !bloqueado &&
              plazoTerminado && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8 text-center"
                >
                  <div
                    className="
                      mx-auto flex h-20 w-20
                      items-center justify-center
                      rounded-full border
                      border-[#E5CCB0]
                      bg-[#F5F1E8]
                    "
                  >
                    <LockKeyhole
                      size={30}
                      className="text-[#8F7D68]"
                    />
                  </div>

                  <h3
                    className="
                      mt-7 font-serif text-3xl
                      text-[#45413F]
                    "
                  >
                    Confirmaciones cerradas
                  </h3>

                  <p
                    className="
                      mx-auto mt-5 max-w-md
                      text-sm leading-8
                      text-[#766A5F]
                    "
                  >
                    El plazo para confirmar
                    asistencia ha finalizado.
                    Gracias por tu comprensión.
                  </p>

                  <p
                    className="
                      mt-7 font-serif text-xl
                      italic text-[#8F7D68]
                    "
                  >
                    Oscar & Stefany
                  </p>
                </motion.div>
              )}

            {/* FORMULARIO DISPONIBLE */}

            {!cargandoInvitacion &&
              invitacionValida &&
              !bloqueado &&
              !plazoTerminado && (
                <form onSubmit={enviarConfirmacion}>
                  {/* TÍTULO */}

                  <div className="mb-10 text-center">
                    <Heart
                      size={20}
                      strokeWidth={1.2}
                      className="mx-auto text-[#B09D87]"
                    />

                    <p
                      className="
                        mt-4 font-serif text-2xl
                        italic text-[#45413F]
                        sm:text-3xl
                      "
                    >
                      ¿Nos acompañarás?
                    </p>

                    <p
                      className="
                        mt-3 text-sm leading-relaxed
                        text-[#766A5F]
                      "
                    >
                      Completa los siguientes datos
                      para registrar tu respuesta.
                    </p>
          
                    
                  </div>

                  {/* NOMBRE */}

                  <div>
                    <label
                      htmlFor="nombre-invitado"
                      className={labelClass}
                    >
                      Nombre del invitado
                    </label>

                    <div className="relative mt-3">
                      <UserRound
                        size={18}
                        className="
                          absolute left-4 top-1/2
                          -translate-y-1/2
                          text-[#B09D87]
                        "
                      />

                      <input
                        id="nombre-invitado"
                        type="text"
                        value={nombreInvitado}
                        readOnly
                        className={`
                          ${inputClass}
                          cursor-default bg-[#F5F1E8]
                        `}
                      />
                    </div>
                  </div>

                  {/* PASES RESERVADOS */}

                  <div
                    className="
                      mt-7 flex items-center gap-4
                      border border-[#E5CCB0]
                      bg-[#F5F1E8] p-4
                    "
                  >
                    <Ticket
                      size={25}
                      strokeWidth={1.3}
                      className="text-[#8F7D68]"
                    />

                    <div>
                      <p
                        className="
                          text-[10px] uppercase
                          tracking-[0.2em]
                          text-[#766A5F]
                        "
                      >
                        Lugares reservados
                      </p>

                      <p
                        className="
                          mt-1 font-serif text-xl
                          text-[#45413F]
                        "
                      >
                        {pasesPermitidos}{" "}
                        {pasesPermitidos === 1
                          ? "lugar"
                          : "lugares"}
                      </p>
                    </div>
                  </div>

                  {/* ASISTENCIA */}

                  <fieldset className="mt-9">
                    <legend className={labelClass}>
                      ¿Podrás acompañarnos?
                    </legend>

                    <div
                      className="
                        mt-4 grid grid-cols-1
                        gap-3 sm:grid-cols-2
                      "
                    >
                      {[
                        {
                          valor: "Sí asistiré",
                          subtitulo:
                            "Será un gusto acompañarlos",
                          Icono: Check,
                        },
                        {
                          valor: "No podré asistir",
                          subtitulo:
                            "Estaré presente de corazón",
                          Icono: X,
                        },
                      ].map(
                        ({
                          valor,
                          subtitulo,
                          Icono,
                        }) => (
                          <button
                            key={valor}
                            type="button"
                            disabled={loading}
                            onClick={() =>
                              seleccionarAsistencia(valor)
                            }
                            aria-pressed={
                              asistencia === valor
                            }
                            className={`
                              flex min-h-[76px]
                              items-center gap-4
                              border px-4 py-4
                              text-left transition-colors
                              disabled:opacity-60
                              ${
                                asistencia === valor
                                  ? "border-[#8F7D68] bg-[#8F7D68] text-white"
                                  : "border-[#B09D87]/45 bg-white text-[#45413F]"
                              }
                            `}
                          >
                            <span
                              className="
                                flex h-10 w-10 shrink-0
                                items-center justify-center
                                rounded-full border
                                border-current/50
                              "
                            >
                              <Icono size={18} />
                            </span>

                            <span>
                              <span
                                className="
                                  block font-serif
                                  text-lg
                                "
                              >
                                {valor}
                              </span>

                              <span
                                className="
                                  mt-1 block text-xs
                                  opacity-80
                                "
                              >
                                {subtitulo}
                              </span>
                            </span>
                          </button>
                        )
                      )}
                    </div>
                  </fieldset>

                  {/* SELECTOR DE PASES */}

                  <AnimatePresence>
                    {asistencia === "Sí asistiré" && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                          y: -10,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          y: -10,
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-9">
                          <label
                            htmlFor="numero-invitados"
                            className={labelClass}
                          >
                            ¿Cuántas personas asistirán?
                          </label>

                          <div className="relative mt-3">
                            <UsersRound
                              size={18}
                              className="
                                absolute left-4 top-1/2
                                -translate-y-1/2
                                text-[#B09D87]
                              "
                            />

                            <select
                              id="numero-invitados"
                              required
                              disabled={loading}
                              value={invitados}
                              onChange={(event) => {
                                setInvitados(
                                  event.target.value
                                );
                                setError("");
                              }}
                              className={`
                                ${inputClass}
                                cursor-pointer
                              `}
                            >
                              <option value="">
                                Selecciona una cantidad
                              </option>

                              {Array.from(
                                {
                                  length:
                                    pasesPermitidos,
                                },
                                (_, indice) =>
                                  indice + 1
                              ).map((cantidad) => (
                                <option
                                  key={cantidad}
                                  value={String(
                                    cantidad
                                  )}
                                >
                                  {cantidad}{" "}
                                  {cantidad === 1
                                    ? "persona"
                                    : "personas"}
                                </option>
                              ))}
                            </select>
                          </div>

                          <p
                            className="
                              mt-3 text-xs leading-relaxed
                              text-[#766A5F]
                            "
                          >
                            Puedes confirmar hasta{" "}
                            {pasesPermitidos}{" "}
                            {pasesPermitidos === 1
                              ? "persona"
                              : "personas"}
                            , incluyéndote.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* MENSAJE */}

                  <div className="mt-9">
                    <label
                      htmlFor="mensaje-invitado"
                      className={labelClass}
                    >
                      Mensaje para los novios
                    </label>

                    <div className="relative mt-3">
                      <MessageSquareText
                        size={18}
                        className="
                          absolute left-4 top-5
                          text-[#B09D87]
                        "
                      />

                      <textarea
                        id="mensaje-invitado"
                        value={mensajeInvitado}
                        maxLength={300}
                        disabled={loading}
                        onChange={(event) => {
                          setMensajeInvitado(
                            event.target.value
                          );
                          setError("");
                        }}
                        rows={4}
                        placeholder="Escribe un mensaje especial (opcional)"
                        className="
                          w-full resize-none border
                          border-[#B09D87]/45
                          bg-white py-4 pl-12 pr-4
                          text-sm leading-7
                          text-[#45413F] outline-none
                          placeholder:text-[#B09D87]
                          focus:border-[#8F7D68]
                          disabled:opacity-60
                        "
                      />
                    </div>

                    <p
                      className="
                        mt-2 text-right text-xs
                        text-[#B09D87]
                      "
                    >
                      {mensajeInvitado.length}/300
                    </p>
                  </div>


                  {/* AVISO DE UNA SOLA RESPUESTA */}

                  <p
                    className="
                      mx-auto mt-6 max-w-md
                      text-center text-xs
                      leading-6 text-[#766A5F]
                    "
                  >
                    Tu confirmación podrá enviarse
                    una sola vez. Después de registrarla,
                    no será posible modificarla.
                  </p>

                  {/* ERRORES */}

                  <div
                    aria-live="polite"
                    className="mt-6 min-h-[30px]"
                  >
                    <AnimatePresence mode="wait">
                      {error && (
                        <motion.p
                          key="error"
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -8,
                          }}
                          className="
                            flex items-center
                            justify-center gap-2
                            text-center text-sm
                            text-red-700
                          "
                        >
                          <X
                            size={16}
                            className="shrink-0"
                          />
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* BOTÓN */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      mx-auto mt-5 flex
                      min-h-[54px] w-full
                      max-w-sm items-center
                      justify-center gap-3
                      border border-[#8F7D68]
                      bg-[#8F7D68] px-6 py-4
                      text-[10px] uppercase
                      tracking-[0.2em] text-white
                      transition-colors
                      hover:bg-[#766A5F]
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {loading ? (
                      <>
                        <LoaderCircle
                          size={17}
                          className="animate-spin"
                        />
                        Verificando...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar confirmación
                      </>
                    )}
                  </button>

                  <p
                    className="
                      mx-auto mt-7 max-w-sm
                      text-center font-serif
                      text-sm italic leading-relaxed
                      text-[#766A5F]
                    "
                  >
                    Gracias por ayudarnos a preparar
                    este día con tanto cariño.
                  </p>
                </form>
              )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}