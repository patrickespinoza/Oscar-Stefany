
import React from "react";
import { motion } from "framer-motion";
import {
  Gift,
  Heart,
  ArrowUpRight,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const CONFIG = {
  titulo: "Mesa de regalos",

  subtitulo: "Un detalle para nuestro futuro",

  descripcion:
    "Tu presencia es nuestro mejor regalo, pero si deseas tener un detalle con nosotros, hemos preparado estas opciones con mucho cariño.",

  fraseFinal:
    "El regalo más hermoso será compartir este día contigo.",

  mesas: [
    {
      nombre: "Liverpool",
      etiqueta: "Mesa de regalos",
      numero: "60062682",
      enlace:
        "https://mesaderegalos.liverpool.com.mx/milistaderegalos/60062682",
    },
    {
      nombre: "Sears",
      etiqueta: "Mesa de regalos",
      numero: "286914",
      enlace:
        "https://www.sears.com.mx/Mesa-de-Regalos/286914/Te-invito-a-mi-Boda---S.-Stefany-&-Oscar-",
    },
  ],
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
// DIVISOR ELEGANTE
// ==========================================

function DivisorElegante() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-10 bg-[#B09D87] sm:w-16" />

      <span className="h-[6px] w-[6px] rotate-45 bg-[#B09D87]" />

      <span className="h-px w-10 bg-[#B09D87] sm:w-16" />
    </div>
  );
}

// ==========================================
// TARJETA DE MESA DE REGALOS
// ==========================================

function TarjetaRegalo({ mesa, index }) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        min-h-[370px]
        flex-col
        items-center
        justify-center
        border
        border-[#B09D87]/45
        bg-[#FCFAEF]
        px-6
        py-12
        text-center
        sm:min-h-[410px]
        sm:px-10
      "
    >
      {/* MARCO INTERIOR */}

      <div
        className="
          pointer-events-none
          absolute
          inset-3
          border
          border-[#B09D87]/20
        "
      />

      {/* ÍCONO */}

      <div
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          border
          border-[#B09D87]
          text-[#B09D87]
        "
      >
        <Gift size={27} strokeWidth={1.2} />
      </div>

      {/* ETIQUETA */}

      <p
        className="
          relative
          mt-7
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-[#B09D87]
        "
      >
        {mesa.etiqueta}
      </p>

      {/* TIENDA */}

      <h3
        className="
          relative
          mt-4
          font-serif
          text-4xl
          font-normal
          text-[#45413F]
          sm:text-5xl
        "
      >
        {mesa.nombre}
      </h3>

      {/* DIVISOR */}

      <div className="relative mt-7">
        <DivisorElegante />
      </div>

      {/* NÚMERO */}

      <p
        className="
          relative
          mt-7
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-[#B09D87]
        "
      >
        Número de evento
      </p>

      <p
        className="
          relative
          mt-2
          font-serif
          text-xl
          tracking-[0.08em]
          text-[#45413F]
          sm:text-2xl
        "
      >
        {mesa.numero}
      </p>

      {/* BOTÓN */}

      <a
        href={mesa.enlace}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver mesa de regalos de ${mesa.nombre}`}
        className="
          group
          relative
          mt-9
          inline-flex
          min-h-12
          items-center
          justify-center
          gap-3
          border
          border-[#8F7D68]
          bg-[#8F7D68]
          px-6
          py-3.5
          text-[10px]
          uppercase
          tracking-[0.17em]
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
        Ver mesa de regalos

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
      </a>
    </motion.article>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Regalos() {
  return (
    <section
      id="regalos"
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
          {/* ÍCONO */}

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
            <Gift size={23} strokeWidth={1.2} />
          </div>

          {/* SUBTÍTULO */}

          <p
            className="
              mt-6
              text-[10px]
              uppercase
              tracking-[0.32em]
              text-[#B09D87]
              sm:text-xs
            "
          >
            {CONFIG.subtitulo}
          </p>

          {/* TÍTULO */}

          <h2
            className="
              mt-4
              font-serif
              text-[clamp(2rem,6vw,3.5rem)]
              font-normal
              uppercase
              leading-tight
              tracking-[0.05em]
              text-[#45413F]
            "
          >
            {CONFIG.titulo}
          </h2>

          {/* DIVISOR */}

          <div className="mt-6">
            <DivisorElegante />
          </div>

          {/* DESCRIPCIÓN */}

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
            {CONFIG.descripcion}
          </p>
        </motion.div>

        {/* ======================================
            DOS MESAS DE REGALOS
        ====================================== */}

        <div
          className="
            mx-auto
            mt-14
            grid
            w-full
            max-w-4xl
            grid-cols-1
            gap-6
            sm:mt-16
            md:grid-cols-2
            md:gap-8
          "
        >
          {CONFIG.mesas.map((mesa, index) => (
            <TarjetaRegalo
              key={mesa.nombre}
              mesa={mesa}
              index={index}
            />
          ))}
        </div>

        {/* ======================================
            CIERRE
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
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="
            mx-auto
            mt-14
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
              max-w-xl
              font-serif
              text-lg
              italic
              leading-relaxed
              text-[#766A5F]
              sm:text-xl
            "
          >
            {CONFIG.fraseFinal}
          </p>

          <Heart
            size={15}
            strokeWidth={1}
            fill="#B09D87"
            className="mt-5 text-[#B09D87]"
          />
        </motion.div>
      </div>
    </section>
  );
}
