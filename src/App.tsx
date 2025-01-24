import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import PostCard from './components/PostCard';
import { Search } from 'lucide-react';

const samplePosts = [
  {
    id: '1',
    title: 'عنوان المقال الأول',
    excerpt: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة...',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    likes: 120,
    comments: 45,
    shares: 12,
    date: '2024-03-10',
    category: 'تقنية',
    readTime: '5 دقائق',
    author: {
      name: 'زياد محمد',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: '2',
    title: 'كيف تصبح مبرمجاً محترفاً',
    excerpt: 'خطوات بسيطة تساعدك في رحلة تعلم البرمجة...',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    likes: 89,
    comments: 23,
    shares: 15,
    date: '2024-03-09',
    category: 'برمجة',
    readTime: '7 دقائق',
    author: {
      name: 'زياد محمد',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  },
  {
    id: '3',
    title: 'أفضل أدوات تطوير الويب في 2024',
    excerpt: 'استكشف أحدث الأدوات والتقنيات في عالم تطوير الويب...',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    likes: 156,
    comments: 34,
    shares: 28,
    date: '2024-03-08',
    category: 'أدوات',
    readTime: '4 دقائق',
    author: {
      name: 'زياد محمد',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    }
  }
];

function HomePage() {
  const [selectedCategory, setSelectedCategory] = React.useState('الكل');
  const [searchQuery, setSearchQuery] = React.useState('');
  const categories = ['الكل', 'تقنية', 'برمجة', 'أدوات', 'تصميم'];

  const filteredPosts = samplePosts
    .filter(post => selectedCategory === 'الكل' || post.category === selectedCategory)
    .filter(post => 
      searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto w-full">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-right"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex">
            <main className="flex-1 mr-64">
              {/* Categories Filter */}
              <div className="mb-8 flex justify-end space-x-4 space-x-reverse">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-white text-gray-600 hover:bg-indigo-50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">لا توجد مقالات تطابق بحثك</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map(post => (
                    <PostCard
                      key={post.id}
                      post={post}
                      onClick={() => console.log('Navigate to post', post.id)}
                    />
                  ))}
                </div>
              )}
            </main>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;