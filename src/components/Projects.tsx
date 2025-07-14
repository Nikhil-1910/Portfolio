import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      id: "RS",
      title: "AI-Powered Alzheimer's Prediction System",
      category: "Research Activity",
      description: "Currently developing an advanced recommendation system as part of research activity . This project involves implementing machine learning algorithms to create personalized content recommendations, utilizing collaborative filtering and content-based approaches.",
      highlights: [
        "Working with cutting-edge ML algorithms",
        "Collaborating with faculty and researchers",
        "Contributing to academic research publications",
        "Building full-stack application with MERN stack",
        "Implementing TypeScript for enhanced code quality"
      ],
      technologies: ["Python", "Machine Learning", "Data Science", "Research", "TypeScript", "MongoDB", "Express.js", "React", "Node.js"],
      status: "Ongoing",
      progress: 75
    },
    {
      id: "AD",
      title: "Full-Stack Web Application",
      category: "Academic Project",
      description: "Comprehensive implementation of complex data structures and algorithms in C++, focusing on optimization and real-world applications. This project demonstrates mastery of algorithmic thinking and efficient problem-solving techniques.",
      highlights: [
        "Custom AVL Tree implementation",
        "Advanced graph algorithms",
        "Optimized hash table structures",
        "Performance analysis and benchmarking",
        "Memory-efficient data handling"
      ],
      technologies: ["C++", "Data Structures", "Algorithms", "Optimization"],
      status: "Completed",
      progress: 100
    },
    {
      id: "ML",
      title: "Advanced Data Structures Implementation",
      category: "Personal Project",
      description: "A modern MERN stack application featuring user authentication, responsive design, and RESTful APIs. Built with TypeScript for type safety and enhanced developer experience.",
      highlights: [
        "JWT-based authentication system",
        "Responsive React frontend",
        "RESTful API design",
        "MongoDB database integration",
        "TypeScript implementation"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript", "JWT"],
      status: "Completed",
      progress: 100
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-emerald-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my journey through code, research, and innovation
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] border border-slate-700/50"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 space-y-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === 'Ongoing' 
                            ? 'bg-emerald-500/20 text-emerald-400' 
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-emerald-400 font-medium">{project.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-slate-700 text-emerald-400 rounded-full text-sm font-medium border border-emerald-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button className="bg-emerald-600 hover:bg-emerald-500 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
                
                <div className="lg:w-1/3 flex flex-col justify-center items-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-4xl font-bold text-slate-900 mb-6">
                    {project.id}
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Project Status</div>
                    <div className="text-lg font-semibold text-white mb-2">{project.status}</div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-emerald-400 font-medium">{project.progress}%</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;