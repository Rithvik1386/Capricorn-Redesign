import { Card } from "@/components/ui/card";
import { Code, Database, Globe, LineChart, Cpu, Cloud, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored solutions that perfectly align with your business objectives and workflows."
  },
  {
    icon: Globe,
    title: "Web Application Development",
    description: "Responsive and scalable web applications built with modern technologies."
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage the latest in artificial intelligence."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for your growing business needs."
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets."
  },
  {
    icon: Database,
    title: "Data Analytics",
    description: "Transform your data into actionable insights for better decision making."
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting to drive your digital transformation."
  },
  {
    icon: LineChart,
    title: "Digital Strategy",
    description: "Comprehensive digital strategies to keep you ahead of the competition."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="p-6 hover:shadow-xl transition-all group cursor-pointer border-t-4 border-transparent hover:border-blue-600">
              <service.icon className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}