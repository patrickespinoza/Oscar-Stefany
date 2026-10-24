
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const padres = [
  {
    titulo: "Padres de la novia",
    nombres: [
      "David Sánchez Priego",
      "Rosario Cortés Sánchez",
    ],
  },
  {
    titulo: "Familia del novio",
    nombres: [
      "Nieves León León †",
      "Guadalupe Ramirez León",
    ],
    fallecido: [0],
  },
];

const padrinos = [
  {
    titulo: "Padrinos de velación",
    nombres: [
      "Salvador Ramírez León",
      "Areli Romero Flores",
    ],
  },
  {
    titulo: "Padrinos de anillos",
    nombres: [
      "Carlos Valencia Galicia",
      "Concepción Sánchez Priego",
    ],
  },
];

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
// RAMA BOTÁNICA DECORATIVA
// ==========================================

function RamaBotanica({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 340"
      fill="none"
      className={className}
    >
      {/* TALLO PRINCIPAL */}

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

      {/* RAMAS SECUNDARIAS */}

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

      {/* HOJAS */}

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

      {/* FLOR */}

      <g
        fill="#FCFAEF"
        stroke="#B09D87"
        strokeWidth="0.9"
      >
        <ellipse cx="103" cy="89" rx="6" ry="10" />
        <ellipse cx="103" cy="109" rx="6" ry="10" />
        <ellipse cx="93" cy="99" rx="10" ry="6" />
        <ellipse cx="113" cy="99" rx="10" ry="6" />
        <circle
          cx="103"
          cy="99"
          r="4"
          fill="#B09D87"
        />
      </g>
    </svg>
  );
}

// ==========================================
// FLOR DECORATIVA CENTRAL
// ==========================================

function FlorCentral() {
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
// DIVISOR ELEGANTE
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
// BLOQUE DE NOMBRES
// ==========================================

function BloqueFamilia({ grupo, index }) {
  return (
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        flex-col
        items-center
        px-3
        text-center
        sm:px-8
        md:px-10
      "
    >
      {/* TÍTULO */}

      <p
        className="
          mb-7
          text-[10px]
          font-medium
          uppercase
          tracking-[0.22em]
          text-[#B09D87]
          sm:text-xs
        "
      >
        {grupo.titulo}
      </p>

      {/* NOMBRES */}

      <div className="space-y-3">
        {grupo.nombres.map((nombre, i) => (
          <React.Fragment key={`${nombre}-${i}`}>
            <h3
              className="
                font-serif
                text-[clamp(1.35rem,4vw,2rem)]
                font-normal
                leading-snug
                text-[#45413F]
              "
            >
              {nombre}

            </h3>

            {i === 0 && (
              <p
                className="
                  font-serif
                  text-lg
                  italic
                  text-[#B09D87]
                "
              >
                y
              </p>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* LÍNEA DECORATIVA */}

      <div className="mt-8 h-px w-14 bg-[#B09D87]" />
    </motion.div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Padres() {
  return (
    <section
      id="padres"
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
      {/* ======================================
          DECORACIONES BOTÁNICAS
      ====================================== */}

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -right-12
          -top-20
          z-0
          w-[155px]
          rotate-180
          sm:w-[210px]
          md:w-[260px]
        "
      />

      

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

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
            amount: 0.25,
          }}
          className="flex flex-col items-center text-center"
        >
          <FlorCentral />

          <h2
            className="
              mt-5
              font-serif
              text-[clamp(1.9rem,6vw,3.5rem)]
              font-normal
              uppercase
              leading-tight
              tracking-[0.08em]
              text-[#45413F]
            "
          >
            Nuestros Padres
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
              leading-relaxed
              text-[#766A5F]
              sm:text-xl
            "
          >
            Con la bendición y el amor de nuestros padres,
            quienes nos han acompañado en cada paso
            de nuestras vidas.
          </p>
        </motion.div>

        {/* ======================================
            PADRES DE LOS NOVIOS
        ====================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            grid
            max-w-4xl
            grid-cols-1
            gap-12
            sm:mt-16
            md:grid-cols-2
            md:gap-0
          "
        >
          {/* DIVISOR VERTICAL EN COMPUTADORA */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-3
              left-1/2
              top-3
              hidden
              w-px
              -translate-x-1/2
              bg-[#B09D87]/60
              md:block
            "
          />

          {padres.map((familia, index) => (
            <React.Fragment key={familia.titulo}>
              <BloqueFamilia
                grupo={familia}
                index={index}
              />

              {index === 0 && (
                <div
                  className="
                    mx-auto
                    h-px
                    w-32
                    bg-[#B09D87]/40
                    md:hidden
                  "
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ======================================
            SEPARACIÓN ENTRE PADRES Y PADRINOS
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            mx-auto
            mt-20
            flex
            flex-col
            items-center
            text-center
            sm:mt-24
          "
        >
          <FlorCentral />

          <h2
            className="
              mt-5
              font-serif
              text-[clamp(1.9rem,6vw,3.5rem)]
              font-normal
              uppercase
              leading-tight
              tracking-[0.08em]
              text-[#45413F]
            "
          >
            Nuestros Padrinos
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
              leading-relaxed
              text-[#766A5F]
              sm:text-xl
            "
          >
            Personas especiales que nos acompañarán
            y serán testigos de nuestro amor.
          </p>
        </motion.div>

        {/* ======================================
            PADRINOS DE VELACIÓN Y ANILLOS
        ====================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            grid
            max-w-4xl
            grid-cols-1
            gap-12
            sm:mt-16
            md:grid-cols-2
            md:gap-0
          "
        >
          {/* DIVISOR VERTICAL EN COMPUTADORA */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-3
              left-1/2
              top-3
              hidden
              w-px
              -translate-x-1/2
              bg-[#B09D87]/60
              md:block
            "
          />

          {padrinos.map((grupo, index) => (
            <React.Fragment key={grupo.titulo}>
              <BloqueFamilia
                grupo={grupo}
                index={index}
              />

              {index === 0 && (
                <div
                  className="
                    mx-auto
                    h-px
                    w-32
                    bg-[#B09D87]/40
                    md:hidden
                  "
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* ======================================
            FRASE FINAL
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
          }}
          className="
            mx-auto
            mt-20
            max-w-2xl
            text-center
            sm:mt-24
          "
        >
          <DivisorElegante />

          <p
            className="
              mt-7
              font-serif
              text-base
              italic
              leading-relaxed
              text-[#766A5F]
              sm:text-lg
            "
          >
            Gracias por ser parte de nuestra historia
            y acompañarnos en este día tan especial.
          </p>

          <Heart
            size={14}
            fill="#B09D87"
            strokeWidth={1}
            className="
              mx-auto
              mt-6
              text-[#B09D87]
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
