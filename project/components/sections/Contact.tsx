"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  {
    city: "Mumbai",
    address: "3rd Floor, Anjali Arcade, Kulla West, Maharashtra - 400059",
    icon: MapPin,
  },
  {
    city: "Kolkata",
    address: "4th Floor, Acropolis Heights, Highland Road, Durbhon, West Bengal - 700156",
    icon: MapPin,
  },
  {
    city: "Asansol",
    address: "Siddhivinayak Mews, West Asansol, Duralia, Lower Cambridge, West Bengal - 713304",
    icon: MapPin,
  },
];

const supportInfo = [
  {
    title: "Sales Support",
    phone: "+91 8420220240",
    email: "info@capricontechnology.com",
    hours: "Mon-Fri 8am to 8pm IST",
  },
  {
    title: "Technical Support",
    phone: "+91 8420220240",
    email: "support@capricontechnology.com",
    hours: "Mon-Fri 8am to 8pm IST",
  },
];

export default function Contact() {
  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We'd love to hear from you! Send us a message using the form opposite, or email us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Describe Your Project</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Full name" />
                </div>
                <div>
                  <Input type="email" placeholder="Email" />
                </div>
              </div>
              <div>
                <Input placeholder="Company" />
              </div>
              <div>
                <Input placeholder="Phone Number" />
              </div>
              <div>
                <Textarea 
                  placeholder="Tell us about your project"
                  className="min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office) => (
                <Card key={office.city} className="p-6">
                  <office.icon className="h-6 w-6 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-lg mb-2">{office.city}</h4>
                  <p className="text-sm text-gray-600">{office.address}</p>
                </Card>
              ))}
            </div>

            {/* Support Information */}
            <div className="grid sm:grid-cols-2 gap-6">
              {supportInfo.map((info) => (
                <Card key={info.title} className="p-6">
                  <h4 className="font-semibold text-lg mb-4">{info.title}</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <p className="text-gray-600">{info.phone}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <p className="text-gray-600">{info.email}</p>
                    </div>
                    <p className="text-sm text-gray-500">{info.hours}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}