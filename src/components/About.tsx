import { SOCIAL_LINKS } from "../lib/lib";
import { ArrowDownRight } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full max-w-full h-90 flex flex-col items-center justify-center gap-10 py-20 border border-black/5 border-b-2">
      <div className="w-full max-w-full flex flex-col items-center justify-center gap-4">
        <div className="w-full max-w-full flex flex-col items-center justify-center gap-2">
          <img
            className="w-20 rounded-xl object-cover"
            src="./assets/hassan.png"
            alt="hassan-iftikhar"
          />
          <div className="text-xl font-medium">Frontend Engineer</div>
        </div>
        <p className="w-[60%] text-md font-normal text-center leading-6 text-black/80">
          I’m a Frontend Engineer with 2+ years of experience, passionate about
          building modern, user-friendly, and scalable digital experiences. I
          combine clean code, thoughtful UI/UX, and modern technologies to turn
          ideas into impactful products.
        </p>
      </div>
      <div className="w-full max-w-full flex items-center justify-center gap-10">
        {SOCIAL_LINKS.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-auto flex items-center justify-center"
          >
            <div className="w-auto h-full flex items-center justify-center gap-2">
              <span>{social.name}</span>
              <ArrowDownRight className="text-blue-600 -rotate-90" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default About;
