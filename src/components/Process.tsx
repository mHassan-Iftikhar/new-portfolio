import { useState, useEffect } from "react";

const heading = {
  title: "A process tuned for momentum",
  subtitle:
    "Design, build, polish, and stay in sync. Nothing gets lost in the handoff.",
};

const steps = [
  {
    id: 1,
    number: 1,
    badgeColor: "#2563eb",
    highlight: "Designing",
    text: "with top notch attention to detail for every pixel.",
  },
  {
    id: 2,
    number: 2,
    badgeColor: "#d97706",
    highlight: "Development",
    text: "with the latest stack and tools, performance optimized and scalable.",
  },
];

const cursorPoint = {
  x: 168,
  y: 195,
  label: "Hassan",
};

const avatarSrc = "/assets/hassan.png";

const mobileImages = [
  "/assets/image1.png",
  "/assets/image2.png",
  "/assets/image3.png",
  "/assets/image4.png",
];

type Step = {
  id: number;
  number: number;
  badgeColor: string;
  highlight: string;
  text: string;
};


/* =========================================================
   FIGMA PANEL
   ========================================================= */

function FigmaPanel() {
  return (
    <div className="relative w-full h-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex">

      {/* ================= SIDEBAR ================= */}

      <div className="w-27.5 shrink-0 border-r border-slate-100 bg-white px-3 py-3 text-[9px]">

        <div className="flex items-center justify-between mb-3">
          <span className="text-slate-800 font-bold text-[11px]">
            F
          </span>

          <span className="text-slate-300">
            ▤
          </span>
        </div>

        <p className="font-semibold text-slate-800 text-[9px]">
          Agency v2.2
        </p>

        <div className="flex items-center gap-1 mt-1 mb-2">

          <span className="text-slate-400 text-[8px]">
            Drafts
          </span>

          <span className="bg-blue-50 text-blue-500 text-[7px] font-semibold px-1 rounded">
            Pro
          </span>

        </div>

        <div className="flex gap-1 mb-2">

          <span className="bg-slate-100 text-slate-600 text-[8px] px-1.5 py-0.5 rounded">
            File
          </span>

          <span className="text-slate-400 text-[8px] px-1.5 py-0.5">
            Assets
          </span>

        </div>

        <p className="text-slate-400 text-[8px] font-medium mb-1">
          Pages
        </p>

        {[
          "Blog",
          "Home",
          "About",
          "Contact",
          "Services",
          "Pitch Deck",
          "Animations",
        ].map((page) => (

          <div
            key={page}
            className="flex items-center gap-1 py-[3px] text-slate-500 text-[8px]"
          >

            <span className="w-2 h-2 border border-slate-300 rounded-[2px] inline-block" />

            {page}

          </div>

        ))}

      </div>


      {/* ================= CANVAS ================= */}

      <div className="relative max-w-full flex-1 bg-slate-50 p-3 flex gap-3 items-start overflow-hidden">

        {/* Main phone */}
        <div className="w-32.5 h-full bg-white rounded-md shadow-sm border border-slate-200 flex flex-col">

          <div className="h-4 border-b border-slate-100 flex items-center px-2">

            <div className="w-6 h-1 bg-slate-200 rounded-full ml-auto" />

          </div>

          <div className="flex-1" />

          <div className="px-3 pb-3 space-y-1">

            <div className="h-1 bg-slate-200 rounded w-full" />

            <div className="h-1 bg-slate-200 rounded w-full" />

            <div className="h-1 bg-slate-200 rounded w-2/3" />

            <div className="h-5 bg-slate-300 rounded-full w-full mt-2" />

          </div>

        </div>


        {/* Small card */}
        <div className="w-22.5 h-[110px] bg-white rounded-md shadow-sm border border-slate-200 p-2 space-y-2">

          <div className="flex gap-1">

            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="w-1 h-1 rounded-full bg-slate-300" />

          </div>

          <div className="w-4 h-4 rounded-full bg-slate-200" />

          <div className="h-1 bg-slate-200 rounded w-full" />

          <div className="h-1 bg-slate-200 rounded w-full" />

        </div>


        {/* Tall frame */}
        <div className="w-[55px] h-[95px] bg-white rounded-md shadow-sm border border-slate-200 p-2">

          <div className="w-full h-full border border-slate-100 rounded" />

        </div>


        {/* Cursor */}
        <div
          className="absolute z-30 pointer-events-none animate-[cursorMove_4s_ease-in-out_infinite]"
          style={{
            left: 0,
            top: 0,
          }}
        >

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{
              filter:
                "drop-shadow(0 2px 3px rgba(0,0,0,0.25))",
            }}
          >

            <path
              d="M4 2.5C4 1.9 4.7 1.6 5.2 2L16 10.2C16.5 10.6 16.3 11.4 15.7 11.5L11.2 12.2C10.9 12.2 10.7 12.4 10.6 12.7L8.9 16.8C8.7 17.4 7.8 17.4 7.6 16.8L4.1 3.1C4 2.9 4 2.7 4 2.5Z"
              fill="white"
              stroke="#e2e8f0"
              strokeWidth="0.75"
              strokeLinejoin="round"
            />

          </svg>


          {/* Hassan */}
          <div className="absolute left-3 top-3 flex items-center justify-center gap-1.5 bg-white text-slate-800 text-[9px] font-medium px-3 py-1 rounded-md shadow-md border border-slate-100 whitespace-nowrap animate-[cursorLabel_4s_ease-in-out_infinite]">

            <img
              src={avatarSrc}
              alt="Hassan"
              className="w-4 h-4 rounded-sm object-cover"
            />

            Hassan

          </div>

        </div>

      </div>


      {/* Figma animations */}
      <style>{`

        @keyframes cursorMove {

          0% {
            transform: translate(30px, 30px);
            opacity: 0;
          }

          12% {
            opacity: 1;
          }

          40% {
            transform: translate(${cursorPoint.x}px, ${cursorPoint.y}px);
            opacity: 1;
          }

          75% {
            transform: translate(${cursorPoint.x}px, ${cursorPoint.y}px);
            opacity: 1;
          }

          90% {
            opacity: 0;
          }

          100% {
            transform: translate(30px, 30px);
            opacity: 0;
          }

        }


        @keyframes cursorLabel {

          0% {
            opacity: 0;
            transform: translateY(4px);
          }

          35% {
            opacity: 0;
            transform: translateY(4px);
          }

          45% {
            opacity: 1;
            transform: translateY(0);
          }

          75% {
            opacity: 1;
            transform: translateY(0);
          }

          88% {
            opacity: 0;
            transform: translateY(4px);
          }

          100% {
            opacity: 0;
            transform: translateY(4px);
          }

        }

      `}</style>

    </div>
  );
}


/* =========================================================
   MOBILE FRAME
   ========================================================= */

function MobileFrame({
  src,
  animationKey,
}: {
  src: string;
  animationKey: number;
}) {

  const [islandOpen, setIslandOpen] = useState(false);


  useEffect(() => {

    /*
     * Every time a new device reaches the viewport:
     *
     * 0ms    = closed island
     * 400ms  = expand island
     * 1800ms = close island
     */

    setIslandOpen(false);

    const openTimer = setTimeout(() => {
      setIslandOpen(true);
    }, 400);

    const closeTimer = setTimeout(() => {
      setIslandOpen(false);
    }, 1800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };

  }, [animationKey]);


  return (

    <div
      className="
        relative
        w-[130px]
        h-[260px]
        shrink-0
        bg-[#f8f9fa]
        rounded-[26px]
        border
        border-slate-300
        shadow-sm
        overflow-hidden
      "
    >

      {/* =================================================
          DYNAMIC ISLAND
         ================================================= */}

      <div
        className={`
          absolute
          z-30
          top-[14px]
          left-1/2
          -translate-x-1/2
          bg-black
          flex
          items-center
          justify-center
          overflow-hidden
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            islandOpen
              ? "w-[64px] h-[18px] rounded-full"
              : "w-[20px] h-[10px] rounded-full"
          }
        `}
      >

        {/* Closed island */}
        <div
          className={`
            absolute
            inset-0
            flex
            items-center
            justify-center
            transition-all
            duration-300

            ${
              islandOpen
                ? "opacity-0 scale-50"
                : "opacity-100 scale-100"
            }
          `}
        >

          <span className="w-[3px] h-[3px] bg-slate-500 rounded-full" />

        </div>


        {/* Expanded island */}
        <div
          className={`
            absolute
            inset-0
            flex
            items-center
            justify-center
            gap-2
            transition-all
            duration-300

            ${
              islandOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }
          `}
        >

          <span className="text-white text-[6px] font-medium">
            100%
          </span>


          {/* Battery */}
          <div className="relative w-[13px] h-[7px] border border-white rounded-[2px] p-[1px]">

            <div className="w-full h-full bg-white rounded-[1px]" />

            <div className="absolute -right-[2px] top-[1px] w-[1.5px] h-[3px] bg-white rounded-r" />

          </div>

        </div>

      </div>


      {/* =================================================
          CENTER IMAGE
         ================================================= */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[92px]
          h-[92px]
          rounded-md
          overflow-hidden
          bg-white
          border
          border-slate-200
        "
      >

        <img
          src={src}
          alt="Mobile preview"
          className="w-full h-full object-cover"
          draggable={false}
        />

      </div>


      {/* =================================================
          HOME INDICATOR
         ================================================= */}

      <div
        className="
          absolute
          bottom-[10px]
          left-1/2
          -translate-x-1/2
          w-10
          h-1
          bg-slate-300
          rounded-full
        "
      />

    </div>
  );
}


/* =========================================================
   DEVICE PANEL
   ========================================================= */

function DevicePanel() {

  const [index, setIndex] = useState(0);


  const DEVICE_WIDTH = 130;
  const DEVICE_HEIGHT = 260;


  /*
   * IMPORTANT:
   *
   * The first image is duplicated at the end.
   *
   * 1 → 2 → 3 → 4 → 1
   *
   * This allows the animation to always move UP.
   */

  const devices = [
    ...mobileImages,
    mobileImages[0],
  ];


  /* =======================================================
     MOVE TO NEXT DEVICE EVERY 3 SECONDS
     ======================================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((current) => current + 1);

    }, 3000);

    return () => {
      clearInterval(interval);
    };

  }, []);


  /* =======================================================
     SEAMLESS RESET
     ======================================================= */

  useEffect(() => {

    /*
     * index === 4 means we are showing
     * the duplicated first device.
     *
     * Wait until the upward animation finishes,
     * then instantly return to the real first device.
     */

    if (index === mobileImages.length) {

      const resetTimer = setTimeout(() => {

        setIndex(0);

      }, 750);

      return () => {
        clearTimeout(resetTimer);
      };
    }

  }, [index]);


  return (

    <div
      className="
        relative
        w-full
        h-full
        bg-white
        rounded-xl
        border
        border-slate-200
        overflow-hidden
        shadow-sm
        flex
        items-center
        justify-center
      "
    >

      {/* =================================================
          VIEWPORT
         ================================================= */}

      <div
        className="relative overflow-hidden shrink-0"
        style={{
          width: `${DEVICE_WIDTH}px`,
          height: `${DEVICE_HEIGHT}px`,
        }}
      >


        {/* =================================================
            DEVICE TRACK
           ================================================= */}

        <div
          className={`
            absolute
            left-0
            top-0
            flex
            flex-col
            items-center
            ${
              index === mobileImages.length
                ? "transition-none"
                : "transition-transform duration-750 ease-[cubic-bezier(0.65,0,0.35,1)]"
            }
          `}
          style={{
            width: `${DEVICE_WIDTH}px`,
            transform: `translate3d(0, -${
              index * DEVICE_HEIGHT
            }px, 0)`,
          }}
        >

          {devices.map((image, deviceIndex) => (

            <div
              key={`${image}-${deviceIndex}`}
              className="shrink-0 flex items-center justify-center"
              style={{
                width: `${DEVICE_WIDTH}px`,
                height: `${DEVICE_HEIGHT}px`,
              }}
            >

              <MobileFrame
                src={image}
                animationKey={deviceIndex}
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   STEP LABEL
   ========================================================= */

function StepLabel({
  step,
}: {
  step: Step;
}) {

  return (

    <div className="flex items-start gap-3">

      <span
        className="
          w-6
          h-6
          shrink-0
          rounded-md
          text-white
          text-xs
          font-bold
          flex
          items-center
          justify-center
        "
        style={{
          backgroundColor: step.badgeColor,
        }}
      >
        {step.number}
      </span>


      <p className="text-slate-500 text-sm leading-snug">

        <span className="font-bold text-slate-900">
          {step.highlight}
        </span>{" "}

        {step.text}

      </p>

    </div>
  );
}


/* =========================================================
   MAIN PROCESS COMPONENT
   ========================================================= */

export default function Process() {

  return (

    <div
      className="w-full py-14 px-6"
      style={{
        backgroundColor: "#fafafa",

        backgroundImage:
          "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",

        backgroundSize: "22px 22px",
      }}
    >

      <div className="max-w-5xl mx-auto">


        {/* =================================================
            HEADING
           ================================================= */}

        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          {heading.title}
        </h2>


        <p className="text-slate-500 text-sm max-w-md mb-8">
          {heading.subtitle}
        </p>


        {/* =================================================
            DESIGN PANELS
           ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">


          {/* ===============================================
              FIRST PANEL
             =============================================== */}

          <div className="h-75">
            <FigmaPanel />
          </div>


          {/* ===============================================
              SECOND PANEL
             =============================================== */}

          <div className="h-75">
            <DevicePanel />
          </div>


        </div>


        {/* =================================================
            STEP LABELS
           ================================================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {steps.map((step) => (

            <StepLabel
              key={step.id}
              step={step}
            />

          ))}

        </div>

      </div>

    </div>
  );
}