import { imageConfig } from '../utils/imageConfig';

export interface ArtworkItem {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  category: string;
  description: string;
  imageUrl: string;
  featured: boolean;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  type: string;
  duration: string;
}

export interface WorkshopItem {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  price: string;
  difficulty: string;
  schedule: string;
  materials: string;
  highlights: string[];
  imageUrl: string;
  maxParticipants: number;
}

export const siteContent = {
  about: {
    mission: "Founded in September 2024, LiLAC (Lagos Art Collective) brings together five passionate women artists from diverse backgrounds to create a vibrant, supportive community. Our mission is to foster artistic growth, cultural exchange, and sustainable creative practices in the beautiful coastal town of Lagos, Portugal.",
    vision: "We believe art has the power to connect people across cultures and experiences. Through collaborative projects, workshops, and community engagement, we aim to make art accessible, inspiring, and transformative for everyone who walks through our doors."
  },
  contact: {
    email: "lagoslilac@gmail.com",
    instagram: "@lilaclagospt",
    location: "LACO Business Hub, Chinicato, Lagos, Portugal"
  }
};

// Featured Gallery Items (simplified - just display, no descriptions)
export const featuredGallery = [
  { id: "featured-1", imageUrl: imageConfig.featured.featured1, type: "image" },
  { id: "featured-2", imageUrl: imageConfig.featured.featured2, type: "image" },
  { id: "featured-3", imageUrl: imageConfig.featured.featured3, type: "image" },
  { id: "featured-4", imageUrl: imageConfig.featured.featured4, type: "image" },
  { id: "featured-5", imageUrl: imageConfig.featured.featured5, type: "image" },
  { id: "featured-6", imageUrl: imageConfig.featured.featured6, type: "image" },
  { id: "featured-7", imageUrl: imageConfig.featured.featured7, type: "image" },
];

// Video Gallery Items  
export const videoGallery = [
  { id: "video-1", videoUrl: imageConfig.videos.video1, type: "video" },
  { id: "video-2", videoUrl: imageConfig.videos.video2, type: "video" },
  { id: "video-3", videoUrl: imageConfig.videos.video3, type: "video" },
  { id: "video-4", videoUrl: imageConfig.videos.video4, type: "video" },
  { id: "video-5", videoUrl: imageConfig.videos.video5, type: "video" },
];

// Combined gallery for display
export const galleryItems = [
  ...featuredGallery,
  ...videoGallery,
];



export const workshopData: WorkshopItem[] = [
  {
    id: "workshop-001",
    title: "Observation into Expression",
    description: "Learn perspective, proportion, light, and tone through sketching still-life objects. Begin with a playful mark-making warm-up to spark intuition before focusing on careful observation.",
    instructor: "LiLAC Artists",
    duration: "2.5 hours",
    price: "€25",
    difficulty: "beginner",
    schedule: "Thursday 26th June | 5:00pm – 7:30pm",
    materials: "All materials provided",
    highlights: [
      "Perspective and proportion techniques",
      "Light and tone fundamentals", 
      "Mark-making warm-up exercises",
      "Still-life observation skills"
    ],
    imageUrl: imageConfig.workshops.stillLifeWeek1,
    maxParticipants: 12
  },
  {
    id: "workshop-002", 
    title: "Exploring Colour and Style",
    description: "Deepen your understanding of colour theory and brushwork. Experiment with subtle stylistic variations to reflect mood and personal expression—within a strong realist framework.",
    instructor: "LiLAC Artists",
    duration: "2.5 hours",
    price: "€25",
    difficulty: "beginner",
    schedule: "Thursday 3rd July | 5:00pm – 7:30pm",
    materials: "All materials provided",
    highlights: [
      "Colour theory fundamentals",
      "Brushwork techniques",
      "Stylistic variations exploration",
      "Mood and expression in realism"
    ],
    imageUrl: imageConfig.workshops.stillLifeWeek2,
    maxParticipants: 12
  },
  {
    id: "workshop-003",
    title: "Still Life Composition", 
    description: "Combine studies and experiments into a final mixed-media still life painting. Emphasize composition, form, texture—and add elements of memory or meaning to make your piece uniquely yours.",
    instructor: "LiLAC Artists",
    duration: "2.5 hours",
    price: "€25",
    difficulty: "beginner",
    schedule: "Thursday 10th July | 5:00pm – 7:30pm", 
    materials: "All materials provided",
    highlights: [
      "Composition principles",
      "Form and texture techniques",
      "Mixed-media approaches",
      "Personal meaning integration"
    ],
    imageUrl: imageConfig.workshops.stillLifeWeek3,
    maxParticipants: 12
  }
]; 