const SERVICES = [
  {
    title: "Web design and development",
    description:
      "We design and build with love, care and attention to detail.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 7.5A1.5 1.5 0 014.5 6h15A1.5 1.5 0 0121 7.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 16.5v-9z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.5h18" />
      </svg>
    ),
  },
  {
    title: "Mobile Responsive",
    description:
      "We make sure your website is responsive and looks great on all devices.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5h3m-7.5 0h12A1.5 1.5 0 0119.5 3v18a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 014.5 21V3A1.5 1.5 0 016 1.5z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "Dark and Light Mode",
    description:
      "We make sure your website is accessible and looks great in both modes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a6 6 0 016 6c0 4-3.5 7-6 9-2.5-2-6-5-6-9a6 6 0 016-6z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 10.5h.01M14.5 10.5h.01"
        />
      </svg>
    ),
  },
  {
    title: "Latest Tech Stack",
    description:
      "We use the latest and greatest technologies to build your website.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14"
        />
      </svg>
    ),
  },
  {
    title: "Regular updates and communication",
    description:
      "We keep you updated on the progress of your website and communicate with you regularly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 8h10M7 12h6m-8 8l2.5-2.5H18a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2h1z"
        />
      </svg>
    ),
  },
  {
    title: "Future updates and improvements",
    description:
      "We make sure your website is future-proof and can be easily updated and improved.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12a7.5 7.5 0 0113.2-4.8M19.5 12a7.5 7.5 0 01-13.2 4.8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 3.5V7.5H20.5M7.5 20.5V16.5H3.5"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <div className="w-full md:max-w-[70%] text-center flex flex-col gap-10 py-16 px-2.5">
        <div className="text-2xl font-medium text-black/90 tracking-tighter mb-6">
          My <span className="bg-blue-600 text-white">services</span>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6 md:gap-y-14">
        {SERVICES.map((service) => (
          <div key={service.title} className="flex flex-col items-start">
            <div className="text-blue-500 mb-4">{service.icon}</div>

            <h3 className="text-base text-left font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>

            <p className="text-sm text-left text-gray-500 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;