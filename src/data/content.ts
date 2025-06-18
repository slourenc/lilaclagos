// Content Management System for LiLAC Portfolio
// Update this file to change any content on the website

export interface ArtworkItem {
  id: string;
  title: string;
  artist: string;
  medium: string;
  year: string;
  description: string;
  imageUrl: string;
  category: 'painting' | 'drawing' | 'mixed-media' | 'digital' | 'sculpture';
  featured: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  type: 'workshop' | 'process' | 'exhibition' | 'interview';
}

export interface WorkshopItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  schedule: string;
  imageUrl: string;
  highlights: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'all-levels';
  materials: string;
}

// PLACEHOLDER ARTWORK - Replace these URLs with actual artwork images
export const artworkGallery: ArtworkItem[] = [
  {
    id: '1',
    title: 'Ocean Dreams',
    artist: 'Alex Plummer',
    medium: 'Mixed Media on Canvas',
    year: '2024',
    description: 'A visual narrative exploring the connection between human emotions and the rhythmic patterns of ocean waves.',
    imageUrl: 'https://picsum.photos/600/800?random=1',
    category: 'mixed-media',
    featured: true
  },
  {
    id: '2',
    title: 'Roots & Wings',
    artist: 'Beata Pałach',
    medium: 'Eco-pigments on Reclaimed Wood',
    year: '2024',
    description: 'Using natural pigments and upcycled materials to explore themes of growth and transformation.',
    imageUrl: 'https://picsum.photos/600/800?random=2',
    category: 'painting',
    featured: true
  },
  {
    id: '3',
    title: 'Digital Landscapes',
    artist: 'Claire Lloyd-Bown',
    medium: 'Digital Art & Textile',
    year: '2024',
    description: 'Bridging traditional textile design with contemporary digital techniques.',
    imageUrl: 'https://picsum.photos/600/800?random=3',
    category: 'digital',
    featured: true
  },
  {
    id: '4',
    title: 'Memory Palace',
    artist: 'Jung-Ah Kim',
    medium: 'Oil on Wood',
    year: '2024',
    description: 'Personal memories from multiple countries woven into abstract compositions.',
    imageUrl: 'https://picsum.photos/600/800?random=4',
    category: 'painting',
    featured: false
  },
  {
    id: '5',
    title: 'Maternal Gardens',
    artist: 'Mallika Gardiner',
    medium: 'Watercolor & Ink',
    year: '2024',
    description: 'Exploring motherhood through botanical metaphors and Eastern-Western artistic fusion.',
    imageUrl: 'https://picsum.photos/600/800?random=5',
    category: 'painting',
    featured: false
  },
  {
    id: '6',
    title: 'Collective Voices',
    artist: 'LiLAC Collective',
    medium: 'Mixed Media Collaboration',
    year: '2024',
    description: 'A collaborative piece representing the harmony of five artistic voices.',
    imageUrl: 'https://picsum.photos/600/800?random=6',
    category: 'mixed-media',
    featured: true
  }
];

// PLACEHOLDER VIDEOS - Replace these URLs with actual videos
export const videoGallery: VideoItem[] = [
  {
    id: '1',
    title: 'Paint With Nature Workshop',
    description: 'Watch our eco-conscious painting process using natural materials',
    thumbnailUrl: 'https://picsum.photos/400/300?random=7',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    type: 'workshop'
  },
  {
    id: '2',
    title: 'Behind the Scenes: Studio Life',
    description: 'A day in the life at our Lagos studio space',
    thumbnailUrl: 'https://picsum.photos/400/300?random=8',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    type: 'process'
  },
  {
    id: '3',
    title: 'Artist Spotlight: Creative Process',
    description: 'Individual artists share their techniques and inspiration',
    thumbnailUrl: 'https://picsum.photos/400/300?random=9',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video
    type: 'interview'
  }
];

// WORKSHOP DATA - Easy to update
export const workshopData: WorkshopItem[] = [
  {
    id: '1',
    title: 'Still-Life Mastery',
    description: 'Master observational drawing and color theory through structured practice',
    duration: '2.5 hours',
    price: '€25/session',
    schedule: 'Thursdays 5:00-7:30 PM',
    imageUrl: 'https://picsum.photos/400/300?random=10',
    highlights: ['Observational techniques', 'Color theory', 'Mixed media', 'Personal style'],
    difficulty: 'beginner',
    materials: 'All materials provided'
  },
  {
    id: '2',
    title: 'Eco-Art Experience',
    description: 'Create art using sustainable materials and natural pigments',
    duration: '3 hours',
    price: '€30/session',
    schedule: 'Monthly sessions',
    imageUrl: 'https://picsum.photos/400/300?random=11',
    highlights: ['Natural pigments', 'Upcycled materials', 'Environmental themes', 'Outdoor practice'],
    difficulty: 'all-levels',
    materials: 'Eco-friendly supplies included'
  },
  {
    id: '3',
    title: 'Figure Drawing Circle',
    description: 'Traditional life drawing in a supportive community setting',
    duration: '2 hours',
    price: '€20/session',
    schedule: 'Bi-weekly sessions',
    imageUrl: 'https://picsum.photos/400/300?random=12',
    highlights: ['Live models', 'Various techniques', 'Peer feedback', 'Relaxed atmosphere'],
    difficulty: 'intermediate',
    materials: 'Basic supplies provided'
  }
];

// SITE COPY - Easy to update text content
export const siteContent = {
  hero: {
    tagline: "Where Art Meets Community",
    subtitle: "Five women artists creating transformative experiences through collaborative art, sustainable practices, and cultural exchange in Portugal's stunning Algarve region.",
    callToAction: "Explore Our World"
  },
  about: {
    mission: "LiLAC creates a bridge between formal art education and grassroots creativity, fostering an inclusive space where technical skill meets personal expression.",
    vision: "We envision art as a universal language that connects cultures, generations, and communities while honoring our planet through sustainable practices."
  },
  contact: {
    email: "lagoslilac@gmail.com",
    instagram: "@lilaclagospt",
    location: "LACO Business Hub, Chinicato, Lagos, Portugal"
  }
}; 