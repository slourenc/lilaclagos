import React, { useState } from 'react';
import { artworkGallery, videoGallery, ArtworkItem, VideoItem } from '../data/content';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'artwork' | 'videos' | 'featured'>('featured');
  const [selectedItem, setSelectedItem] = useState<ArtworkItem | VideoItem | null>(null);

  const featuredItems = artworkGallery.filter(item => item.featured);

  const handleItemClick = (item: ArtworkItem | VideoItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'painting': 'bg-lilac-100 text-lilac-700',
      'drawing': 'bg-sage-100 text-sage-700',
      'mixed-media': 'bg-purple-100 text-purple-700',
      'digital': 'bg-blue-100 text-blue-700',
      'sculpture': 'bg-amber-100 text-amber-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="gallery" className="section-padding bg-pattern-sage relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-lilac-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sage-100/20 rounded-full blur-3xl"></div>

      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="gradient-text">Our Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where creativity comes alive through collaborative artworks, community workshops, and artistic journeys
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 fade-in-up delay-200">
          <div className="glass p-2 rounded-full">
            <div className="flex gap-2">
              {[
                { key: 'featured', label: '✨ Featured', count: featuredItems.length },
                { key: 'artwork', label: '🎨 Artwork', count: artworkGallery.length },
                { key: 'videos', label: '🎬 Videos', count: videoGallery.length }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-lilac-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-lilac-600 hover:bg-white/50'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Content */}
        <div className="fade-in-up delay-300">
          {/* Featured Artwork */}
          {activeTab === 'featured' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`artwork-card cursor-pointer fade-in-up delay-${index * 100}`}
                  onClick={() => handleItemClick(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="artwork-overlay">
                    <div className="text-white">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${getCategoryColor(item.category)}`}>
                        {item.category.replace('-', ' ')}
                      </span>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.artist} • {item.year}</p>
                      <p className="text-sm mt-2 opacity-80">{item.medium}</p>
                    </div>
                  </div>
                  
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 glass-dark px-3 py-1 text-xs font-bold">
                    ⭐ FEATURED
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* All Artwork */}
          {activeTab === 'artwork' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {artworkGallery.map((item, index) => (
                <div
                  key={item.id}
                  className={`artwork-card cursor-pointer fade-in-up delay-${index * 50}`}
                  onClick={() => handleItemClick(item)}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="artwork-overlay">
                    <div className="text-white">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm opacity-90">{item.artist}</p>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-yellow-400 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Videos */}
          {activeTab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videoGallery.map((video, index) => (
                <div
                  key={video.id}
                  className={`video-card fade-in-up delay-${index * 100}`}
                  onClick={() => handleItemClick(video)}
                >
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="video-overlay">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-6 border-l-lilac-600 border-y-4 border-y-transparent ml-1"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass-dark p-3">
                      <h4 className="font-semibold text-white">{video.title}</h4>
                      <p className="text-sm text-white/80">{video.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="glass-dark px-2 py-1 text-xs font-medium text-white">
                      {video.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>


      </div>

      {/* Modal for detailed view */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {'imageUrl' in selectedItem ? (
              // Artwork modal
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-96 md:h-full object-cover"
                />
                <div className="p-8">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(selectedItem.category)}`}>
                    {selectedItem.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedItem.title}</h3>
                  <p className="text-lg text-lilac-600 font-medium mb-1">{selectedItem.artist}</p>
                  <p className="text-gray-600 mb-4">{selectedItem.medium} • {selectedItem.year}</p>
                  <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
                </div>
              </div>
            ) : (
              // Video modal
              <div>
                <iframe
                  src={selectedItem.videoUrl}
                  title={selectedItem.title}
                  className="w-full h-64 md:h-96"
                  allowFullScreen
                ></iframe>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium mb-4">
                    {selectedItem.type.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedItem.title}</h3>
                  <p className="text-gray-700">{selectedItem.description}</p>
                </div>
              </div>
            )}
            
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 