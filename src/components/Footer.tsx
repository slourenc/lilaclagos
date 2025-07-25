import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/lilaclagospt', '_blank', 'noopener,noreferrer');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/profile.php?id=61566058485167', '_blank', 'noopener,noreferrer');
  };

  const handleBlogClick = () => {
    window.open('https://lagoslilac.blogspot.com', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:lagoslilac@gmail.com';
  };

  const handleMapClick = () => {
    window.open('https://maps.google.com/?q=LACO+Business+Hub+Chinicato+Lagos+Portugal', '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About LiLAC */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌸</span>
              <h3 className="text-xl font-bold text-lilac-300">LiLAC</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Living in Lagos Artists Collective brings together five women artists to create 
              a supportive community for art workshops, exhibitions, and creative expression 
              in Portugal's beautiful Algarve.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>📍</span>
              <span className="text-sm">LACO Business Hub, Chinicato, Lagos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'artists', label: 'Meet the Artists' },
                { id: 'workshops', label: 'Workshops' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <div
                  key={item.id}
                  className="text-gray-300 hover:text-lilac-300 cursor-pointer transition-colors duration-200 text-sm"
                  onClick={() => handleNavClick(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, () => handleNavClick(item.id))}
                  tabIndex={0}
                  role="button"
                  aria-label={`Go to ${item.label} section`}
                >
                  {item.label}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              
              {/* Email */}
              <div 
                className="flex items-center gap-3 text-gray-300 hover:text-lilac-300 cursor-pointer transition-colors duration-200"
                onClick={handleEmailClick}
                onKeyDown={(e) => handleKeyDown(e, handleEmailClick)}
                tabIndex={0}
                role="button"
                aria-label="Send email to LiLAC"
              >
                <span>✉️</span>
                <span className="text-sm">lagoslilac@gmail.com</span>
              </div>

              {/* Instagram */}
              <div 
                className="flex items-center gap-3 text-gray-300 hover:text-lilac-300 cursor-pointer transition-colors duration-200"
                onClick={handleInstagramClick}
                onKeyDown={(e) => handleKeyDown(e, handleInstagramClick)}
                tabIndex={0}
                role="button"
                aria-label="Visit our Instagram page"
              >
                <span>📸</span>
                <span className="text-sm">@lilaclagospt</span>
              </div>

              {/* Facebook */}
              <div 
                className="flex items-center gap-3 text-gray-300 hover:text-lilac-300 cursor-pointer transition-colors duration-200"
                onClick={handleFacebookClick}
                onKeyDown={(e) => handleKeyDown(e, handleFacebookClick)}
                tabIndex={0}
                role="button"
                aria-label="Visit our Facebook page"
              >
                <span>👥</span>
                <span className="text-sm">Facebook</span>
              </div>

              {/* Blog */}
              <div 
                className="flex items-center gap-3 text-gray-300 hover:text-lilac-300 cursor-pointer transition-colors duration-200"
                onClick={handleBlogClick}
                onKeyDown={(e) => handleKeyDown(e, handleBlogClick)}
                tabIndex={0}
                role="button"
                aria-label="Visit our blog"
              >
                <span>📝</span>
                <span className="text-sm">Blog</span>
              </div>

              {/* Location */}
              <div 
                className="flex items-center gap-3 text-gray-300 hover:text-lilac-300 cursor-pointer transition-colors duration-200"
                onClick={handleMapClick}
                onKeyDown={(e) => handleKeyDown(e, handleMapClick)}
                tabIndex={0}
                role="button"
                aria-label="View location on map"
              >
                <span>📍</span>
                <span className="text-sm">View on Map</span>
              </div>
            </div>

            {/* Individual Artist Handles */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold text-gray-400 mb-2">Follow Our Artists</h5>
              <div className="space-y-1 text-xs text-gray-400">
                <div>@mydoodlebody</div>
                <div>@beata_palach</div>
                <div>@paintingreens</div>
                <div>@chedayath_art</div>
                <div>@mallikagardiner</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} LiLAC - Living in Lagos Artists Collective. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <span>Founded September 2024</span>
              <span>•</span>
              <span>Lagos, Algarve, Portugal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 