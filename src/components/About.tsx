import React from 'react';
import { imageConfig } from '../utils/imageConfig';
import { siteContent } from '../data/content';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-sage-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lilac-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-100/10 rounded-full blur-3xl"></div>

      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="gradient-text">Our Story</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five women artists united by creativity, community, and a vision for sustainable artistic practice
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content - Story */}
          <div className="fade-in-left">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">The Beginning</h3>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  {siteContent.about.mission}
                </p>
                <p className="leading-relaxed">
                  {siteContent.about.vision}
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-lilac-600">2024</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lilac-600">5</div>
                  <div className="text-sm text-gray-600">Founding Artists</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-lilac-600">∞</div>
                  <div className="text-sm text-gray-600">Possibilities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="fade-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="artwork-card h-80 mb-6">
                <img 
                  src={imageConfig.studio.mainSpace} 
                  alt="LiLAC studio space"
                  className="w-full h-full object-cover"
                />
                <div className="artwork-overlay">
                  <div className="text-white">
                    <h4 className="text-xl font-bold">Our Creative Sanctuary</h4>
                    <p className="text-sm opacity-90">LACO Business Hub, Lagos</p>
                  </div>
                </div>
              </div>

              {/* Small Gallery */}
              <div className="grid grid-cols-2 gap-4">
                <div className="artwork-card h-32">
                  <img 
                    src={imageConfig.studio.workshopArea} 
                    alt="Community workshop"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="artwork-card h-32">
                  <img 
                    src={imageConfig.studio.collaboration} 
                    alt="Artist collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default About; 