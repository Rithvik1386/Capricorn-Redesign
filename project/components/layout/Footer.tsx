import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const industryLinks = [
  { name: "Application Services", href: "#" },
  { name: "DevOps", href: "#" },
  { name: "AI Development", href: "#" },
  { name: "Data Science", href: "#" },
];

const techLinks = [
  { name: "Full Stack", href: "#" },
  { name: "React Native", href: "#" },
  { name: "React JS", href: "#" },
  { name: "Flutter", href: "#" },
];

const companyLinks = [
  { name: "About", href: "#about" },
  { name: "Privacy", href: "#" },
  { name: "Terms", href: "#" },
];

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/yourusername/capri-con-technology", 
    icon: Github 
  },
  { 
    name: "Facebook", 
    href: "https://facebook.com", 
    icon: Facebook 
  },
  { 
    name: "Instagram", 
    href: "https://instagram.com", 
    icon: Instagram 
  },
  { 
    name: "LinkedIn", 
    href: "https://linkedin.com", 
    icon: Linkedin 
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Capricon Technology</h3>
            <p className="mb-6 text-gray-400">
              Providing clients with system software services such as new technology development, 
              software product development, re-engineering, and testing and release management.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Industry Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">INDUSTRY</h4>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">TECHNOLOGIES</h4>
            <ul className="space-y-2">
              {techLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Capricon Technologies Pvt. Ltd.. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}