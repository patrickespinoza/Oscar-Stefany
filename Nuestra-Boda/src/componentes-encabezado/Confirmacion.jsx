
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  Heart,
  HeartHandshake,
  UserRound,
  UsersRound,
  ChevronDown,
  MessageSquareText,
  Send,
  LoaderCircle,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN - WEDLY PLUS
// ==========================================

// Google Apps Script conectado a la hoja de respuestas
const API_URL =
  "https://script.google.com/macros/s/AKfycbxklU9PTlqxkcu9pBUfWYhByQZ_7kJWuFENeeQhlEW-C6eh2cVbTK3z2AbMJiWVL1ME/exec";

const COLORES = {
  cafe: "#8F7D68",
  champagne: "#E5CCB0",
  marfil: "#FCFAEF",
  texto: "#45413F",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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

// ==========================================
// DIVISOR
// ==========================================

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
// COMPONENTE PRINCIPAL
// ==========================================

export default function Confirmacion() {
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  // ========================================
  // SELECCIONAR ASISTENCIA
  // ========================================

  const seleccionarAsistencia = (opcion) => {
    setAsistencia(opcion);
    setError("");
    setEnviado(false);
  };

  // ========================================
  // ENVIAR A EXCEL / GOOGLE SHEETS
  // ========================================

  const enviarConfirmacion = async (event) => {
    event.preventDefault();

    if (loading) return;

    if (!nombreInvitado.trim() || !asistencia) {
      setError(
        "Escribe tu nombre y selecciona una opción de asistencia."
      );
      return;
    }

    if (
      asistencia === "Sí asistiré" &&
      (invitados < 1 || invitados > 6)
    ) {
      setError("Selecciona un número válido de invitados.");
      return;
    }

    setError("");
    setEnviado(false);
    setLoading(true);

    const data = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados: asistencia === "Sí asistiré" ? invitados : 0,
      mensaje: mensajeInvitado.trim(),
    };

    try {
      // Se conserva el formato del Apps Script original.
      // no-cors permite enviar, pero no leer la respuesta
      // del servidor para confirmar el guardado.
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(data),
      });

      setEnviado(true);
      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados(1);
    } catch (err) {
      console.error("Error al enviar confirmación:", err);
      setError(
        "No fue posible enviar tu confirmación. Inténtalo nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  // ========================================
  // RENDER
  // ========================================

  return (
    <section
      id="confirmacion"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#8F7D68]
        px-5
        py-20
        sm:px-8
        sm:py-24
        md:py-32
      "
    >
      {/* DECORACIONES BOTÁNICAS */}

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -right-14
          -top-20
          w-[170px]
          rotate-180
          text-[#E5CCB0]/30
          sm:w-[230px]
          md:w-[290px]
        "
      />

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-14
          w-[170px]
          text-[#E5CCB0]/30
          sm:w-[230px]
          md:w-[290px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ==================================
            ENCABEZADO
        ================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              border
              border-[#E5CCB0]/65
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
              mt-7
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#E5CCB0]
              sm:text-xs
            "
          >
            Nos encantará contar contigo
          </p>

          <h2
            className="
              mt-5
              font-serif
              text-[clamp(2.2rem,6vw,4rem)]
              font-normal
              leading-tight
              text-[#FCFAEF]
            "
          >
            Confirma tu asistencia
          </h2>

          <div className="mt-7">
            <Divisor />
          </div>

          <p
            className="
              mx-auto
              mt-7
              max-w-xl
              font-serif
              text-lg
              italic
              leading-relaxed
              text-[#FCFAEF]/90
              sm:text-xl
            "
          >
            Ayúdanos a preparar cada detalle confirmando tu
            asistencia a este día tan especial.
          </p>
        </motion.div>

        {/* ==================================
            FORMULARIO
        ================================== */}

        <motion.form
          onSubmit={enviarConfirmacion}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            mt-14
            w-full
            max-w-3xl
            border
            border-[#E5CCB0]/65
            bg-[#FCFAEF]
            px-5
            py-10
            sm:px-10
            sm:py-12
            md:px-14
          "
        >
          {/* MARCO INTERIOR */}

          <div
            className="
              pointer-events-none
              absolute
              inset-2
              border
              border-[#B09D87]/25
              sm:inset-3
            "
          />

          <div className="relative z-10">

            {/* ENCABEZADO FORMULARIO */}

            <div className="mb-10 text-center">
              <Heart
                size={20}
                strokeWidth={1.2}
                className="mx-auto text-[#B09D87]"
              />

              <p
                className="
                  mt-4
                  font-serif
                  text-2xl
                  italic
                  text-[#45413F]
                  sm:text-3xl
                "
              >
                ¿Nos acompañarás?
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-[#766A5F]
                "
              >
                Completa los siguientes datos para registrar
                tu respuesta.
              </p>
            </div>

            {/* ==================================
                NOMBRE
            ================================== */}

            <div>
              <label
                htmlFor="nombre-invitado"
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.23em]
                  text-[#766A5F]
                "
              >
                Nombre y apellido
              </label>

              <div className="relative mt-3">
                <UserRound
                  size={18}
                  strokeWidth={1.3}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#B09D87]
                  "
                />

                <input
                  id="nombre-invitado"
                  type="text"
                  required
                  maxLength={60}
                  placeholder="Escribe tu nombre completo"
                  value={nombreInvitado}
                  onChange={(event) => {
                    setNombreInvitado(event.target.value);
                    setError("");
                  }}
                  className="
                    w-full
                    min-w-0
                    border
                    border-[#B09D87]/45
                    bg-white
                    py-4
                    pl-12
                    pr-4
                    font-serif
                    text-base
                    text-[#45413F]
                    outline-none
                    transition-colors
                    placeholder:text-[#B09D87]
                    focus:border-[#8F7D68]
                    sm:text-lg
                  "
                />
              </div>
            </div>

            {/* ==================================
                ASISTENCIA
            ================================== */}

            <fieldset className="mt-9">
              <legend
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.23em]
                  text-[#766A5F]
                "
              >
                ¿Podrás acompañarnos?
              </legend>

              <div
                className="
                  mt-4
                  grid
                  grid-cols-1
                  gap-3
                  sm:grid-cols-2
                "
              >
                {/* SÍ ASISTIRÉ */}

                <button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("Sí asistiré")
                  }
                  aria-pressed={asistencia === "Sí asistiré"}
                  className={`
                    flex
                    min-h-[76px]
                    items-center
                    gap-4
                    border
                    px-4
                    py-4
                    text-left
                    transition-colors
                    duration-300
                    ${
                      asistencia === "Sí asistiré"
                        ? "border-[#8F7D68] bg-[#8F7D68] text-white"
                        : "border-[#B09D87]/45 bg-white text-[#45413F] hover:border-[#8F7D68]"
                    }
                  `}
                >
                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      ${
                        asistencia === "Sí asistiré"
                          ? "border-white/60"
                          : "border-[#B09D87]/60"
                      }
                    `}
                  >
                    <Check size={18} strokeWidth={1.5} />
                  </span>

                  <span>
                    <span className="block font-serif text-lg">
                      Sí asistiré
                    </span>

                    <span
                      className={`
                        mt-1
                        block
                        text-xs
                        ${
                          asistencia === "Sí asistiré"
                            ? "text-white/80"
                            : "text-[#766A5F]"
                        }
                      `}
                    >
                      Será un gusto acompañarlos
                    </span>
                  </span>
                </button>

                {/* NO ASISTIRÉ */}

                <button
                  type="button"
                  onClick={() =>
                    seleccionarAsistencia("No podré asistir")
                  }
                  aria-pressed={asistencia === "No podré asistir"}
                  className={`
                    flex
                    min-h-[76px]
                    items-center
                    gap-4
                    border
                    px-4
                    py-4
                    text-left
                    transition-colors
                    duration-300
                    ${
                      asistencia === "No podré asistir"
                        ? "border-[#8F7D68] bg-[#8F7D68] text-white"
                        : "border-[#B09D87]/45 bg-white text-[#45413F] hover:border-[#8F7D68]"
                    }
                  `}
                >
                  <span
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      ${
                        asistencia === "No podré asistir"
                          ? "border-white/60"
                          : "border-[#B09D87]/60"
                      }
                    `}
                  >
                    <X size={18} strokeWidth={1.5} />
                  </span>

                  <span>
                    <span className="block font-serif text-lg">
                      No podré asistir
                    </span>

                    <span
                      className={`
                        mt-1
                        block
                        text-xs
                        ${
                          asistencia === "No podré asistir"
                            ? "text-white/80"
                            : "text-[#766A5F]"
                        }
                      `}
                    >
                      Estaré presente de corazón
                    </span>
                  </span>
                </button>
              </div>
            </fieldset>

            {/* ==================================
                NÚMERO DE INVITADOS
            ================================== */}

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
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="pt-9">
                    <label
                      htmlFor="numero-invitados"
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.23em]
                        text-[#766A5F]
                      "
                    >
                      Número de invitados
                    </label>

                    <div className="relative mt-3">
                      <UsersRound
                        size={18}
                        strokeWidth={1.3}
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          -translate-y-1/2
                          text-[#B09D87]
                        "
                      />

                      <select
                        id="numero-invitados"
                        value={invitados}
                        onChange={(event) =>
                          setInvitados(
                            Number(event.target.value)
                          )
                        }
                        className="
                          w-full
                          appearance-none
                          border
                          border-[#B09D87]/45
                          bg-white
                          py-4
                          pl-12
                          pr-12
                          font-serif
                          text-lg
                          text-[#45413F]
                          outline-none
                          focus:border-[#8F7D68]
                        "
                      >
                        {[1, 2, 3, 4, 5, 6].map(
                          (cantidad) => (
                            <option
                              key={cantidad}
                              value={cantidad}
                            >
                              {cantidad}{" "}
                              {cantidad === 1
                                ? "persona"
                                : "personas"}
                            </option>
                          )
                        )}
                      </select>

                      <ChevronDown
                        size={18}
                        strokeWidth={1.3}
                        className="
                          pointer-events-none
                          absolute
                          right-4
                          top-1/2
                          -translate-y-1/2
                          text-[#766A5F]
                        "
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ==================================
                MENSAJE
            ================================== */}

            <div className="mt-9">
              <label
                htmlFor="mensaje-invitado"
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.23em]
                  text-[#766A5F]
                "
              >
                Mensaje para los novios
              </label>

              <div className="relative mt-3">
                <MessageSquareText
                  size={18}
                  strokeWidth={1.3}
                  className="
                    absolute
                    left-4
                    top-5
                    text-[#B09D87]
                  "
                />

                <textarea
                  id="mensaje-invitado"
                  placeholder="Escribe un mensaje especial (opcional)"
                  value={mensajeInvitado}
                  maxLength={300}
                  onChange={(event) =>
                    setMensajeInvitado(event.target.value)
                  }
                  rows={4}
                  className="
                    w-full
                    resize-none
                    border
                    border-[#B09D87]/45
                    bg-white
                    py-4
                    pl-12
                    pr-4
                    text-sm
                    leading-7
                    text-[#45413F]
                    outline-none
                    transition-colors
                    placeholder:text-[#B09D87]
                    focus:border-[#8F7D68]
                  "
                />
              </div>

              <p className="mt-2 text-right text-xs text-[#B09D87]">
                {mensajeInvitado.length}/300
              </p>
            </div>

            {/* ==================================
                MENSAJES
            ================================== */}

            <div
              aria-live="polite"
              className="mt-6 min-h-[30px]"
            >
              <AnimatePresence mode="wait">
                {error && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-center
                      text-sm
                      text-red-700
                    "
                  >
                    <X size={16} />
                    {error}
                  </motion.p>
                )}

                {enviado && (
                  <motion.p
                    key="enviado"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      text-center
                      text-sm
                      text-[#766A5F]
                    "
                  >
                    <Check size={16} />
                    Solicitud enviada. Gracias por responder.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ==================================
                BOTÓN ENVIAR
            ================================== */}

            <button
              type="submit"
              disabled={loading}
              className={`
                mx-auto
                mt-5
                flex
                min-h-[54px]
                w-full
                max-w-sm
                items-center
                justify-center
                gap-3
                border
                border-[#8F7D68]
                px-6
                py-4
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-white
                transition-colors
                duration-300
                ${
                  loading
                    ? "cursor-not-allowed bg-[#B09D87]"
                    : "bg-[#8F7D68] hover:bg-[#766A5F]"
                }
              `}
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={17}
                    className="animate-spin"
                  />
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={16} strokeWidth={1.4} />
                  Enviar confirmación
                </>
              )}
            </button>

            <p
              className="
                mx-auto
                mt-7
                max-w-sm
                text-center
                font-serif
                text-sm
                italic
                leading-relaxed
                text-[#766A5F]
              "
            >
              Gracias por ayudarnos a preparar este día
              con tanto cariño.
            </p>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
