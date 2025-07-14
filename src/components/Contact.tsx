import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your project or tutoring needs. I'm always excited
            to work on challenging problems and help others grow.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Whether you're looking for web development services, custom software solutions, 
                or programming tutoring, I'm here to help. With my strong academic background 
                and hands-on experience, I can bring your ideas to life or help you master 
                programming concepts.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-emerald-400">reddynikhil1910@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-emerald-400">+91 7396684739</p>
                </div>
              </div>
              
              <a 
                href="https://www.linkedin.com/in/nikhil-reddy-15633b287/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                  <p className="text-emerald-400">Connect with me</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/nikhil21031" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">GitHub</h4>
                  <p className="text-emerald-400">View my code</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 p-6 bg-slate-700/30 rounded-lg border border-emerald-400/20">
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-emerald-400 mr-2" />
                <h4 className="text-lg font-semibold text-white">Based in India</h4>
              </div>
              <p className="text-gray-300">
                Currently studying at Vardhaman College of Engineering while
                learning and exploring under Rejolt Edtech. Available for remote
                collaboration worldwide.
              </p>
            </div>
          </div>
          
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What would you like to discuss?"
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me more about your project or what you'd like to learn..."
                  rows={6}
                  required
                  className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:border-emerald-400 resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 transition-all duration-300 hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;