// import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Services from "./components/Services";
import Footer from "./components/layouts/Footer";
import Projects from "./components/Projects";
import Process from "./components/Process";

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full max-w-full bg-white flex flex-col items-center justify-center">
      {/* <Header /> */}
      <div className="flex flex-col w-full md:max-w-[70%] border border-black/5 border-r-2 border-l-2 items-center justify-center min-h-screen">
        <Hero />
        <About />
        <Work />
        <Process />
        <Projects />
        <Services />
        <Footer />
      </div>

      <div
        className="
    fixed bottom-0 left-0
    z-99
    w-full h-60
    pointer-events-none
    backdrop-blur-lg
    bg-white/10
    mask-[linear-gradient(to_top,black_0%,black_10%,rgba(0,0,0,0.6)_35%,rgba(0,0,0,0.2)_65%,transparent_100%)]
    [-webkit-mask-image:linear-gradient(to_top,black_0%,black_10%,rgba(0,0,0,0.6)_35%,rgba(0,0,0,0.2)_65%,transparent_100%)]
  "
      />
    </div>
  );
};

export default App;
