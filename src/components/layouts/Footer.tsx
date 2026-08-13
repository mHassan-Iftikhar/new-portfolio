const linkedinUrl = "https://www.linkedin.com/in/hassaniftikhardev";
const githubUrl = "https://github.com/mHassan-Iftikhar";
const email = "hassaniftikharco@gmail.com";

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-white/80 backdrop-blur-sm border-t border-black/5">
      <div className="md:max-w-7xl mx-auto px-2.5 md:px-6 py-12">
        <div className="w-full flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        {/* Left */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
            Hassan Iftikhar
          </h2>
          <p className="max-w-md text-base leading-7 text-gray-600">
            I design and build clean, responsive, modern websites with care
            and attention to detail.
          </p>
        </div>

        {/* Middle */}
        <nav className="flex flex-col gap-3 text-base text-gray-700">
          <a href="#home" className="hover:text-gray-900 transition-colors">
            Home
          </a>
          <a href="#work" className="hover:text-gray-900 transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right */}
        <div className="flex flex-col gap-3">
          <span className="text-base text-gray-700">Let’s connect</span>

          <a
            href={`mailto:${email}`}
            className="text-base text-gray-600 hover:text-gray-900 transition-colors"
          >
            {email}
          </a>

          <div className="flex items-center gap-3 mt-3">
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:text-white hover:bg-blue-600 transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.8v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.3 4.4 5.3V20h-4v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.4-2 2.7V20h-4V8z" />
              </svg>
            </a>

            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:text-white hover:bg-black transition-colors shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.99 0 1.99.13 2.9.39 2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.77.12 3.06.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.4-5.25 5.69.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Hassan Iftikhar. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">Designed and built with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;