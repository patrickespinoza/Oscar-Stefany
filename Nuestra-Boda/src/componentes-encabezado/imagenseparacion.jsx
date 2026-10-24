
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const CONFIG = {
  frase:
    "Con la bendición de Dios y rodeados de su amor, esperamos compartir con ustedes la alegría de nuestro eterno comienzo.",

  iniciales: "O & S",

  fecha: "02 · 01 · 2027",
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
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// RAMAS BOTÁNICAS
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
        stroke="currentColor"
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
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />

      <g
        fill="currentColor"
        fillOpacity="0.12"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M13 231 Q22 207 51 210 Q42 231 13 231Z" />
        <path d="M32 181 Q44 155 75 162 Q62 184 32 181Z" />
        <path d="M66 113 Q80 89 108 100 Q96 119 66 113Z" />
        <path d="M230 81 Q215 52 185 62 Q198 85 230 81Z" />
        <path d="M179 247 Q150 239 151 213 Q175 218 179 247Z" />
        <path d="M197 178 Q169 169 170 145 Q192 152 197 178Z" />
      </g>
    </svg>
  );
}

// ==========================================
// DIVISOR ELEGANTE
// ==========================================

function DivisorElegante() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-12 bg-[#E5CCB0]/70 sm:w-20" />

      <span
        className="
          h-2
          w-2
          rotate-45
          border
          border-[#E5CCB0]
        "
      />

      <span className="h-px w-12 bg-[#E5CCB0]/70 sm:w-20" />
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function ImagenSeparacion() {
  return (
    <section
      id="frase-final"
      className="
        relative
        isolate
        flex
        min-h-[540px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#8F7D68]
        px-5
        py-24
        sm:min-h-[620px]
        sm:px-8
        md:min-h-[700px]
        md:py-32
      "
    >
      {/* ======================================
          DECORACIONES BOTÁNICAS
      ====================================== */}

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -bottom-20
          -left-16
          w-[180px]
          text-[#E5CCB0]/30
          sm:w-[250px]
          md:w-[310px]
        "
      />

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -right-16
          -top-20
          w-[180px]
          rotate-180
          text-[#E5CCB0]/30
          sm:w-[250px]
          md:w-[310px]
        "
      />

      {/* ======================================
          MARCOS DECORATIVOS
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-[#E5CCB0]/35
          sm:inset-7
          md:inset-10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-6
          border
          border-[#E5CCB0]/15
          sm:inset-10
          md:inset-12
        "
      />

      {/* ======================================
          CONTENIDO CENTRAL
      ====================================== */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-4xl
          flex-col
          items-center
          text-center
        "
      >

   


        {/* DIVISOR */}

        <div className="mt-7">
          <DivisorElegante />
        </div>

        {/* ======================================
            FRASE PRINCIPAL
        ====================================== */}

        <blockquote
          className="
            mx-auto
            mt-10
            max-w-3xl
            px-2
            font-serif
            text-[clamp(1.65rem,4.5vw,3.25rem)]
            font-normal
            italic
            leading-[1.55]
            tracking-[-0.015em]
            text-[#FCFAEF]
            sm:px-6
            md:leading-[1.5]
          "
        >
          <span
            className="
              mr-1
              text-[#E5CCB0]
            "
          >
            “
          </span>

          {CONFIG.frase}

          <span
            className="
              ml-1
              text-[#E5CCB0]
            "
          >
            ”
          </span>
        </blockquote>

        {/* CORAZÓN Y ANILLO */}

        <div
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-3
            text-2xl
            sm:text-3xl
          "
          aria-hidden="true"
        >
          <span>🤍</span>
          <span>💍</span>
        </div>

        {/* DIVISOR INFERIOR */}

        <div className="mt-9">
          <DivisorElegante />
        </div>

        {/* INICIALES */}

        <p
          className="
            mt-9
            font-serif
            text-3xl
            italic
            text-[#FCFAEF]
            sm:text-4xl
          "
        >
          {CONFIG.iniciales}
        </p>

        {/* FECHA */}

        <p
          className="
            mt-4
            text-[10px]
            tracking-[0.35em]
            text-[#E5CCB0]
            sm:text-xs
          "
        >
          {CONFIG.fecha}
        </p>
      </motion.div>
    </section>
  );
}
