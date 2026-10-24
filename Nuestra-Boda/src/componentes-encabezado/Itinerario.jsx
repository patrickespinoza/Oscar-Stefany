
import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  Wine,
  UtensilsCrossed,
  Music2,
  PartyPopper,
  Heart,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY PLUS
// ==========================================

const eventos = [
  {
    hora: "1:00",
    periodo: "P. M.",
    titulo: "Celebración Eucarística",
    descripcion:
      "Uniremos nuestras vidas ante Dios, rodeados del amor de nuestras familias.",
    icono: Church,
  },
  {
    hora: "3:00",
    periodo: "P. M.",
    titulo: "Recepción",
    descripcion:
      "Te esperamos para dar inicio a esta celebración tan especial.",
    icono: Wine,
  },
  {
    hora: "3:30",
    periodo: "P. M.",
    titulo: "Comida",
    descripcion:
      "Compartiremos la mesa y brindaremos por los momentos que están por venir.",
    icono: UtensilsCrossed,
  },
  {
    hora: "5:00",
    periodo: "P. M.",
    titulo: "Primer baile",
    descripcion:
      "Nuestro primer baile como esposos, un momento lleno de amor.",
    icono: Music2,
  },
  {
    hora: "6:00",
    periodo: "P. M.",
    titulo: "Fiesta 🥳",
    descripcion:
      "¡Es momento de bailar, celebrar y crear recuerdos inolvidables!",
    icono: PartyPopper,
  },
];

// ==========================================
// COLORES
// ==========================================

const COLORES = {
  cafe: "#B09D87",
  marfil: "#FCFAEF",
  champagne: "#E5CCB0",
  textoClaro: "#FFFDF8",
  textoSuave: "#F4E9DA",
  cafeOscuro: "#766A5F",
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
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
        stroke="#FCFAEF"
        strokeWidth="1.1"
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

      <g
        fill="#FCFAEF"
        stroke="#E5CCB0"
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
      className="h-12 w-14 text-[#FCFAEF]"
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
      <span className="h-px w-10 bg-[#FCFAEF]/75 sm:w-14" />

      <span
        className="
          h-[5px]
          w-[5px]
          rotate-45
          bg-[#FCFAEF]
        "
      />

      <span className="h-px w-10 bg-[#FCFAEF]/75 sm:w-14" />
    </div>
  );
}

// ==========================================
// EVENTO DEL ITINERARIO
// ==========================================

function EventoItinerario({ evento, index, total }) {
  const Icono = evento.icono;
  const esUltimo = index === total - 1;

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
        duration: 0.85,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        grid
        grid-cols-[65px_36px_minmax(0,1fr)]
        gap-x-3
        sm:grid-cols-[105px_48px_minmax(0,1fr)]
        sm:gap-x-6
        md:grid-cols-[145px_56px_minmax(0,1fr)]
        md:gap-x-8
      "
    >
      {/* HORA */}

      <div className="pt-2 text-right sm:pt-3">
        <p
          className="
            whitespace-nowrap
            font-serif
            text-[22px]
            leading-none
            text-[#FCFAEF]
            sm:text-3xl
            md:text-4xl
          "
        >
          {evento.hora}
        </p>

        <p
          className="
            mt-2
            text-[9px]
            uppercase
            tracking-[0.16em]
            text-[#F4E9DA]
            sm:text-[10px]
          "
        >
          {evento.periodo}
        </p>
      </div>

      {/* LÍNEA CENTRAL */}

      <div className="relative flex flex-col items-center">
        {!esUltimo && (
          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-7
              w-px
              -translate-x-1/2
              bg-[#FCFAEF]/65
              sm:top-10
            "
          />
        )}

        {/* ÍCONO */}

        <div
          className="
            relative
            z-10
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[#FCFAEF]
            bg-[#FCFAEF]
            text-[#8F7D68]
            sm:h-12
            sm:w-12
          "
        >
          <Icono
            size={18}
            strokeWidth={1.3}
            className="sm:h-[22px] sm:w-[22px]"
          />
        </div>
      </div>

      {/* INFORMACIÓN */}

      <div
        className={`
          min-w-0
          pt-1
          ${esUltimo ? "pb-0" : "pb-12 sm:pb-16"}
        `}
      >
        <h3
          className="
            font-serif
            text-[clamp(1.35rem,4vw,2rem)]
            font-normal
            leading-snug
            text-[#FCFAEF]
          "
        >
          {evento.titulo}
        </h3>

        <p
          className="
            mt-3
            max-w-md
            text-[13px]
            leading-relaxed
            text-[#F4E9DA]
            sm:text-[15px]
          "
        >
          {evento.descripcion}
        </p>

        {!esUltimo && (
          <span
            className="
              mt-7
              block
              h-px
              w-12
              bg-[#FCFAEF]/50
            "
          />
        )}
      </div>
    </motion.article>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function ItinerarioPremium() {
  return (
    <section
      id="itinerario"
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#B09D87]
        px-5
        py-20
        sm:px-8
        sm:py-24
        md:py-28
      "
    >
      {/* DECORACIÓN SUPERIOR */}

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

      {/* DECORACIÓN INFERIOR */}

      <RamaBotanica
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-14
          z-0
          w-[180px]
          opacity-40
          sm:w-[240px]
          md:w-[300px]
        "
      />

      {/* CONTENIDO */}

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* ENCABEZADO */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.25,
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
              tracking-[0.32em]
              text-[#F4E9DA]
              sm:text-xs
            "
          >
            Programa de celebración
          </p>

          <h2
            className="
              mt-4
              font-serif
              text-[clamp(2.1rem,7vw,3.8rem)]
              font-normal
              uppercase
              leading-tight
              tracking-[0.08em]
              text-[#FCFAEF]
            "
          >
            Itinerario
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
              text-[#F4E9DA]
              sm:text-xl
            "
          >
            Cada momento ha sido preparado
            para compartirlo contigo.
          </p>
        </motion.div>

        {/* LÍNEA DE TIEMPO */}

        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-3xl
            sm:mt-20
          "
        >
          {eventos.map((evento, index) => (
            <EventoItinerario
              key={evento.titulo}
              evento={evento}
              index={index}
              total={eventos.length}
            />
          ))}
        </div>

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
          transition={{
            duration: 0.9,
          }}
          className="
            mx-auto
            mt-16
            flex
            max-w-xl
            flex-col
            items-center
            text-center
            sm:mt-20
          "
        >
          <DivisorElegante />

          <p
            className="
              mt-6
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#F4E9DA]
            "
          >
            Te esperamos
          </p>

          <p
            className="
              mt-4
              font-serif
              text-xl
              italic
              leading-relaxed
              text-[#FCFAEF]
              sm:text-2xl
            "
          >
            Para celebrar juntos cada instante.
          </p>

          <Heart
            size={15}
            fill="#FCFAEF"
            strokeWidth={1}
            className="mt-6 text-[#FCFAEF]"
          />
        </motion.div>
      </div>
    </section>
  );
}
