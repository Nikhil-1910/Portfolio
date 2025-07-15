import { Mail, Phone, Github, Linkedin, Download } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      console.warn("⚠️ Could not find element with id:", id);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Animated dots */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-50 animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-wrap gap-8">
        {/* Left Text Content */}
        <div className="flex-1 space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-emerald-400 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Vancha Nikhil <span className="block text-emerald-400">Reddy</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
              Software Enthusiast | Full-Stack Developer | Problem Solver
            </p>
            <p className="text-gray-400 max-w-2xl leading-relaxed">
              B.Tech CSE Student at Vardhaman College of Engineering with expertise in full-stack development,
              machine learning, and competitive programming. Currently maintaining a stellar 9.83 CGPA while
              building innovative solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/Portfolio/Nikhilresume.pdf"
              download
              className="relative z-10 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              My Resume
            </a>
          </div>

          {/* Social + Contact */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <a
              href="https://github.com/nikhil-1910"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-reddy-15633b287/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>


          </div>
        </div>

        {/* Profile Image */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <Avatar className="w-72 h-72">
                  <AvatarImage
                    src="https://i.postimg.cc/KjqjzJ9q/hero-bg.jpg"
                    alt="Vancha Nikhil Reddy"
                    className="object-cover w-full h-full"
                  />
                  <AvatarFallback className="w-full h-full bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center text-6xl font-bold text-white">
                    NR
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-bounce" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-500" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;