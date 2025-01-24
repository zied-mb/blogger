import React from 'react';
import { Heart, MessageCircle, Share2, Clock, Tag, Bookmark } from 'lucide-react';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
  onClick: () => void;
}

export default function PostCard({ post, onClick }: PostCardProps) {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
      onClick={onClick}
    >
      <div className="relative group">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-sm font-medium">اقرأ المزيد</span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm shadow-md">
            {post.category}
          </span>
        </div>
        <button
          onClick={handleSave}
          className="absolute top-4 left-4 p-2 rounded-full bg-white shadow-md transition-colors hover:bg-gray-100"
        >
          <Bookmark 
            className={`h-4 w-4 ${isSaved ? 'fill-indigo-600 text-indigo-600' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600">{post.author.name}</span>
          </div>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 text-right hover:text-indigo-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-right mb-4">{post.excerpt}</p>
        
        <div className="flex justify-end items-center mb-4 text-sm text-gray-500 space-x-4 space-x-reverse">
          <div className="flex items-center">
            <Clock className="h-4 w-4 ml-1" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center">
            <Tag className="h-4 w-4 ml-1" />
            <span>{post.category}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex space-x-6">
            <button 
              className="flex items-center space-x-1 transition-colors"
              onClick={handleLike}
            >
              <Heart 
                className={`h-5 w-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
              />
              <span className={isLiked ? 'text-red-500' : 'text-gray-600'}>
                {isLiked ? post.likes + 1 : post.likes}
              </span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors">
              <Share2 className="h-5 w-5" />
              <span>{post.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}