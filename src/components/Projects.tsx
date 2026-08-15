import { useState, useEffect } from "react";
import {projects}  from "../lib/lib";

const marqueeImages = [...projects, ...projects, ...projects];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [hovered]);

  const active = projects[index];

  return (
    <div
      className="relative w-full h-auto py-20 overflow-hidden select-none"
      style={{
        backgroundColor: "#fafafa",
        backgroundImage: "radial-gradient(circle, #d4d4d8 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      {/* edge fades over the marquee */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#fafafa] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#fafafa] to-transparent z-20" />

      {/* heading */}
      <div className="relative z-10 text-center px-4 mb-10">
        <h2 className="text-2xl sm:text-2xl font-medium text-slate-800 tracking-tight leading-tight">
          A few projects I've enjoyed
          <br />
          <span className="bg-blue-600 text-white">building,</span> from concept to launch..
        </h2>
      </div>

      {/* marquee track, moving right -> left, sits behind the big card */}
      <div className="relative h-75 max-w-full mx-auto flex items-center">
        <div className="absolute inset-0 flex items-center overflow-hidden">
          <div className="flex gap-6 animate-[marquee_30s_linear_infinite]">
            {marqueeImages.map((p, i) => (
              <div
                key={`${p.id}-${i}`}
                className="w-50 h-auto md:w-55 md:h-32.5 rounded-xl overflow-hidden shadow-md border border-black/5 shrink-0 opacity-40"
              >
                <img
                  src={p.image}
                  alt=""
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* featured center card */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative z-20 mx-auto rounded-2xl overflow-hidden shadow-2xl border border-black/5 bg-white cursor-pointer w-80 h-auto md:w-150 md:h-75 flex flex-col items-center justify-center transition-all duration-500 ease-out"
          // style={{ width: 600, height: 300 }}
        >
          <img
            key={active.id}
            src={active.image}
            alt={active.title}
            className="w-full h-full object-cover animate-[fadein_0.6s_ease]"
            draggable={false}
          />

          {/* bottom info panel that grows up from the bottom on hover */}
          <div
            className="absolute left-0 right-0 bottom-0 bg-white px-6 flex flex-col justify-center overflow-hidden transition-all duration-500 ease-out"
            style={{
              height: hovered ? "45%" : "0%",
              paddingTop: hovered ? 16 : 0,
              paddingBottom: hovered ? 16 : 0,
            }}
          >
            <h3
              className="text-base font-bold text-slate-900 mb-1 transition-all duration-500"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(8px)",
              }}
            >
              {active.title}
            </h3>
            <p
              className="text-sm text-slate-500 leading-relaxed transition-all duration-500 delay-75"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "translateY(0)" : "translateY(8px)",
              }}
            >
              {active.description}
            </p>
          </div>
        </div>
      </div>

      {/* dots */}
      <div className="relative z-10 flex items-center justify-center gap-2 mt-8">
        {projects.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setIndex(i)}
            aria-label={`Show ${p.title}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              width: i === index ? 22 : 7,
              backgroundColor: i === index ? "#2563eb" : "#d4d4d8",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}