"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#0B1121]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1520769945061-0a448c463865?auto=format&fit=crop&w=1920"
          alt="Tech pattern"
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Transforming Ideas into
            <span className="text-blue-500"> Digital Reality</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            We specialize in creating innovative software solutions that drive business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10 text-lg px-8"
            >
              Our Services
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <button 
            onClick={scrollToServices}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}