import React from 'react';
import { Instagram, Linkedin, Github, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-15">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/zied.mb/" className="text-gray-600 hover:text-indigo-600">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.linkedin.com/in/zied-meddeb-7087a2266/" className="text-gray-600 hover:text-indigo-600">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="https://github.com/zied-mb" className="text-gray-600 hover:text-indigo-600">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://www.snapchat.com/add/zied-m" className="text-gray-600 hover:text-indigo-600">
            <Camera className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-gray-600">© Copyright Zied MB</p>
        
        <div className="relative">
          <img
            src="profile.jpeg"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
}