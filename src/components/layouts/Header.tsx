import { useState } from "react";
import CalBookingButton from "../CalBookingButton";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full max-w-full h-auto flex items-start justify-center">
      <div className="relative w-full max-w-95 md:max-w-[70%] h-full flex items-center justify-between border border-black/15 rounded-2xl px-2 pl-6 py-2">

        {/* Logo */}
        <div className="text-xl font-normal tracking-tighter hover:cursor-pointer">
          Hassan
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex items-center justify-center gap-4">
            <li>About</li>
            <li className="text-blue-600">•</li>
            <li>Work</li>
            <li className="text-blue-600">•</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Desktop Booking */}
        <div className="hidden md:block">
          <CalBookingButton />
        </div>

        {/* Mobile + Tablet Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden items-center justify-center w-10 h-10"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className="block w-6 h-0.5 bg-black rounded-full" />
            <span className="block w-6 h-0.5 bg-black rounded-full" />
            <span className="block w-6 h-0.5 bg-black rounded-full" />
          </div>
        </button>

        {/* Mobile + Tablet Menu */}
        {menuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-black/10 bg-white p-4 shadow-lg md:hidden">
            <ul className="flex flex-col gap-4">
              <li>About</li>
              <li>Work</li>
              <li>Services</li>
              <li>
                <CalBookingButton />
              </li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Header;