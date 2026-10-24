
import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  Wine,
  MapPin,
  Clock3,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const CONFIG = {
  fecha: {
    diaSemana: "Sábado",
    dia: "02",
    mes: "Enero",
    anio: "2027",
  },

  eventos: [
    {
      id: "ceremonia",
      subtitulo: "Ceremonia religiosa",
      nombre: "Parroquia María Reina de la Paz",
      hora: "1:00",
      periodo: "P. M.",
      ubicacion:
        "https://maps.app.goo.gl/9m5vT7wgSgkwRHkZ7",
      tipo: "iglesia",
    },
    {
      id: "recepcion",
      subtitulo: "Recepción",
      nombre: "Casa Antualian",
      hora: "3:00",
      periodo: "P. M.",
      ubicacion:
        "https://maps.app.goo.gl/BiE8EDCxETKVn9UB6",
      tipo: "recepcion",
    },
  ],
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
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
// FLOR CENTRAL
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
// DIVISOR EDITORIAL
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
// BLOQUE DE UBICACIÓN
// ==========================================

function BloqueEvento({ evento, index }) {
  const Icono =
    evento.tipo === "iglesia" ? Church : Wine;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
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
        flex
        h-full
        flex-col
        items-center
        px-3
        text-center
        sm:px-8
        md:px-10
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
        <Icono size={25} strokeWidth={1.2} />
      </div>

      {/* TIPO DE EVENTO */}

      <p
        className="
          mt-7
          text-[10px]
          uppercase
          tracking-[0.3em]
          text-[#B09D87]
          sm:text-xs
        "
      >
        {evento.subtitulo}
      </p>

      {/* NOMBRE DEL LUGAR */}

      <h3
        className="
          mt-5
          max-w-sm
          font-serif
          text-[clamp(1.5rem,4vw,2.1rem)]
          font-normal
          leading-snug
          text-[#45413F]
        "
      >
        {evento.nombre}
      </h3>

      {/* LÍNEA DECORATIVA */}

      <span
        className="
          mt-7
          h-px
          w-14
          bg-[#B09D87]
        "
      />

      {/* HORA */}

      <div className="mt-7 flex items-center gap-3">
        <Clock3
          size={17}
          strokeWidth={1.3}
          className="text-[#B09D87]"
        />

        <p
          className="
            font-serif
            text-2xl
            text-[#45413F]
            sm:text-3xl
          "
        >
          {evento.hora}
          <span
            className="
              ml-2
              font-sans
              text-[10px]
              tracking-[0.2em]
              text-[#766A5F]
            "
          >
            {evento.periodo}
          </span>
        </p>
      </div>
  

      {/* BOTÓN GOOGLE MAPS */}

      <a
        href={evento.ubicacion}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Ver ubicación de ${evento.nombre} en Google Maps`}
        className="
          group
          mt-8
          inline-flex
          min-h-12
          items-center
          justify-center
          gap-3
          border
          border-[#B09D87]
          bg-[#B09D87]
          px-7
          py-3.5
          text-[10px]
          font-medium
          uppercase
          tracking-[0.17em]
          text-white
          transition-colors
          duration-300
          hover:bg-[#8F7D68]
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-offset-4
          focus-visible:outline-[#B09D87]
        "
      >
        <MapPin size={15} strokeWidth={1.5} />

        Ver ubicación

        <ArrowUpRight
          size={15}
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

export default function DireccionEvento() {
  return (
    <section
      id="ubicacion"
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
          sm:w-[210px]
          md:w-[260px]
        "
      />

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-12
          z-0
          w-[190px]
          sm:w-[250px]
          md:w-[310px]
        "
      />

      {/* ======================================
          CONTENIDO
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
            amount: 0.2,
          }}
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >
          <FlorCentral />

          <p
            className="
              mt-5
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#B09D87]
              sm:text-xs
            "
          >
            Nuestro gran día
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-[clamp(2rem,6vw,3.5rem)]
              font-normal
              uppercase
              leading-tight
              tracking-[0.08em]
              text-[#45413F]
            "
          >
            Celebración
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
            Hay momentos que se vuelven inolvidables
            cuando se comparten con las personas
            que más queremos.
          </p>
        </motion.div>

        {/* ======================================
            FECHA DEL EVENTO
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
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="
            mx-auto
            mt-14
            flex
            max-w-lg
            flex-col
            items-center
            text-center
            sm:mt-16
          "
        >
          <CalendarDays
            size={22}
            strokeWidth={1.2}
            className="text-[#B09D87]"
          />

          <p
            className="
              mt-5
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-[#B09D87]
            "
          >
            {CONFIG.fecha.diaSemana}
          </p>

          <div
            className="
              mt-3
              flex
              items-center
              justify-center
              gap-5
              sm:gap-7
            "
          >
            <span className="h-px w-10 bg-[#B09D87] sm:w-16" />

            <span
              className="
                font-serif
                text-6xl
                leading-none
                text-[#45413F]
                sm:text-7xl
              "
            >
              {CONFIG.fecha.dia}
            </span>

            <span className="h-px w-10 bg-[#B09D87] sm:w-16" />
          </div>

          <p
            className="
              mt-3
              font-serif
              text-2xl
              text-[#45413F]
              sm:text-3xl
            "
          >
            {CONFIG.fecha.mes}
          </p>

          <p
            className="
              mt-2
              text-xs
              tracking-[0.4em]
              text-[#B09D87]
            "
          >
            {CONFIG.fecha.anio}
          </p>
        </motion.div>

        {/* ======================================
            DIVISOR ENTRE FECHA Y LUGARES
        ====================================== */}

        <div className="mx-auto mt-14 max-w-4xl border-t border-[#B09D87]/40 sm:mt-16" />

        {/* ======================================
            CEREMONIA Y RECEPCIÓN
        ====================================== */}

        <div
          className="
            relative
            mx-auto
            mt-14
            grid
            max-w-5xl
            grid-cols-1
            gap-12
            md:grid-cols-2
            md:gap-0
          "
        >
          {/* LÍNEA CENTRAL EN COMPUTADORA */}

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
              bg-[#B09D87]/45
              md:block
            "
          />

          {CONFIG.eventos.map((evento, index) => (
            <React.Fragment key={evento.id}>
              <BloqueEvento
                evento={evento}
                index={index}
              />

              {index === 0 && (
                <div
                  className="
                    mx-auto
                    h-px
                    w-36
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
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="
            mx-auto
            mt-20
            max-w-2xl
            text-center
          "
        >
          <DivisorElegante />

          <p
            className="
              mt-7
              font-serif
              text-lg
              italic
              leading-relaxed
              text-[#766A5F]
              sm:text-xl
            "
          >
            Será un honor compartir
            este día tan especial contigo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
