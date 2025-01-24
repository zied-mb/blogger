import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-right">من أنا</h2>
          <p className="text-gray-600 text-right">
            {/* Add your bio here */}
          </p>
        </div>
        
        {/* Instagram-style Grid */}
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${item}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                alt={`Achievement ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}