
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Images,
  ArrowUpRight,
  X,
  Copy,
  Check,
  Heart,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const CONFIG = {
  imagen: "/albun.png",
  qr: "/qr.png",

  aplicacion: "Wedshoots",

  codigoAlbum: "MXat19tb26",

  enlaceApp:
    "https://apps.apple.com/mx/app/wedshoots/id660256196",

  titulo: "Álbum compartido",

  frase:
    "Cada fotografía será parte de los recuerdos que guardaremos de este día.",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
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
        d="
          M18 335
          C68 290 91 236 112 175
          C135 111 155 56 211 10
        "
        stroke="#B09D87"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      <path
        d="
          M91 232 C58 208 38 213 13 231
          M109 183 C76 159 57 162 32 181
          M134 126 C103 101 88 100 66 113
          M159 76 C184 58 207 63 230 81
          M102 207 C144 199 163 221 179 247
          M126 152 C163 141 184 154 197 178
        "
        stroke="#B09D87"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      <g
        fill="#E5CCB0"
        stroke="#B09D87"
        strokeWidth="0.8"
      >
        <path d="M13 231 Q22 207 51 210 Q42 231 13 231Z" />
        <path d="M32 181 Q44 155 75 162 Q62 184 32 181Z" />
        <path d="M66 113 Q80 89 108 100 Q96 119 66 113Z" />
        <path d="M230 81 Q215 52 185 62 Q198 85 230 81Z" />
        <path d="M179 247 Q150 239 151 213 Q175 218 179 247Z" />
        <path d="M197 178 Q169 169 170 145 Q192 152 197 178Z" />
        <path d="M211 10 Q182 17 180 44 Q201 37 211 10Z" />
      </g>
    </svg>
  );
}

// ==========================================
// FLOR DECORATIVA
// ==========================================

function FlorDecorativa() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 65"
      fill="none"
      className="h-12 w-14 text-[#B09D87]"
    >
      <path
        d="M40 60 C39 42 40 29 40 12"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="
          M40 42 C29 30 20 32 14 39
          M40 34 C51 23 61 25 67 31
        "
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M14 39 Q17 27 31 31 Q27 41 14 39Z"
        fill="#E5CCB0"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M67 31 Q60 18 48 26 Q53 34 67 31Z"
        fill="#E5CCB0"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="
          M40 12
          C27 3 24 19 40 26
          C56 19 53 3 40 12Z
        "
        fill="#FCFAEF"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

// ==========================================
// DIVISOR
// ==========================================

function DivisorElegante() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-[#B09D87] sm:w-14" />

      <span
        className="
          h-[5px]
          w-[5px]
          rotate-45
          bg-[#B09D87]
        "
      />

      <span className="h-px w-10 bg-[#B09D87] sm:w-14" />
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function AlbumCompartido() {
  const [open, setOpen] = useState(false);
  const [copiado, setCopiado] = useState(false);

  // ========================================
  // BLOQUEAR SCROLL Y CERRAR CON ESC
  // ========================================

  useEffect(() => {
    if (!open) return;

    const scrollAnterior = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const cerrarConEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", cerrarConEscape);

    return () => {
      document.body.style.overflow = scrollAnterior;
      window.removeEventListener("keydown", cerrarConEscape);
    };
  }, [open]);

  // ========================================
  // COPIAR CÓDIGO
  // ========================================

  const copiarCodigo = async () => {
    try {
      await navigator.clipboard.writeText(
        CONFIG.codigoAlbum
      );

      setCopiado(true);
    } catch (error) {
      console.error(
        "No se pudo copiar el código:",
        error
      );
    }
  };

  const cerrarModal = () => {
    setOpen(false);
    setCopiado(false);
  };

  return (
    <>
      {/* ======================================
          SECCIÓN ÁLBUM
      ====================================== */}

      <section
        id="album"
        className="
          relative
          isolate
          w-full
          overflow-hidden
          bg-[#FCFAEF]
          px-5
          py-20
          sm:px-8
          sm:py-24
          md:py-28
        "
      >
        {/* DECORACIONES BOTÁNICAS */}

        <RamaBotanica
          className="
            pointer-events-none
            absolute
            -right-14
            -top-20
            z-0
            w-[150px]
            rotate-180
            opacity-40
            sm:w-[210px]
            md:w-[260px]
          "
        />

        <RamaBotanica
          className="
            pointer-events-none
            absolute
            -bottom-20
            -left-14
            z-0
            w-[180px]
            opacity-40
            sm:w-[240px]
            md:w-[300px]
          "
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* ======================================
              ENCABEZADO
          ====================================== */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              flex
              flex-col
              items-center
              text-center
            "
          >
            <FlorDecorativa />

            <p
              className="
                mt-5
                text-[10px]
                uppercase
                tracking-[0.32em]
                text-[#B09D87]
                sm:text-xs
              "
            >
              Comparte tus recuerdos
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-[clamp(2rem,6vw,3.5rem)]
                font-normal
                uppercase
                leading-tight
                tracking-[0.06em]
                text-[#45413F]
              "
            >
              {CONFIG.titulo}
            </h2>

            <div className="mt-6">
              <DivisorElegante />
            </div>

            <p
              className="
                mx-auto
                mt-7
                max-w-xl
                font-serif
                text-[17px]
                italic
                leading-relaxed
                text-[#766A5F]
                sm:text-xl
              "
            >
              {CONFIG.frase}
            </p>
          </motion.div>

          {/* ======================================
              IMAGEN + INVITACIÓN
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mx-auto
              mt-14
              grid
              w-full
              max-w-4xl
              grid-cols-1
              overflow-hidden
              border
              border-[#B09D87]/45
              bg-[#FCFAEF]
              md:mt-16
              md:grid-cols-2
            "
          >
            {/* IMAGEN */}

            <div
              className="
                relative
                h-[340px]
                overflow-hidden
                border-b
                border-[#B09D87]/40
                bg-[#E5CCB0]
                sm:h-[440px]
                md:h-[550px]
                md:border-b-0
                md:border-r
              "
            >
              <img
                src={CONFIG.imagen}
                alt="Recuerdos de nuestra boda"
                loading="lazy"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            {/* INFORMACIÓN */}

            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                px-7
                py-12
                text-center
                sm:px-10
                md:px-12
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B09D87]
                  text-[#B09D87]
                "
              >
                <Images
                  size={23}
                  strokeWidth={1.2}
                />
              </div>

              <p
                className="
                  mt-7
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#B09D87]
                "
              >
                Nuestros recuerdos
              </p>

              <h3
                className="
                  mt-4
                  font-serif
                  text-[clamp(2rem,5vw,3rem)]
                  font-normal
                  leading-tight
                  text-[#45413F]
                "
              >
                Comparte tus fotos
              </h3>

              <div className="mt-7">
                <DivisorElegante />
              </div>

              <p
                className="
                  mt-7
                  max-w-sm
                  text-sm
                  leading-7
                  text-[#766A5F]
                  sm:text-base
                "
              >
                Captura cada instante especial y
                súbelo a nuestro álbum para
                revivir esta celebración juntos.
              </p>

              {/* BOTÓN */}

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="
                  group
                  mt-9
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  border
                  border-[#8F7D68]
                  bg-[#8F7D68]
                  px-7
                  py-3.5
                  text-[10px]
                  uppercase
                  tracking-[0.2em]
                  text-white
                  transition-colors
                  duration-300
                  hover:bg-[#766A5F]
                  focus-visible:outline
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#B09D87]
                "
              >
                Abrir álbum

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </button>
            </div>
          </motion.div>

          {/* CIERRE */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="
              mx-auto
              mt-12
              flex
              flex-col
              items-center
              text-center
            "
          >
            <DivisorElegante />

            <p
              className="
                mt-6
                font-serif
                text-lg
                italic
                text-[#766A5F]
              "
            >
              Los mejores recuerdos son los
              que compartimos.
            </p>

            <Heart
              size={14}
              fill="#B09D87"
              strokeWidth={1}
              className="mt-5 text-[#B09D87]"
            />
          </motion.div>
        </div>
      </section>

      {/* ======================================
          MODAL DEL ÁLBUM
      ====================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              overflow-y-auto
              bg-[#45413F]/75
              px-4
              py-6
              sm:py-8
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={cerrarModal}
          >
            {/* VENTANA */}

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="album-modal-title"
              className="
                relative
                my-auto
                w-full
                max-w-md
                border
                border-[#B09D87]
                bg-[#FCFAEF]
              "
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* MARCO INTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  border
                  border-[#B09D87]/30
                "
              />

              {/* CERRAR */}

              <button
                type="button"
                onClick={cerrarModal}
                aria-label="Cerrar álbum compartido"
                className="
                  absolute
                  right-5
                  top-5
                  z-30
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B09D87]/50
                  bg-[#FCFAEF]
                  text-[#766A5F]
                  transition-colors
                  hover:bg-[#B09D87]
                  hover:text-white
                "
              >
                <X
                  size={17}
                  strokeWidth={1.5}
                />
              </button>

              {/* CONTENIDO */}

              <div
                className="
                  relative
                  z-10
                  max-h-[88dvh]
                  overflow-y-auto
                  px-6
                  py-10
                  text-center
                  sm:px-9
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B09D87]
                    text-[#B09D87]
                  "
                >
                  <Images
                    size={22}
                    strokeWidth={1.2}
                  />
                </div>

                <p
                  className="
                    mt-6
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-[#B09D87]
                  "
                >
                  Comparte tus recuerdos
                </p>

                <h2
                  id="album-modal-title"
                  className="
                    mt-4
                    font-serif
                    text-3xl
                    text-[#45413F]
                    sm:text-4xl
                  "
                >
                  Álbum compartido
                </h2>

                <div className="mt-6">
                  <DivisorElegante />
                </div>

                {/* APLICACIÓN */}

                <div className="mt-8">
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#B09D87]
                    "
                  >
                    Aplicación
                  </p>

                  <p
                    className="
                      mt-3
                      font-serif
                      text-2xl
                      text-[#45413F]
                    "
                  >
                    {CONFIG.aplicacion}
                  </p>

                  <a
                    href={CONFIG.enlaceApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-5
                      inline-flex
                      min-h-11
                      items-center
                      justify-center
                      gap-2
                      border
                      border-[#8F7D68]
                      bg-[#8F7D68]
                      px-6
                      py-3
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      text-white
                      transition-colors
                      hover:bg-[#766A5F]
                    "
                  >
                    Descargar app

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.4}
                    />
                  </a>
                </div>

                {/* CÓDIGO */}

                <div className="mt-9">
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#B09D87]
                    "
                  >
                    Código del álbum
                  </p>

                  <div
                    className="
                      mt-4
                      flex
                      items-center
                      justify-center
                      gap-3
                      border
                      border-[#B09D87]/50
                      bg-[#F4E9DA]
                      px-3
                      py-3
                    "
                  >
                    <span
                      className="
                        break-all
                        font-mono
                        text-base
                        tracking-[0.12em]
                        text-[#45413F]
                        sm:text-xl
                      "
                    >
                      {CONFIG.codigoAlbum}
                    </span>

                    <button
                      type="button"
                      onClick={copiarCodigo}
                      aria-label={
                        copiado
                          ? "Código copiado"
                          : "Copiar código del álbum"
                      }
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        border
                        border-[#B09D87]/50
                        text-[#766A5F]
                        transition-colors
                        hover:bg-[#B09D87]
                        hover:text-white
                      "
                    >
                      {copiado ? (
                        <Check size={17} />
                      ) : (
                        <Copy size={17} />
                      )}
                    </button>
                  </div>

                  {copiado && (
                    <p
                      role="status"
                      className="
                        mt-2
                        text-xs
                        text-[#766A5F]
                      "
                    >
                      Código copiado
                    </p>
                  )}
                </div>

                {/* CÓDIGO QR */}

                <div className="mt-9">
                  <p
                    className="
                      text-[10px]
                      uppercase
                      tracking-[0.25em]
                      text-[#B09D87]
                    "
                  >
                    Escanea el código QR
                  </p>

                  <div
                    className="
                      mx-auto
                      mt-5
                      w-fit
                      border
                      border-[#B09D87]/40
                      bg-white
                      p-3
                    "
                  >
                    <img
                      src={CONFIG.qr}
                      alt="Código QR del álbum compartido"
                      loading="lazy"
                      className="
                        h-40
                        w-40
                        object-contain
                        sm:h-44
                        sm:w-44
                      "
                    />
                  </div>
                </div>

                <p
                  className="
                    mx-auto
                    mt-7
                    max-w-xs
                    font-serif
                    text-base
                    italic
                    leading-7
                    text-[#766A5F]
                  "
                >
                  Escanea el código QR o utiliza
                  la aplicación para compartir
                  tus fotografías con nosotros.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
