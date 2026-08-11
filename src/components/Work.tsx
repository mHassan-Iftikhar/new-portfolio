import { WORKS } from "../lib/lib";

const Work = () => {
  return (
    <div className="w-full max-w-full h-auto flex flex-col items-center justify-center py-10 border border-black/5 border-b-2 px-2.5">
      <div className="w-full max-w-full flex flex-col items-center justify-center gap-6">
        <div className="text-2xl font-medium text-black/90 tracking-tighter mb-6">
          Selected <span className="bg-blue-600 text-white">works</span>
        </div>

        <div className="w-[70%] divide-y divide-black/10">
          {WORKS.map((work) => (
            <div
              key={work.name}
              className="flex items-center justify-between gap-4 py-5"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-medium text-black/90">
                  {work.name}
                </h3>

                {/* {work.description && (
                  <p className="text-base text-black/50 mt-1">
                    {work.description}
                  </p>
                )} */}
              </div>

              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-black/5 px-4 py-2 text-black/90 hover:bg-black/15 transition-colors duration-300 shrink-0"
                >
                  <span className="text-sm font-medium">View</span>
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