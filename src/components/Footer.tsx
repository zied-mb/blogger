import React from 'react';
import { Instagram, Linkedin, Github, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white shadow-lg mt-8">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600">
            <Camera className="h-6 w-6" />
          </a>
        </div>
        
        <p className="text-gray-600">© Copyright Zied MB</p>
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </footer>
  );
}