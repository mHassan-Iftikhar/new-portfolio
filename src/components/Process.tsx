import { useState, useEffect } from "react";

type Step = {
  id: number;
  number: number;
  badgeColor: string;
  highlight: string;
  text: string;
};

const heading = {
  title: "A process built for momentum",
  subtitle:
    "Design, build, refine, and stay aligned. Every step moves the work forward.",
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
  {
    id: 3,
    number: 3,
    badgeColor: "#0f766e",
    highlight: "Optimized",
    text: "for clarity, speed, and decisions that keep momentum strong.",
  },
  {
    id: 4,
    number: 4,
    badgeColor: "#7c3aed",
    highlight: "Deliver",
    text: "with a smooth launch, hosting setup, and reliable deployment.",
  },
];

const cursorPoint = {
  x: 168,
  y: 195,
};

const avatarSrc = "/assets/hassan.png";

const mobileImages = [
  "/assets/image1.png",
  "/assets/image2.png",
  "/assets/image3.png",
  "/assets/image4.png",
];

/* =========================================================
   FIGMA PANEL
   ========================================================= */

function FigmaPanel() {
  return (
    <div className="relative flex h-full w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="w-27.5 shrink-0 border-r border-slate-100 bg-white px-3 py-3 text-[9px]">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-2xl font-bold text-slate-800"><img className="w-2" src="/assets/process-images/figma.png" alt="Figma Logo" /></span>
          <span className="text-slate-300">▤</span>
        </div>

        <p className="text-[9px] font-semibold text-slate-800">
          Agency v2.2
        </p>

        <div className="mt-1 mb-2 flex items-center gap-1">
          <span className="text-[8px] text-slate-400">Drafts</span>

          <span className="rounded bg-blue-50 px-1 text-[7px] font-semibold text-blue-500">
            Pro
          </span>
        </div>

        <div className="mb-2 flex gap-1">
          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[8px] text-slate-600">
            File
          </span>

          <span className="px-1.5 py-0.5 text-[8px] text-slate-400">
            Assets
          </span>
        </div>

        <p className="mb-1 text-[8px] font-medium text-slate-400">
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
            className="flex items-center gap-1 py-[3px] text-[8px] text-slate-500"
          >
            <span className="inline-block h-2 w-2 rounded-[2px] border border-slate-300" />
            {page}
          </div>
        ))}
      </div>

      <div className="relative flex max-w-full flex-1 items-start gap-3 overflow-hidden bg-slate-50 p-3">
        <div className="flex h-full w-32.5 shrink-0 flex-col rounded-md border border-slate-200 bg-white shadow-sm">
          <div className="flex h-4 items-center border-b border-slate-100 px-2">
            <div className="ml-auto h-1 w-6 rounded-full bg-slate-200" />
          </div>

          <div className="flex-1" />

          <div className="space-y-1 px-3 pb-3">
            <div className="h-1 w-full rounded bg-slate-200" />
            <div className="h-1 w-full rounded bg-slate-200" />
            <div className="h-1 w-2/3 rounded bg-slate-200" />
            <div className="mt-2 h-5 w-full rounded-full bg-slate-300" />
          </div>
        </div>

        <div className="h-[110px] w-22.5 space-y-2 rounded-md border border-slate-200 bg-white p-2 shadow-sm">
          <div className="flex gap-1">
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="h-1 w-1 rounded-full bg-slate-300" />
          </div>

          <div className="h-4 w-4 rounded-full bg-slate-200" />

          <div className="h-1 w-full rounded bg-slate-200" />
          <div className="h-1 w-full rounded bg-slate-200" />
        </div>

        <div className="h-[95px] w-[55px] rounded-md border border-slate-200 bg-white p-2 shadow-sm">
          <div className="h-full w-full rounded border border-slate-100" />
        </div>

        <div
          className="pointer-events-none absolute z-30"
          style={{
            left: 0,
            top: 0,
            animation: "cursorMove 4s ease-in-out infinite",
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

          <div
            className="absolute left-3 top-3 flex items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-slate-100 bg-white px-3 py-1 text-[9px] font-medium text-slate-800 shadow-md"
            style={{
              animation:
                "cursorLabel 4s ease-in-out infinite",
            }}
          >
            <img
              src={avatarSrc}
              alt="Hassan"
              className="h-4 w-4 rounded-sm object-cover"
            />
            Hassan
          </div>
        </div>
      </div>

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

function FeaturePanel({
  title,
  description,
  variant,
}: {
  title: string;
  description: string;
  variant: "optimized" | "deliver";
}) {
  const isOptimized = variant === "optimized";

  return (
    <div className="flex h-full w-full items-center justify-center rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {isOptimized ? (
        <svg
          viewBox="0 0 24 24"
          className="h-24 w-24 text-slate-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Optimized bolt icon"
        >
          <path d="M13 2 5 13h5l-1 9 8-11h-5l2-9Z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 120 120"
          className="h-24 w-24 text-slate-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Hosting deployment icon"
        >
          <path d="M34 38 20 52l14 14" />
          <path d="M86 38l14 14-14 14" />
          <path d="M53 32l14 40" />
          <rect x="16" y="78" width="88" height="18" rx="4" />
          <path d="M30 87h60" />
        </svg>
      )}
    </div>
  );
}

function DynamicIsland({
  active,
  size = "mobile",
}: {
  active: boolean;
  size?: "mobile" | "tablet" | "laptop";
}) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);

    if (!active) return;

    // Open Dynamic Island
    const openTimer = setTimeout(() => {
      setExpanded(true);
    }, 500);

    // Close before changing device
    const closeTimer = setTimeout(() => {
      setExpanded(false);
    }, 2400);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, [active]);

  const dimensions = {
    mobile: {
      closed: "h-[10px] w-[22px]",
      open: "h-[18px] w-[65px]",
      top: "top-[12px]",
      text: "text-[6px]",
    },

    tablet: {
      closed: "h-[8px] w-[20px]",
      open: "h-[16px] w-[58px]",
      top: "top-[8px]",
      text: "text-[5px]",
    },

    laptop: {
      closed: "h-[7px] w-[18px]",
      open: "h-[14px] w-[52px]",
      top: "top-[6px]",
      text: "text-[5px]",
    },
  };

  const d = dimensions[size];

  return (
    <div
      className={`
        absolute
        left-1/2
        z-30
        flex
        -translate-x-1/2
        items-center
        justify-center
        overflow-hidden
        bg-black
        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]
        ${d.top}

        ${
          expanded
            ? `${d.open} rounded-full`
            : `${d.closed} rounded-full`
        }
      `}
    >
      {/* Closed state */}

      <div
        className={`
          absolute
          flex
          items-center
          justify-center
          transition-all
          duration-300

          ${
            expanded
              ? "scale-50 opacity-0"
              : "scale-100 opacity-100"
          }
        `}
      >
        <span className="h-0.75 w-0.75 rounded-full bg-slate-500" />
      </div>

      {/* Expanded state */}

      <div
        className={`
          flex
          items-center
          justify-center
          gap-2
          whitespace-nowrap
          transition-all
          duration-300

          ${
            expanded
              ? "scale-100 opacity-100"
              : "scale-75 opacity-0"
          }
        `}
      >
        <span
          className={`${d.text} font-medium text-white`}
        >
          100%
        </span>

        {/* Battery */}

        <div className="relative h-[7px] w-[13px] rounded-[2px] border border-white p-[1px]">
          <div className="h-full w-full rounded-[1px] bg-white" />

          <div className="absolute -right-[2px] top-[1px] h-[3px] w-[1.5px] rounded-r bg-white" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   IPHONE
   ========================================================= */

function MobileFrame({
  src,
  isActive,
}: {
  src: string;
  isActive: boolean;
}) {
  return (
    <div
      className="
        relative
        h-60
        w-32.5
        md:h-65
        md:w-32.5
        shrink-0
        overflow-hidden
        rounded-[28px]
        border
        border-slate-300
        bg-[#f8f9fa]
        shadow-[0_15px_40px_rgba(15,23,42,0.15)]
      "
    >
      <DynamicIsland
        active={isActive}
        size="mobile"
      />

      {/* Screen */}

      <div
        className="
          absolute
          top-7
          right-1.5
          bottom-5
          left-1.5
          overflow-hidden
          rounded-[20px]
          bg-white
        "
      >
        <img
          src={src}
          alt="iPhone preview"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Home indicator */}

      <div
        className="
          absolute
          bottom-2.25
          left-1/2
          h-1
          w-10
          -translate-x-1/2
          rounded-full
          bg-slate-300
        "
      />
    </div>
  );
}

/* =========================================================
   TABLET
   ========================================================= */

function TabletFrame({
  src,
  isActive,
}: {
  src: string;
  isActive: boolean;
}) {
  return (
    <div
      className="
        relative
        h-44
        w-72
        md:h-55
        md:w-82.5
        shrink-0
        overflow-hidden
        rounded-[22px]
        border
        border-slate-300
        bg-slate-100
        shadow-[0_15px_40px_rgba(15,23,42,0.15)]
      "
    >
      <DynamicIsland
        active={isActive}
        size="tablet"
      />

      {/* Screen */}

      <div
        className="
          absolute
          top-3
          right-2.5
          bottom-3
          left-2.5
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
        "
      >
        <img
          src={src}
          alt="Tablet preview"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

/* =========================================================
   LAPTOP
   ========================================================= */

function LaptopFrame({
  src,
  isActive,
}: {
  src: string;
  isActive: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      {/* Laptop screen */}

      <div
        className="
          relative
          h-45
          w-70
          md:h-47.5
          md:w-[320px]
          overflow-hidden
          rounded-t-xl
          border
          border-slate-300
          bg-slate-100
          shadow-[0_15px_40px_rgba(15,23,42,0.15)]
        "
      >
        <DynamicIsland
          active={isActive}
          size="laptop"
        />

        <img
          src={src}
          alt="Laptop preview"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Laptop base */}

      <div
        className="
          relative
          h-3
          w-80
          md:w-90
          rounded-b-xl
          border
          border-slate-300
          bg-slate-200
        "
      >
        <div
          className="
            absolute
            top-0
            left-1/2
            h-1
            w-12
            -translate-x-1/2
            rounded-b
            bg-slate-300
          "
        />
      </div>
    </div>
  );
}

/* =========================================================
   DEVICE PANEL
   ========================================================= */

function DevicePanel() {
  const [index, setIndex] = useState(0);

  const devices = [
    {
      type: "mobile",
      image: mobileImages[0],
    },
    {
      type: "tablet",
      image: mobileImages[1],
    },
    {
      type: "laptop",
      image: mobileImages[2],
    },
  ];

  const SLOT_HEIGHT = 300;

  /* Change device every 3 seconds */

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => {
        return (current + 1) % devices.length;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* DEVICE VIEWPORT */}

      <div className="absolute inset-0 overflow-hidden">
        {/* DEVICE TRACK */}

        <div
          className="
            absolute
            top-0
            left-0
            flex
            w-full
            flex-col
            transition-transform
            duration-700
            ease-[cubic-bezier(0.65,0,0.35,1)]
          "
          style={{
            transform: `translateY(-${index * SLOT_HEIGHT}px)`,
          }}
        >
          {devices.map((device, deviceIndex) => {
            const active = deviceIndex === index;

            return (
              <div
                key={device.type}
                className="
                  flex
                  w-full
                  shrink-0
                  items-center
                  justify-center
                "
                style={{
                  height: `${SLOT_HEIGHT}px`,
                }}
              >
                {device.type === "mobile" && (
                  <MobileFrame
                    src={device.image}
                    isActive={active}
                  />
                )}

                {device.type === "tablet" && (
                  <TabletFrame
                    src={device.image}
                    isActive={active}
                  />
                )}

                {device.type === "laptop" && (
                  <LaptopFrame
                    src={device.image}
                    isActive={active}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* TOP FADE */}

      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-0
          z-20
          h-12
          w-full
          bg-gradient-to-b
          from-white
          via-white/70
          to-transparent
        "
      />

      {/* BOTTOM FADE */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          h-16
          w-full
          bg-linear-to-t
          from-white
          via-white/70
          to-transparent
        "
      />
    </div>
  );
}

/* =========================================================
   STEP LABEL
   ========================================================= */

function StepLabel({ step }: { step: Step }) {
  return (
    <div className="mt-3 flex items-center gap-3">
      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-md
          text-sm
          font-bold
          text-white
        "
        style={{
          backgroundColor: step.badgeColor,
        }}
      >
        {step.number}
      </span>

      <p className="text-sm leading-snug text-slate-500">
        <span className="font-bold text-slate-900">
          {step.highlight}
        </span>{" "}
        {step.text}
      </p>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function Process() {
  return (
    <div
      className="w-full px-2 py-14"
      style={{
        backgroundColor: "#fafafa",
        backgroundImage:
          "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}

        <h2 className="mb-2 text-2xl font-medium text-slate-800">
          {heading.title}
        </h2>

        <p className="mb-8 max-w-md text-sm text-slate-500">
          {heading.subtitle}
        </p>

        {/* Panels */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {[
            {
              step: steps[0],
              panel: <FigmaPanel />,
            },
            {
              step: steps[1],
              panel: <DevicePanel />,
            },
            {
              step: steps[2],
              panel: (
                <FeaturePanel
                  title="Built for speed"
                  description="Clear systems and streamlined execution keep the work moving without friction."
                  variant="optimized"
                />
              ),
            },
            {
              step: steps[3],
              panel: (
                <FeaturePanel
                  title="Deliver"
                  description=""
                  variant="deliver"
                />
              ),
            },
          ].map(({ step, panel }) => (
            <div key={step.id} className="flex flex-col">
              <div className="h-75">{panel}</div>
              <StepLabel step={step} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}