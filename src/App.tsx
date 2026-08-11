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
    <div className="min-h-screen w-full max-w-full bg-white flex flex-col items-center justify-center">
      {/* <Header /> */}
      <div className="flex flex-col w-full max-w-[70%] border border-black/5 border-r-2 border-l-2 items-center justify-center min-h-screen">
        <Hero />
        <About />
        <Work />
        <Process />
        <Projects />
        <Services />
        <Footer />
      </div>
    </div>
  );
};

export default App;
