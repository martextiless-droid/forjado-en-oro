export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  role: string;
}

export interface GiftSuggestionResponse {
  imageUrl: string;
  title: string;
  description: string;
}
