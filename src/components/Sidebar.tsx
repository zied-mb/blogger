import React from 'react';
import { Instagram, Linkedin, Github, Camera, Bookmark, Siren as Fire, Newspaper, Tag, Users, TrendingUp, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-600' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-gray-900' },
  { icon: Camera, label: 'Snapchat', href: '#', color: 'hover:text-yellow-500' },
];

const popularPosts = [
  {
    id: '1',
    title: 'أفضل لغات البرمجة في 2024',
    views: '2.5K',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'برمجة',
    date: '2024-03-15'
  },
  {
    id: '2',
    title: 'دليلك الشامل لتعلم React',
    views: '1.8K',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'تطوير الويب',
    date: '2024-03-14'
  },
  {
    id: '3',
    title: 'مستقبل الذكاء الاصطناعي',
    views: '3.2K',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    category: 'تكنولوجيا',
    date: '2024-03-13'
  }
];

const categories = [
  { name: 'برمجة', count: 12, icon: Newspaper },
  { name: 'تطوير الويب', count: 8, icon: Tag },
  { name: 'تكنولوجيا', count: 15, icon: TrendingUp },
  { name: 'مجتمع المطورين', count: 6, icon: Users },
];

export default function Sidebar() {
  const [showMobileSidebar, setShowMobileSidebar] = React.useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setShowMobileSidebar(!showMobileSidebar)}
        className="fixed top-24 right-4 md:hidden bg-white p-2 rounded-full shadow-lg z-50"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <div
        className={`fixed top-1/2 -translate-y-1/2 right-8 w-56
  h-[50vh] bg-white rounded-2xl shadow-2xl
  transform transition-all duration-300 ease-in-out
  overflow-hidden
  ${showMobileSidebar ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
  backdrop-blur-lg bg-white/90
  border border-gray-200/50`}
      >
        {/* Scrollable Content */}
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="p-4 space-y-8">
            {/* Profile Section */}
            <div className="text-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent -z-10 rounded-xl" />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-xl"
              />
              <h3 className="font-semibold text-lg text-gray-800">زياد محمد</h3>
              <p className="text-gray-600 text-sm">مطور ويب و مدون تقني</p>
            </div>

            {/* Popular Posts Section */}
            <div className="bg-gray-50/50 rounded-xl p-3">
              <div className="flex items-center justify-end mb-3">
                <h3 className="text-md font-semibold ml-2">الأكثر مشاهدة</h3>
                <Fire className="h-4 w-4 text-orange-500" />
              </div>

              <div className="space-y-3">
                {popularPosts.map((post) => (
                  <div
                    key={post.id}
                    className="group cursor-pointer bg-white rounded-lg p-2 transition-all hover:bg-gray-100 border border-gray-100 hover:border-indigo-200"
                  >
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <div className="flex-1">
                        <h4 className="text-xs font-medium text-right group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center justify-end mt-1 space-x-2 space-x-reverse text-xs text-gray-500">
                          <span className="bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.views} مشاهدة</span>
                        </div>
                      </div>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-14 h-14 rounded-lg object-cover transition-transform group-hover:scale-105 shadow-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories Section */}
            <div className="bg-gray-50/50 rounded-xl p-3">
              <h3 className="text-md font-semibold text-right mb-3">التصنيفات</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="w-full flex items-center justify-end p-2 rounded-lg hover:bg-white transition-all group border border-transparent hover:border-indigo-100"
                  >
                    <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full group-hover:bg-indigo-100">
                      {category.count}
                    </span>
                    <span className="flex-1 text-right mr-2 text-gray-800 group-hover:text-indigo-600">
                      {category.name}
                    </span>
                    <category.icon className="h-4 w-4 text-gray-400 group-hover:text-indigo-600" />
                  </button>
                ))}
              </div>
            </div>

            {/* Portfolio Link */}
            <Link
              to="/portfolio"
              className="block bg-gradient-to-l from-indigo-600 to-indigo-700 text-white p-3 rounded-xl text-center hover:from-indigo-700 hover:to-indigo-800 transition-all transform hover:scale-[1.02] shadow-md relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <Bookmark className="h-5 w-5 mx-auto mb-1" />
              <span className="text-md font-semibold block">معرض أعمالي</span>
              <span className="text-sm text-indigo-200">اكتشف مشاريعي وإنجازاتي</span>
            </Link>

            {/* Social Links */}
            <div className="border-t border-gray-200/50 pt-4">
              <h3 className="text-md font-semibold text-right mb-3">تواصل معي</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`flex items-center justify-center space-x-1 space-x-reverse p-2 rounded-lg bg-gray-50 hover:bg-white transition-all ${link.color} border border-transparent hover:border-gray-200`}
                  >
                    <span className="text-xs">{link.label}</span>
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
