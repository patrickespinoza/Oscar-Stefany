
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Play, ChevronDown, AudioLines } from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE
// ==========================================

const CONFIG = {
  // IMÁGENES
  imagenIntroduccion: "/introduccion.jpg",
  imagenPortada: "/portada.jpg",

  // POSICIONES DE LAS IMÁGENES
  // Primer porcentaje: horizontal
  // Segundo porcentaje: vertical

  posicionIntroduccion: {
    mobile: "50% 50%",
    tablet: "50% 50%",
    desktop: "50% 50%",
  },

  posicionPortada: {
    mobile: "50% 50%",
    tablet: "50% 50%",
    desktop: "50% 20%",
  },

  // MÚSICA
  musica: "/musica.mp3",
  volumen: 0.45,

  // INICIALES
  iniciales: {
    primera: "O",
    segunda: "S",
  },

  // FECHA
  fecha: "02.01.2027",

  // DURACIÓN DE APERTURA
  duracionApertura: 4,
};

// ==========================================
// MONOGRAMA O | S
// ==========================================

function Monograma({
  className = "",
  compacto = false,
}) {
  return (
    <div
      className={`
        relative
        mx-auto
        shrink-0
        ${
          compacto
            ? `
              h-[180px] w-[190px]
              sm:h-[205px] sm:w-[220px]
              lg:h-[230px] lg:w-[250px]
            `
            : `
              h-[260px] w-[250px]
              sm:h-[330px] sm:w-[320px]
              md:h-[390px] md:w-[380px]
            `
        }
        ${className}
      `}
    >
      {/* PRIMERA INICIAL */}

      <span
        className={`
          absolute
          left-[-15%]
          top-0
          font-serif
          font-normal
          leading-none
          tracking-[-0.08em]
          text-white
          ${
            compacto
              ? `
                text-[125px]
                sm:text-[145px]
                lg:text-[165px]
              `
              : `
                text-[175px]
                sm:text-[220px]
                md:text-[260px]
              `
          }
        `}
      >
        {CONFIG.iniciales.primera}
      </span>

      {/* LÍNEA CENTRAL */}

      <div
        className="
          absolute
          left-1/2
          top-[3%]
          h-[94%]
          w-px
          -translate-x-1/2
          bg-white/90
        "
      />

      {/* SEGUNDA INICIAL */}

      <span
        className={`
          absolute
          bottom-[-5%]
          right-[0%]
          font-serif
          font-normal
          leading-none
          tracking-[-0.08em]
          text-white
          ${
            compacto
              ? `
                text-[125px]
                sm:text-[145px]
                lg:text-[165px]
              `
              : `
                text-[175px]
                sm:text-[220px]
                md:text-[260px]
              `
          }
        `}
      >
        {CONFIG.iniciales.segunda}
      </span>
    </div>
  );
}

// ==========================================
// COMPONENTE PORTADA
// ==========================================

export default function Portada({
  mostrarContenido = false,
}) {
  const audioRef = useRef(null);

  const [entrando, setEntrando] = useState(false);
  const [abierta, setAbierta] = useState(false);
  const [reproduciendo, setReproduciendo] = useState(false);

  // ==========================================
  // POSICIONES RESPONSIVAS
  // ==========================================

  const estilosPosicion = `
    .imagen-introduccion {
      object-position: ${CONFIG.posicionIntroduccion.mobile};
    }

    .imagen-portada {
      object-position: ${CONFIG.posicionPortada.mobile};
    }

    @media (min-width: 640px) {
      .imagen-introduccion {
        object-position: ${CONFIG.posicionIntroduccion.tablet};
      }

      .imagen-portada {
        object-position: ${CONFIG.posicionPortada.tablet};
      }
    }

    @media (min-width: 1024px) {
      .imagen-introduccion {
        object-position: ${CONFIG.posicionIntroduccion.desktop};
      }

      .imagen-portada {
        object-position: ${CONFIG.posicionPortada.desktop};
      }
    }
  `;

  // ==========================================
  // ENTRAR A LA INVITACIÓN
  // ==========================================

  const entrarInvitacion = () => {
    if (entrando || abierta) return;

    setEntrando(true);

    const audio = audioRef.current;

    if (audio) {
      audio.volume = CONFIG.volumen;
      audio.muted = false;

      audio
        .play()
        .then(() => {
          setReproduciendo(true);
        })
        .catch((error) => {
          console.warn(
            "No se pudo reproducir la música:",
            error
          );
          setReproduciendo(false);
        });
    }

    setAbierta(true);
  };

  // ==========================================
  // CONTROLAR MÚSICA
  // ==========================================

  const alternarMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        audio.muted = false;
        await audio.play();
        setReproduciendo(true);
      } catch (error) {
        console.warn(
          "Error al reproducir:",
          error
        );
        setReproduciendo(false);
      }
    } else {
      audio.pause();
      setReproduciendo(false);
    }
  };

  // ==========================================
  // BLOQUEAR SCROLL EN INTRODUCCIÓN
  // ==========================================

  useEffect(() => {
    if (abierta) return;

    const anterior = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = anterior;
    };
  }, [abierta]);

  // ==========================================
  // IR A LA SIGUIENTE SECCIÓN
  // ==========================================

  const bajarContenido = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* POSICIONES DE IMÁGENES */}

      <style>{estilosPosicion}</style>

      {/* AUDIO GLOBAL */}

      <audio
        ref={audioRef}
        src={CONFIG.musica}
        loop
        preload="auto"
        onPlay={() => setReproduciendo(true)}
        onPause={() => setReproduciendo(false)}
      />

      {/* ======================================
          PORTADA PRINCIPAL
      ====================================== */}

      <section
        className="
          relative
          isolate
          h-[100svh]
          min-h-[550px]
          w-full
          overflow-hidden
          bg-black
          text-white
        "
      >
        {/* FOTOGRAFÍA PRINCIPAL */}

        <motion.img
          src={CONFIG.imagenPortada}
          alt="Fotografía de los novios"
          className="
            imagen-portada
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          initial={{
            scale: 1.08,
          }}
          animate={{
            scale: abierta ? 1 : 1.08,
          }}
          transition={{
            duration: 7,
            ease: "easeOut",
          }}
        />

        {/* OSCURECIMIENTO */}

        <div className="absolute inset-0 bg-black/30" />

        {/* DEGRADADO ORIGINAL */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/30
            to-transparent
          "
        />

        {/* ======================================
            BOTÓN DE MÚSICA
        ====================================== */}

        <AnimatePresence>
          {abierta && (
            <motion.button
              type="button"
              onClick={alternarMusica}
              aria-label={
                reproduciendo
                  ? "Detener música"
                  : "Reproducir música"
              }
              initial={{
                opacity: 0,
                y: -30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                delay: 2,
                duration: 0.8,
              }}
              className="
                absolute
                left-1/2
                top-7
                z-30
                flex
                -translate-x-1/2
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-[#BFA98B]
                bg-[#D8C7B0]/95
                px-7
                py-3
                shadow-lg
                backdrop-blur-md
                transition-colors
                duration-300
                hover:bg-[#E8DCCB]
                sm:left-8
                sm:translate-x-0
              "
            >
              <span
                className="
                  font-serif
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-[#493B31]
                "
              >
                {reproduciendo
                  ? "Detener"
                  : "Reproducir"}
              </span>

              {reproduciendo ? (
                <AudioLines
                  size={23}
                  strokeWidth={1.7}
                  className="text-[#493B31]"
                />
              ) : (
                <Play
                  size={20}
                  strokeWidth={1.7}
                  className="text-[#493B31]"
                />
              )}
            </motion.button>
          )}
        </AnimatePresence>

        {/* ======================================
            FECHA + MONOGRAMA
            SIN SUPERPOSICIÓN
        ====================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-[8%]
            z-10
            flex
            flex-col
            items-center
            justify-end
            gap-4
            px-4
            sm:bottom-[8%]
            sm:gap-5
            lg:bottom-[9%]
            lg:gap-6
          "
        >
          {/* FECHA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: abierta ? 1 : 0,
              y: abierta ? 0 : 35,
            }}
            transition={{
              delay: 1.8,
              duration: 1.3,
            }}
            className="
              relative
              w-full
              text-center
            "
          >
            <p
              className="
                font-cursiveDancing
                text-[clamp(2.8rem,9vw,5rem)]
                font-normal
                leading-[1.2]
                text-white
                drop-shadow-[0_3px_15px_rgba(0,0,0,0.6)]
                lg:text-[5.5rem]
              "
            >
              {CONFIG.fecha}
            </p>
          </motion.div>

          {/* MONOGRAMA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: abierta ? 1 : 0,
              y: abierta ? 0 : 45,
            }}
            transition={{
              delay: 2.3,
              duration: 1.3,
            }}
            className="
              relative
              flex
              w-full
              justify-center
            "
          >
            <Monograma compacto />
          </motion.div>
        </div>

        {/* ======================================
            BOTÓN PARA CONTINUAR
        ====================================== */}

        <motion.button
          type="button"
          onClick={bajarContenido}
          aria-label="Continuar hacia la invitación"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: abierta ? 1 : 0,
          }}
          transition={{
            delay: 3.6,
            duration: 0.8,
          }}
          className="
            absolute
            bottom-5
            left-1/2
            z-20
            -translate-x-1/2
            text-white/80
          "
          style={{
            pointerEvents: abierta ? "auto" : "none",
          }}
        >
          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronDown
              size={24}
              strokeWidth={1.2}
            />
          </motion.div>
        </motion.button>
      </section>

      {/* ======================================
          INTRODUCCIÓN
      ====================================== */}

      <AnimatePresence>
        {!abierta && (
          <motion.div
            key="bienvenida"
            initial={{
              y: 0,
            }}
            animate={{
              y: 0,
            }}
            exit={{
              y: "-100%",
            }}
            transition={{
              duration: CONFIG.duracionApertura,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="
              fixed
              inset-0
              z-[9999]
              flex
              h-[100svh]
              w-full
              flex-col
              items-center
              justify-center
              overflow-hidden
              bg-black
              text-white
            "
          >
            {/* IMAGEN DE INTRODUCCIÓN */}

            <img
              src={CONFIG.imagenIntroduccion}
              alt=""
              aria-hidden="true"
              className="
                imagen-introduccion
                absolute
                inset-0
                h-full
                w-full
                scale-110
                object-cover
                grayscale
                blur-[2px]
              "
            />

            {/* OSCURECIMIENTO */}

            <div className="absolute inset-0 bg-black/40" />

            {/* DEGRADADO ORIGINAL */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/35
                via-transparent
                to-black/40
              "
            />

            {/* CONTENIDO */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.3,
              }}
              className="
                relative
                z-10
                flex
                h-full
                w-full
                flex-col
                items-center
                justify-center
                px-5
                text-center
              "
            >
              {/* TÍTULO */}

              <h1
                className="
                  mb-10
                  font-serif
                  text-[clamp(2.8rem,8vw,5rem)]
                  font-normal
                  tracking-[-0.025em]
                  text-white
                  drop-shadow-lg
                  sm:mb-14
                "
              >
                Nuestra Boda
              </h1>

              {/* MONOGRAMA ORIGINAL */}

              <Monograma />

              {/* BOTÓN ENTRAR */}

              <motion.button
                type="button"
                onClick={entrarInvitacion}
                disabled={entrando}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="
                  group
                  relative
                  mt-12
                  rounded-full
                  border
                  border-white
                  bg-white/10
                  px-9
                  py-3
                  text-[17px]
                  font-light
                  uppercase
                  tracking-[0.08em]
                  text-white
                  backdrop-blur-sm
                  transition-colors
                  duration-300
                  hover:bg-white/20
                  disabled:cursor-default
                  sm:mt-16
                "
              >
                <span
                  className="
                    pointer-events-none
                    absolute
                    inset-[4px]
                    rounded-full
                    border
                    border-white/80
                  "
                />

                <span className="relative z-10">
                  {entrando
                    ? "Entrando..."
                    : "Entrar"}
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
