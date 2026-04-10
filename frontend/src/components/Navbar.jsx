import { Flame, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md h-20 border-b border-outline-variant/10">
        <div className="flex justify-between items-center px-8 h-full max-w-7xl mx-auto w-full">
          <div className="text-2xl font-bold text-primary font-headline">
            Nitya Jaap
          </div>
          <div className="hidden md:flex items-center gap-8 font-headline">
            <a
              href="#"
              className="text-primary border-b-2 border-primary-container pb-1 transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Sadhna Room
            </a>
            <a
              href="#"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              Library
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-primary-fixed/30 px-4 py-2 rounded-full border border-outline-variant/15">
              <Flame className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">
                Streak: 5 Days
              </span>
            </div>
            <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-high cursor-pointer transition-colors">
              <User className="w-6 h-6 text-on-surface-variant" />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
