import { WORKS } from "../lib/lib";

const Work = () => {
  return (
    <div className="w-full max-w-full h-auto flex flex-col items-center justify-center py-10 border border-black/5 border-b-2 px-2.5">
      <div className="max-w-full w-full flex flex-col items-center justify-center gap-6">

        {/* Heading */}
        <div className="text-2xl font-medium text-black/90 tracking-tighter mb-6">
          Selected{" "}
          <span className="bg-blue-600 text-white">works</span>
        </div>

        {/* Works List */}
        <div className="w-full max-w-full md:w-[70%] divide-y divide-black/10">
          {WORKS.map((work) => (
            <div
              key={work.name}
              className="w-full max-w-full flex items-center justify-between gap-4 py-5"
            >
              {/* Work Name */}
              <div className="flex flex-col min-w-0">
                <h3 className="text-lg font-medium text-black/90 truncate">
                  {work.name}
                </h3>

                {/* Description */}
                {/*
                {work.description && (
                  <p className="text-base text-black/50 mt-1">
                    {work.description}
                  </p>
                )}
                */}
              </div>

              {/* View Button */}
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    bg-black/5
                    px-4
                    py-2
                    text-black/90
                    hover:bg-black/15
                    transition-colors
                    duration-300
                    shrink-0
                  "
                >
                  <span className="text-sm font-medium">
                    View
                  </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 3h7v7m0-7L10 14"
                    />

                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 5H5a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;