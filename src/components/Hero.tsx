import Header from "./layouts/Header";
import { COMPANY_LOGO } from "../lib/lib";
import CalBookingButton from "./CalBookingButton";

const Hero = () => {
  return (
    <div className="text-center w-full max-w-full h-150 flex flex-col items-center justify-start pt-8 border border-black/5 border-b-2">
      <Header />
      <div className="w-full md:max-w-[60%] h-full flex flex-col items-center justify-center gap-16">
        {/* <div className="w-full max-w-full flex flex-col items-center justify-center gap-2">
            <img className="w-20 rounded-xl object-cover" src="./assets/hassan.png" alt="hassan-iftikhar" />
            <div className="text-xl font-medium">Frontend Engineer</div>
        </div> */}
        <div className="w-full max-w-full flex flex-col items-center justify-center gap-4">
          <h1 className="sm:text-xl text-3xl md:text-4xl font-medium leading-10 md:leading-13">
            Exceptionally good-looking <br className="md:block hidden" /> websites for{" "}
            <span className="bg-blue-600 text-white">
              startups and enterprises
            </span>
          </h1>
          {/* <p className="w-[90%] text-md font-normal leading-6 text-black/80">
            I’m a Frontend Engineer with 2+ years of experience, passionate about building modern, user-friendly, and scalable digital experiences. I combine clean code, thoughtful UI/UX, and modern technologies to turn ideas into impactful products.
          </p> */}
          <div className="w-full md:max-w-[60%] flex items-center justify-center gap-2 md:gap-4 mt-4">
            <CalBookingButton />
            <button className="text-sm md:text-md bg-gray-100 hover:bg-gray-200 px-4 py-1.5 text-black rounded-xl border-2 border-gray-300 shadow-md hover:cursor-pointer transition-all duration-200">
              Explore my work
            </button>
          </div>
        </div>
        <div>
          <div className="text-sm leading-5 font-medium">
            Some of the companies <br /> I have worked with
          </div>
          <div className="w-full max-w-full flex items-center justify-center gap-4 mt-4">
            {COMPANY_LOGO.map((company, index) => (
              <a
                key={index}
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center max-w-full gap-10"
              >
                <div className="flex items-center justify-center gap-2">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-6 h-auto saturate-10 bg-white"
                  />
                  <p className="text-sm font-regular ">{company.name}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
