"use client";

import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function DeveloperProfileCard() {
  const developer = {
    name: "@naranbhusal02",
    title: "Solo Developer",
    description: "Passionate Hackclub member who finds fun in code🧑‍💻",
    image: "/Narayan.webp",
    social: [
      {
        icon: Github,
        href: "https://github.com/naranbhusal02",
        label: "GitHub",
      },
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/in/naranbhusal02",
        label: "LinkedIn",
      },
      {
        icon: Twitter,
        href: "https://twitter.com/naranbhusal02",
        label: "Twitter",
      },
      { icon: Mail, href: "mailto:contactwithnaran@gmail.com", label: "Email" },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Card Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
          {/* Header Gradient Background */}
          <div className="h-32 bg-gradient-to-r from-amber-300 via-orange-300 to-rose-300 relative">
            {/* Decorative Cat Ears */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex gap-8">
              <div className="w-6 h-12 bg-amber-400 rounded-t-full shadow-lg transform -rotate-12"></div>
              <div className="w-6 h-12 bg-amber-400 rounded-t-full shadow-lg transform rotate-12"></div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative -mt-16 flex justify-center mb-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-amber-100 overflow-hidden shadow-lg">
                <img
                  src={developer.image || "/placeholder.svg"}
                  alt={developer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Cat Badge */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white">
                😺
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pb-8 text-center">
            <h1 className="text-3xl font-bold text-amber-900 mb-1">
              {developer.name}
            </h1>
            <p className="text-amber-600 font-semibold text-sm mb-4">
              {developer.title}
            </p>

            {/* Decorative Divider */}
            <div className="flex gap-1 justify-center mb-4">
              <div className="w-1 h-1 rounded-full bg-orange-400"></div>
              <div className="w-1 h-1 rounded-full bg-rose-400"></div>
              <div className="w-1 h-1 rounded-full bg-orange-400"></div>
            </div>

            <p className="text-amber-800 text-sm leading-relaxed mb-8">
              {developer.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              {developer.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-orange-300 hover:from-orange-400 hover:to-rose-400 flex items-center justify-center text-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-200"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Bottom Whisker Details */}
          <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="none">
              <path
                d="M0 15 Q15 10 30 15"
                stroke="currentColor"
                strokeWidth="2"
                className="text-amber-700"
              />
              <path
                d="M0 15 Q15 20 30 15"
                stroke="currentColor"
                strokeWidth="2"
                className="text-amber-700"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
