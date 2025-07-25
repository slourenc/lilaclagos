import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToWorkshops = () => {
    const workshopsSection = document.getElementById('workshops');
    if (workshopsSection) {
      workshopsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToGallery = () => {
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sage-50 via-white to-lilac-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-lilac-100/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-sage-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-100/10 rounded-full blur-2xl animate-bounce"></div>

      {/* Content */}
      <div className="container-width relative z-10 text-center">
        {/* Main Heading */}
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6">
            <span className="gradient-text">LiLAC</span>
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 mb-8 tracking-wide">
            Lagos International Local Arts Collective
          </div>
        </div>

        {/* Subtitle */}
        <div className="fade-in-up delay-200 max-w-4xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Where creativity blooms through community. Five women artists fostering 
            collaboration, sustainability, and artistic growth in beautiful Lagos, Portugal.
          </p>
        </div>

        {/* Stats */}
        <div className="fade-in-up delay-300 flex justify-center gap-8 mb-16">
          <div className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-lilac-600 mb-2">5</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Founding Artists</div>
          </div>
          <div className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-lilac-600 mb-2">2024</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Established</div>
          </div>
          <div className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-lilac-600 mb-2">∞</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Possibilities</div>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleScrollToWorkshops}
            className="btn-primary text-lg px-8 py-4 min-w-[200px]"
            tabIndex={0}
            aria-label="Scroll to workshops section"
          >
            Join Our Workshops
          </button>
          <button
            onClick={handleScrollToGallery}
            className="btn-secondary text-lg px-8 py-4 min-w-[200px]"
            tabIndex={0}
            aria-label="Scroll to gallery section"
          >
            Explore Gallery
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="fade-in-up delay-500 absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Floating Art Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="w-8 h-8 bg-lilac-300 rounded-full animate-pulse"></div>
      </div>
      <div className="absolute top-40 right-20 opacity-30">
        <div className="w-6 h-6 bg-sage-300 rotate-45 animate-spin"></div>
      </div>
      <div className="absolute bottom-32 left-20 opacity-30">
        <div className="w-10 h-10 bg-purple-300 rounded-full animate-bounce"></div>
      </div>
      <div className="absolute bottom-48 right-32 opacity-30">
        <div className="w-4 h-8 bg-lilac-400 rounded-full animate-pulse delay-500"></div>
      </div>
    </section>
  );
};

export default Hero; 