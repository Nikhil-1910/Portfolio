const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about transforming ideas into elegant code solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">My Journey</h3>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                I'm Vancha Nikhil Reddy, a passionate Computer Science undergraduate at Vardhaman College of Engineering. 
                With a solid foundation in programming and problem-solving, I've been actively developing my skills in 
                Data Structures and Algorithms using C++ and building full-stack web applications.
              </p>
              <p>
                I'm driven by a deep curiosity for modern technology trends, especially in artificial intelligence, 
                cloud computing, and software engineering. Currently maintaining a CGPA of 9.83, I've also been selected 
                for the prestigious Rejolt Edtech Fellowship.
              </p>
              <p>
                I actively lead and contribute to my college's Student Developers Club, where I mentor peers and help 
                organize technical events. My career objective is to become a software engineer at a top-tier 
                product-based company.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
                <div className="text-2xl font-bold text-emerald-400">Telugu</div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
                <div className="text-2xl font-bold text-emerald-400">Hindi</div>
              </div>
              <div className="bg-slate-700/50 p-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
                <div className="text-2xl font-bold text-emerald-400">English</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">Education</h3>
            
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-emerald-400"></div>
              
              <div className="relative pl-16 pb-8">
                <div className="absolute left-4 w-4 h-4 bg-emerald-400 rounded-full"></div>
                <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-white">B.Tech in Computer Science and Engineering</h4>
                    <span className="text-emerald-400 font-semibold">Current</span>
                  </div>
                  <p className="text-gray-400 mb-2">Vardhaman College of Engineering, Hyderabad</p>
                  <p className="text-gray-500">2024 - 2027 (Expected)</p>
                  <p className="text-emerald-400 font-semibold mt-2">CGPA: 9.83</p>
                </div>
              </div>
              
              <div className="relative pl-16 pb-8">
                <div className="absolute left-4 w-4 h-4 bg-cyan-400 rounded-full"></div>
                <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2">Intermediate (12th Grade)</h4>
                  <p className="text-gray-400 mb-2">Aakash Institute, Hyderabad</p>
                  <p className="text-gray-500">2021 - 2023</p>
                  <p className="text-cyan-400 font-semibold mt-2">Percentage: 98.4%</p>
                </div>
              </div>
              
              <div className="relative pl-16">
                <div className="absolute left-4 w-4 h-4 bg-blue-400 rounded-full"></div>
                <div className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-2">Secondary School (10th Grade)</h4>
                  <p className="text-gray-400 mb-2">Vidya Nikethan School</p>
                  <p className="text-gray-500">2020 - 2021</p>
                  <p className="text-blue-400 font-semibold mt-2">CGPA: 10.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Achievements & Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">🥈</div>
              <h4 className="text-lg font-bold text-white mb-2">NPTEL Silver Certificate</h4>
              <p className="text-gray-400">Data Science - Academic Excellence</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="text-lg font-bold text-white mb-2">Code Hunt 2.0 Winner</h4>
              <p className="text-gray-400">Regional Coding Contest</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-slate-700 transition-all duration-300 hover:scale-105">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="text-lg font-bold text-white mb-2">Treasure Hunt Winner</h4>
              <p className="text-gray-400">Problem Solving Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;