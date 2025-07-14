const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", level: 95, description: "Expert in DSA and competitive programming" },
        { name: "Python", level: 90, description: "Data Science and Machine Learning" },
        { name: "Java", level: 85, description: "Object-oriented programming" },
        { name: "JavaScript", level: 88, description: "Modern ES6+ and frameworks" },
        { name: "TypeScript", level: 85, description: "Type-safe JavaScript development" }
      ]
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: [
        { name: "React.js", level: 90, description: "Modern component-based development" },
        { name: "Node.js", level: 85, description: "Server-side JavaScript" },
        { name: "Express.js", level: 85, description: "RESTful API development" },
        { name: "HTML/CSS", level: 92, description: "Semantic markup and responsive design" },
        { name: "MongoDB", level: 80, description: "NoSQL database management" },
        { name: "MERN Stack", level: 87, description: "Full-stack web development" }
      ]
    },
    {
      title: "Data Science & Algorithms",
      icon: "📊",
      skills: [
        { name: "Data Structures", level: 95, description: "Advanced DSA with C++" },
        { name: "Algorithms", level: 93, description: "Problem-solving and optimization" },
        { name: "Machine Learning", level: 82, description: "ML algorithms and implementation" },
        { name: "Data Analysis", level: 80, description: "Python-based data processing" },
        { name: "Research Methods", level: 85, description: "Academic research " }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-emerald-400">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Mastering the technologies that power modern software development
          </p>
        </div>
        
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-8">
                <span className="text-4xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/30"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                      <span className="text-emerald-400 font-bold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-3">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                    
                    <p className="text-gray-400 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 rounded-xl p-8 border border-emerald-400/20">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            Achievements & <span className="text-emerald-400">Certifications</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-emerald-400">🏆 Academic Excellence</h4>
              <p className="text-gray-300">
                Maintaining 9.83 CGPA while actively contributing to tech under Rejolt Fellowship
              </p>
              <p className="text-gray-300">
                Successfully completed multiple projects and won competitive programming contests
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-emerald-400">⚡ Timely Delivery</h4>
              <p className="text-gray-300">
                Committed to delivering high-quality solutions within agreed timelines
              </p>
              <p className="text-gray-300">
                Ready to bring your ideas to life with cutting-edge technology and proven expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;