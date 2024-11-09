import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const stats = [
  { 
    icon: Award,
    number: "10+", 
    label: "Years Experience",
    color: "text-blue-600" 
  },
  { 
    icon: Users,
    number: "200+", 
    label: "Clients Worldwide",
    color: "text-green-600"
  },
  { 
    icon: CheckCircle,
    number: "500+", 
    label: "Projects Completed",
    color: "text-purple-600"
  },
  { 
    icon: Clock,
    number: "24/7", 
    label: "Support Available",
    color: "text-orange-600"
  }
];

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Driving Digital Excellence Through Innovation
            </h2>
            <div className="w-24 h-1 bg-blue-600 mb-8"></div>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              With over a decade of experience in software development and digital transformation, 
              we help businesses leverage cutting-edge technology to achieve their goals and stay 
              ahead in the digital landscape. Our team of experts is dedicated to delivering 
              innovative solutions that drive real business value.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-6 text-center hover:shadow-lg transition-all">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-4`} />
                  <p className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-600/10 rounded-full -z-10"></div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-blue-600/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}