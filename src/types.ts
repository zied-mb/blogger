export interface Author {
  name: string;
  avatar: string;
}

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
  date: string;
  category: string;
  readTime: string;
  author: Author;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}