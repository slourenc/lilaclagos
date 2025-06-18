import React from 'react';
import { siteContent } from '../data/content';

const Hero: React.FC = () => {
  const handleScrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToWorkshops = () => {
    const element = document.getElementById('workshops');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-lilac-50/90 via-white/50 to-sage-50/90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-lilac-200/30 rounded-full blur-xl float delay-100"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-sage-200/30 rounded-full blur-xl float delay-300"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-lilac-100/20 rounded-full blur-2xl float delay-500"></div>

      <div className="container-width section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            <div className="fade-in-left">
              <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
                <span className="text-lilac-600 float">🌸</span>
                <br />
                <span className="gradient-text">LiLAC</span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-light text-gray-800 mb-4 fade-in-left delay-200">
                {siteContent.hero.tagline}
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg fade-in-left delay-300">
                {siteContent.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 fade-in-left delay-400">
                <button
                  className="btn-primary pulse-glow"
                  onClick={handleScrollToGallery}
                  onKeyDown={(e) => handleKeyDown(e, handleScrollToGallery)}
                  aria-label="Explore our artwork gallery"
                >
                  {siteContent.hero.callToAction}
                </button>
                <button
                  className="btn-secondary"
                  onClick={handleScrollToWorkshops}
                  onKeyDown={(e) => handleKeyDown(e, handleScrollToWorkshops)}
                  aria-label="View our workshops"
                >
                  Join a Workshop
                </button>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 text-center fade-in-left delay-500">
                <div>
                  <div className="text-2xl font-bold text-lilac-600">5</div>
                  <div className="text-sm text-gray-600">Artists</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-lilac-600">50+</div>
                  <div className="text-sm text-gray-600">Workshops</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-lilac-600">200+</div>
                  <div className="text-sm text-gray-600">Art Pieces</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Artwork Preview */}
          <div className="relative fade-in-right delay-200">
            <div className="grid grid-cols-2 gap-4">
              {/* Featured artwork previews */}
              <div className="artwork-card">
                <img 
                  src="https://picsum.photos/300/400?random=13" 
                  alt="Featured artwork preview"
                  className="w-full h-64 object-cover"
                />
                <div className="artwork-overlay">
                  <div className="text-white">
                    <h4 className="font-semibold">Latest Works</h4>
                    <p className="text-sm opacity-90">Collaborative pieces</p>
                  </div>
                </div>
              </div>
              
              <div className="artwork-card mt-8">
                <img 
                  src="https://picsum.photos/300/400?random=14" 
                  alt="Workshop in action"
                  className="w-full h-64 object-cover"
                />
                <div className="artwork-overlay">
                  <div className="text-white">
                    <h4 className="font-semibold">Live Workshops</h4>
                    <p className="text-sm opacity-90">Community in action</p>
                  </div>
                </div>
              </div>
              
              <div className="artwork-card -mt-4">
                <img 
                  src="https://picsum.photos/300/400?random=15" 
                  alt="Studio space"
                  className="w-full h-64 object-cover"
                />
                <div className="artwork-overlay">
                  <div className="text-white">
                    <h4 className="font-semibold">Our Studio</h4>
                    <p className="text-sm opacity-90">Creative sanctuary</p>
                  </div>
                </div>
              </div>
              
              <div className="artwork-card mt-4">
                <img 
                  src="https://picsum.photos/300/400?random=16" 
                  alt="Art process"
                  className="w-full h-64 object-cover"
                />
                <div className="artwork-overlay">
                  <div className="text-white">
                    <h4 className="font-semibold">The Process</h4>
                    <p className="text-sm opacity-90">Behind the scenes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 glass p-4 float delay-400">
              <div className="text-center">
                <div className="text-xs text-gray-600">Est.</div>
                <div className="font-bold text-lilac-600">2024</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up delay-500">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-xs mb-2">Discover More</span>
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 