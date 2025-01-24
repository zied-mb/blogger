import React from 'react';
import { Search, Pencil } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Pencil className="h-8 w-8 text-indigo-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-indigo-600">Zied Blogger</h1>
        
        <div className="relative">
          <input
            type="text"
            placeholder="بحث..."
            className="w-48 px-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </header>
  );
}