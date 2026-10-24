
import React from "react";
import { motion } from "framer-motion";

// ==========================================
// CONFIGURACIÓN - WEDLY PLUS
// ==========================================

const CONFIG = {
  imagen: "/dresscode.png",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
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
// DECORACIÓN BOTÁNICA
// ==========================================

function RamaBotanica({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 250 320"
      fill="none"
      className={className}
    >
      <path
        d="
          M28 310
          C73 242 96 177 113 97
          C121 59 137 30 164 8
        "
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      <path
        d="
          M96 176 C67 159 43 167 25 194
          M107 133 C81 112 58 116 39 140
          M117 92 C98 70 81 65 60 74
          M86 216 C114 208 135 219 149 244
          M108 146 C135 144 153 157 165 180
          M128 67 C149 69 164 81 174 101
        "
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
      aria-label="Código de vestimenta"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#FCFAEF]
        px-3
        py-12
        sm:px-6
        sm:py-16
        md:px-10
        md:py-24
      "
    >
      {/* ======================================
          DECORACIONES BOTÁNICAS
      ====================================== */}

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-12
          z-0
          h-48
          w-40
          text-[#B09D87]/30
          sm:h-72
          sm:w-60
          md:h-80
          md:w-64
        "
      />

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -right-12
          -top-16
          z-0
          h-48
          w-40
          rotate-180
          text-[#B09D87]/30
          sm:h-72
          sm:w-60
          md:h-80
          md:w-64
        "
      />

      {/* ======================================
          CONTENEDOR PRINCIPAL
      ====================================== */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* LÍNEA DECORATIVA SUPERIOR */}

        <div
          className="
            mx-auto
            mb-8
            flex
            items-center
            justify-center
            gap-4
            sm:mb-12
          "
        >
          <span className="h-px w-12 bg-[#B09D87] sm:w-20" />

          <span
            className="
              h-[6px]
              w-[6px]
              rotate-45
              bg-[#B09D87]
            "
          />

          <span className="h-px w-12 bg-[#B09D87] sm:w-20" />
        </div>

        {/* ======================================
            IMAGEN COMPLETA
        ====================================== */}

        <div
          className="
            relative
            mx-auto
            w-full
            max-w-5xl
            overflow-hidden
            border
            border-[#B09D87]/25
            bg-[#FCFAEF]
          "
        >
          <img
            src={CONFIG.imagen}
            alt="Código de vestimenta elegante formal. Hombres: traje. Mujeres: vestido."
            loading="lazy"
            decoding="async"
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        </div>

        {/* ======================================
            LÍNEA DECORATIVA INFERIOR
        ====================================== */}

        <div
          className="
            mx-auto
            mt-8
            flex
            items-center
            justify-center
            gap-4
            sm:mt-12
          "
        >
          <span className="h-px w-12 bg-[#B09D87] sm:w-20" />

          <span
            className="
              h-[6px]
              w-[6px]
              rotate-45
              bg-[#B09D87]
            "
          />

          <span className="h-px w-12 bg-[#B09D87] sm:w-20" />
        </div>
      </motion.div>
    </section>
  );
}
