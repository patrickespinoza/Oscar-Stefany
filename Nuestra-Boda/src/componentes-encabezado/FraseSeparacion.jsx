
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const CONFIG = {
  frase:
    "Que nuestro amor sea fiel, nuestra unión inseparable y Dios el centro de nuestras vidas; pues donde Él une dos corazones, nace un amor bendecido para toda la vida.",

  iniciales: {
    primera: "O",
    segunda: "S",
  },
};

// ==========================================
// FLOR DECORATIVA
// ==========================================

function FlorDecorativa() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="none"
      className="h-16 w-16 text-[#FCFAEF] sm:h-20 sm:w-20"
    >
      <path
        d="M50 91 C49 70 50 49 50 28"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <path
        d="
          M50 72 C35 57 23 59 14 67
          M50 61 C65 47 77 50 86 57
        "
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <path
        d="M14 67 Q21 50 39 58 Q32 70 14 67Z"
        fill="#E5CCB0"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M86 57 Q76 40 61 50 Q70 61 86 57Z"
        fill="#E5CCB0"
        stroke="currentColor"
        strokeWidth="1"
      />

      <g fill="#B09D87" stroke="currentColor" strokeWidth="1.1">
        <ellipse cx="50" cy="15" rx="8" ry="13" />
        <ellipse cx="50" cy="37" rx="8" ry="13" />
        <ellipse cx="39" cy="26" rx="13" ry="8" />
        <ellipse cx="61" cy="26" rx="13" ry="8" />
      </g>

      <circle cx="50" cy="26" r="5" fill="#E5CCB0" />
    </svg>
  );
}

// ==========================================
// DIVISOR ELEGANTE
// ==========================================

function DivisorElegante() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-12 bg-[#FCFAEF]/75 sm:w-20" />

      <span
        className="
          h-[6px]
          w-[6px]
          rotate-45
          bg-[#E5CCB0]
        "
      />

      <span className="h-px w-12 bg-[#FCFAEF]/75 sm:w-20" />
    </div>
  );
}

// ==========================================
// RAMA BOTÁNICA
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
        stroke="#FCFAEF"
        strokeWidth="1.2"
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
        stroke="#FCFAEF"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <g
        fill="#E5CCB0"
        stroke="#FCFAEF"
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
// COMPONENTE PRINCIPAL
// ==========================================

export default function FraseSeparacion() {
  return (
    <section
      id="frase-separacion"
      className="
        relative
        isolate
        flex
        min-h-[460px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#B09D87]
        px-6
        py-20
        sm:min-h-[520px]
        sm:px-10
        sm:py-24
        md:min-h-[580px]
      "
    >
      {/* DECORACIONES BOTÁNICAS */}

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -bottom-24
          -left-16
          z-0
          w-[160px]
          opacity-40
          sm:w-[230px]
          md:w-[280px]
        "
      />

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -right-16
          -top-24
          z-0
          w-[160px]
          rotate-180
          opacity-40
          sm:w-[230px]
          md:w-[280px]
        "
      />

      {/* CONTENIDO */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
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
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-3xl
          flex-col
          items-center
          text-center
        "
      >
        {/* FLOR */}

        <FlorDecorativa />


        {/* DIVISOR */}

        <div className="mt-6">
          <DivisorElegante />
        </div>

        {/* FRASE */}

        <div className="relative mt-9 sm:mt-11">
          <span
            aria-hidden="true"
            className="
              absolute
              -left-2
              -top-8
              font-serif
              text-6xl
              leading-none
              text-[#E5CCB0]/60
              sm:-left-10
              sm:-top-10
              sm:text-8xl
            "
          >
            “
          </span>

          <blockquote
            className="
              mx-auto
              max-w-2xl
              font-serif
              text-[clamp(1.35rem,4.5vw,2.25rem)]
              font-normal
              italic
              leading-[1.65]
              tracking-[0.005em]
              text-[#FCFAEF]
            "
          >
            {CONFIG.frase}
          </blockquote>

          <span
            aria-hidden="true"
            className="
              absolute
              -bottom-12
              -right-1
              font-serif
              text-6xl
              leading-none
              text-[#E5CCB0]/60
              sm:-bottom-14
              sm:-right-10
              sm:text-8xl
            "
          >
            ”
          </span>
        </div>

        {/* DIVISOR INFERIOR */}

        <div className="mt-14 sm:mt-16">
          <DivisorElegante />
        </div>

        {/* INICIALES */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="font-serif text-2xl italic text-[#FCFAEF] sm:text-3xl">
            {CONFIG.iniciales.primera}
          </span>

          <Heart
            size={13}
            strokeWidth={1.2}
            fill="#E5CCB0"
            className="text-[#E5CCB0]"
          />

          <span className="font-serif text-2xl italic text-[#FCFAEF] sm:text-3xl">
            {CONFIG.iniciales.segunda}
          </span>
        </div>
      </motion.div>
    </section>
  );
}
