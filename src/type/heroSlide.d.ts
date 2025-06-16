interface HeroSlide {
  id: number;
  imageUrl: string;
  title?: string;
  subtitle?: string;
  linkUrl?: string;
  order: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default HeroSlide;
