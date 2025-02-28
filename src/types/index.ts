export interface Gig {
  id: number;
  title: string;
  description: string;
  price: {
    basic: number;
    standard: number;
    premium: number;
  };
  deliveryTime: {
    basic: number;
    standard: number;
    premium: number | string;
  };
  revisions: {
    basic: number;
    standard: number;
    premium: string | number;
  };
  features: {
    basic: string[];
    standard: string[];
    premium: string[];
  };
  rating: number;
  reviews: number;
  orders: number;
  seller: {
    name: string;
    level: string;
    memberSince: string;
    country: string;
    responseTime: string;
    languages: string[];
    avatar: string;
  };
  images: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  reviews_list: {
    id: number;
    user: {
      name: string;
      country: string;
      avatar: string;
    };
    rating: number;
    date: string;
    comment: string;
  }[];
}

export interface PopularService {
  name: string;
  icon: string;
}