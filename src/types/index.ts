export interface Review {
  id: number;
  name: string;
  position: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}