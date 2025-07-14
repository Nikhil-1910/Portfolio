import { Code, Server, Palette, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Full-Stack Web Development",
      description: "Build modern, responsive web applications using the latest technologies like React, Node.js, and MongoDB. From concept to deployment, I deliver scalable solutions tailored to your needs.",
      features: ["MERN Stack Development", "Responsive Design", "API Integration", "Database Design"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Technical Mentorship & Training",
      description: "Share knowledge through personalized programming tutorials, code reviews, and technical guidance. Help you master data structures, algorithms, and modern web development.",
      features: ["DSA Coaching", "Code Reviews", "Career Guidance", "Technical Workshops"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-emerald-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to bring your ideas to life with cutting-edge technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800 transition-all duration-300 hover:scale-105 border border-slate-700/50 group"
            >
              <div className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <button className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300 group-hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 rounded-xl p-8 border border-emerald-400/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            Why Choose <span className="text-emerald-400">Me?</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">🎓 Academic Excellence</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Maintaining 9.83 CGPA while actively contributing to tech under Rejolt Fellowship</li>
                <li>• Successfully completed multiple projects and won competitive programming contests</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-emerald-400 mb-3">⚡ Timely Delivery</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Committed to delivering high-quality solutions within agreed timelines</li>
                <li>• Ready to bring your ideas to life with cutting-edge technology</li>
              </ul>
            </div>
          </div>
          <p className="text-xl text-emerald-400 font-semibold mt-8">
            Ready to bring your ideas to life?
          </p>
          <p className="text-gray-300 mt-2">
            Whether you need a web application, custom software solution, or programming guidance, 
            I'm here to help you achieve your goals with cutting-edge technology and proven expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;