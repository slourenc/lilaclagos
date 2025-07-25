// Image Configuration System
// This file makes it easy to manage all images in one place
// To change any image, simply replace the file in the appropriate folder
// or update the filename here

export const imageConfig = {
  // Artist Portrait Images
  artists: {
    alexPlummer: '/images/artists/alex-plummer.jpg',
    beataPalach: '/images/artists/beata-palach.jpg',
    claireLloydBown: '/images/artists/claire-lloyd-bown.jpg',
    jungAhKim: '/images/artists/jung-ah-kim.jpg',
    mallikaGardiner: '/images/artists/mallika-gardiner.jpg',
  },

  // Studio Space Images
  studio: {
    mainSpace: '/images/studio/main-studio-space.jpg',
    workshopArea: '/images/studio/community-workshop.jpg',
    collaboration: '/images/studio/artist-collaboration.jpg',
  },

  // Featured Gallery Images
  featured: {
    featured1: '/images/featured/featured-1.jpg',
    featured2: '/images/featured/featured-2.jpg',
    featured3: '/images/featured/featured-3.jpg',
    featured4: '/images/featured/featured-4.jpg',
    featured5: '/images/featured/featured-5.jpg',
    featured6: '/images/featured/featured-6.jpg',
    featured7: '/images/featured/featured-7.jpg',
  },

  // Artwork Gallery Images
  artwork: {
    artwork1: '/images/artwork/artwork-1.jpg',
    artwork2: '/images/artwork/artwork-2.jpg',
    artwork3: '/images/artwork/artwork-3.jpg',
    artwork4: '/images/artwork/artwork-4.jpg',
    artwork5: '/images/artwork/artwork-5.jpg',
    artwork6: '/images/artwork/artwork-6.jpg',
    artwork7: '/images/artwork/artwork-7.jpg',
    artwork8: '/images/artwork/artwork-8.jpg',
    artwork9: '/images/artwork/artwork-9.jpg',
    artwork10: '/images/artwork/artwork-10.jpg',
  },

  // Workshop Images
  workshops: {
    stillLifeWeek1: '/images/workshops/still-life-week-1.jpg',
    stillLifeWeek2: '/images/workshops/still-life-week-2.jpg',
    stillLifeWeek3: '/images/workshops/still-life-week-3.jpg',
  },

  // Videos
  videos: {
    video1: '/images/videos/video-1.mp4',
    video2: '/images/videos/video-2.mp4',
    video3: '/images/videos/video-3.mp4',
    video4: '/images/videos/video-4.mp4',
    video5: '/images/videos/video-5.mp4',
  },
};

// Helper function to get image path with fallback
export const getImagePath = (category: keyof typeof imageConfig, imageName: string): string => {
  const categoryImages = imageConfig[category] as Record<string, string>;
  return categoryImages[imageName] || '/images/placeholder.jpg';
};

// Helper function to get all images in a category
export const getCategoryImages = (category: keyof typeof imageConfig): Record<string, string> => {
  return imageConfig[category] as Record<string, string>;
}; 