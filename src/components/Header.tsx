import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>, sectionId: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavClick(sectionId);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('home')}
            onKeyDown={(e) => handleKeyDown(e, 'home')}
            tabIndex={0}
            role="button"
            aria-label="Go to home section"
          >
            <div className="text-2xl font-bold text-lilac-700">
              🌸 LiLAC
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {[
              { id: 'about', label: 'About' },
              { id: 'artists', label: 'Artists' },
              { id: 'workshops', label: 'Workshops' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <div
                key={item.id}
                className="text-gray-700 hover:text-lilac-600 cursor-pointer transition-colors duration-200 font-medium"
                onClick={() => handleNavClick(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                tabIndex={0}
                role="button"
                aria-label={`Go to ${item.label} section`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-lilac-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lilac-500"
            onClick={handleToggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {[
                { id: 'about', label: 'About' },
                { id: 'artists', label: 'Artists' },
                { id: 'workshops', label: 'Workshops' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <div
                  key={item.id}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-lilac-600 hover:bg-gray-50 rounded-md cursor-pointer transition-colors duration-200"
                  onClick={() => handleNavClick(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Go to ${item.label} section`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 