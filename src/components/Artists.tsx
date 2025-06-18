import React, { useState } from 'react';

interface Artist {
  name: string;
  handle: string;
  background: string;
  focus: string;
  description: string;
  specialties: string[];
  fullBio: string;
  inspiration: string;
  achievements: string[];
  artworkCount: number;
  yearsActive: number;
}

const Artists: React.FC = () => {
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);

  const artists: Artist[] = [
    {
      name: "Alex Plummer",
      handle: "@mydoodlebody",
      background: "Communications & Peace/Conflict Resolution",
      focus: "Visual Storytelling",
      description: "Explores self-expression and sustainability through drawings, specializing in graphic recording and visual scribing.",
      specialties: ["Graphic Recording", "Visual Scribing", "Sustainable Art", "My Doodle Body"],
      fullBio: "Alex brings a unique perspective to visual arts through her background in Communications and Peace/Conflict Resolution. Her work centers on visual storytelling as a means of communication and healing. Through her 'My Doodle Body' series, she explores themes of self-acceptance and body positivity, while her graphic recording work captures complex conversations in accessible visual formats.",
      inspiration: "I'm inspired by the power of drawing to communicate what words sometimes cannot. Every line tells a story, and every story has the potential to connect us to ourselves and each other.",
      achievements: ["Featured in Lagos Art Festival 2024", "Graphic recording for international conferences", "Community workshops reaching 200+ participants"],
      artworkCount: 45,
      yearsActive: 8
    },
    {
      name: "Beata Pałach",
      handle: "@beata_palach",
      background: "Eco-Artist & Educator from Poland",
      focus: "Human-Nature Connection",
      description: "Paints with intuitive gestures guided by light and colour, using eco-friendly and upcycled materials.",
      specialties: ["Eco-Friendly Art", "Upcycled Materials", "Environmental Themes", "Intuitive Painting"],
      fullBio: "Beata's journey as an eco-artist began in Poland and has flourished in the Algarve's natural beauty. She creates her own pigments from local plants and uses reclaimed materials in her work. Her paintings are meditative explorations of the relationship between human consciousness and the natural world, painted with intuitive gestures that capture the essence of light and movement.",
      inspiration: "Nature is my greatest teacher. I believe that by working with natural materials and honoring the environment in my practice, my art becomes a bridge between human creativity and the wisdom of the earth.",
      achievements: ["Sustainable Art Award Portugal 2024", "Solo exhibition 'Earth Whispers'", "Workshop leader at Eco-Art Summit"],
      artworkCount: 38,
      yearsActive: 12
    },
    {
      name: "Claire Lloyd-Bown",
      handle: "@paintingreens",
      background: "Former Director of Education at London's ICA",
      focus: "Mixed Media & Digital Tools",
      description: "UK-born, former Deputy Director of Newlyn Art Gallery, co-founded LiLAC in September 2024.",
      specialties: ["Mixed Media", "Digital Tools", "Textile Design", "Art Education"],
      fullBio: "Claire brings decades of arts leadership experience to LiLAC, having served as Director of Education at London's ICA and Deputy Director of Newlyn Art Gallery. Her artistic practice seamlessly blends traditional textile techniques with cutting-edge digital tools, creating works that speak to both heritage and innovation. As co-founder of LiLAC, she envisions art education that is accessible, inclusive, and transformative.",
      inspiration: "Art education should be a doorway, not a gatehouse. My work explores how traditional techniques can be enhanced by digital innovation, creating new possibilities for artistic expression.",
      achievements: ["Co-founder of LiLAC", "Former ICA Director of Education", "Digital Art Innovation Award 2023"],
      artworkCount: 52,
      yearsActive: 15
    },
    {
      name: "Jung-Ah (Joanne) Kim",
      handle: "@chedayath_art",
      background: "Korean Artist",
      focus: "Personal Memory & Nostalgia",
      description: "Works in oil, acrylic, and wood, exploring themes influenced by life in multiple countries including the Algarve.",
      specialties: ["Oil Painting", "Acrylic", "Wood Work", "Cultural Memory"],
      fullBio: "Jung-Ah's artistic journey spans multiple continents and cultures. Born in Korea and having lived in several countries before settling in the Algarve, her work is a visual diary of cultural adaptation and personal growth. She works primarily in oil and acrylic on wood, creating layered compositions that capture the emotional landscape of displacement, belonging, and the search for home.",
      inspiration: "Memory is not just about the past—it's about how our experiences shape who we become. My paintings are maps of my emotional journey across cultures, each piece a moment of recognition and understanding.",
      achievements: ["International Diaspora Art Exhibition", "Cultural Memory Project featured in Seoul Biennale", "Cross-Cultural Art Residency Program"],
      artworkCount: 41,
      yearsActive: 10
    },
    {
      name: "Mallika Gardiner",
      handle: "@mallikagardiner",
      background: "Singaporean Artist",
      focus: "Eastern & Western Influences",
      description: "Blends cultural influences, focusing on motherhood, flowers, and landscapes with universal cultural connections.",
      specialties: ["Cultural Fusion", "Motherhood Themes", "Botanical Art", "Landscapes"],
      fullBio: "Mallika's art is a celebration of cultural fusion and feminine experience. Drawing from her Singaporean heritage and Western artistic training, she creates works that explore motherhood, botanical beauty, and the landscapes that shape our emotional lives. Her delicate yet powerful compositions speak to universal themes of growth, nurturing, and the cycles of life that connect all cultures.",
      inspiration: "Motherhood has taught me that creation is both an act of vulnerability and incredible strength. My art explores how Eastern and Western traditions can inform each other, creating something entirely new and beautiful.",
      achievements: ["Featured in Singapore Contemporary Art Fair", "Motherhood in Art symposium speaker", "Botanical Art Society recognition"],
      artworkCount: 36,
      yearsActive: 9
    }
  ];

  const handleArtistClick = (artist: Artist) => {
    setSelectedArtist(artist);
  };

  const handleCloseModal = () => {
    setSelectedArtist(null);
  };

  return (
    <section id="artists" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Meet Our Artists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five talented women bringing diverse backgrounds, cultures, and artistic perspectives 
            to create a vibrant collaborative community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <div 
              key={artist.name}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => handleArtistClick(artist)}
            >
              {/* Artist Header */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {artist.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{artist.name}</h3>
                <p className="text-lilac-600 font-medium">{artist.handle}</p>
              </div>

              {/* Artist Info */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Background</h4>
                  <p className="text-sm text-gray-600">{artist.background}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Artistic Focus</h4>
                  <p className="text-sm text-gray-600">{artist.focus}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">{artist.description}</p>
                </div>

                {/* Specialties */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Specialties</h4>
                  <div className="flex flex-wrap gap-2">
                    {artist.specialties.map((specialty) => (
                      <span 
                        key={specialty}
                        className="px-3 py-1 bg-lilac-100 text-lilac-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Click to learn more */}
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-lilac-600 font-medium text-center">
                    Click to learn more →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-lilac-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-lilac-800 mb-4">
              Connect with Our Artists
            </h3>
            <p className="text-gray-700 mb-6">
              Follow our collective and individual artists on Instagram to see their latest works, 
              process videos, and behind-the-scenes glimpses of studio life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-700">
                <span>📸</span>
                <span className="font-medium">@lilaclagospt</span>
              </span>
              <a 
                href="https://instagram.com/lilaclagospt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">{selectedArtist.name}</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Artist Header */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-lilac-400 to-lilac-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {selectedArtist.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{selectedArtist.name}</h3>
                <p className="text-lilac-600 font-medium text-lg">{selectedArtist.handle}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-lilac-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-lilac-700">{selectedArtist.artworkCount}</div>
                  <div className="text-sm text-gray-600">Artworks</div>
                </div>
                <div className="bg-lilac-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-lilac-700">{selectedArtist.yearsActive}</div>
                  <div className="text-sm text-gray-600">Years Active</div>
                </div>
                <div className="bg-lilac-50 rounded-lg p-3">
                  <div className="text-2xl font-bold text-lilac-700">{selectedArtist.specialties.length}</div>
                  <div className="text-sm text-gray-600">Specialties</div>
                </div>
              </div>

              {/* Full Bio */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Biography</h4>
                <p className="text-gray-700 leading-relaxed">{selectedArtist.fullBio}</p>
              </div>

              {/* Inspiration */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Artist Statement</h4>
                <blockquote className="italic text-gray-700 border-l-4 border-lilac-300 pl-4">
                  "{selectedArtist.inspiration}"
                </blockquote>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Recent Achievements</h4>
                <ul className="space-y-2">
                  {selectedArtist.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Artistic Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedArtist.specialties.map((specialty) => (
                    <span 
                      key={specialty}
                      className="px-3 py-2 bg-lilac-100 text-lilac-700 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-gray-600 mb-2">Follow {selectedArtist.name.split(' ')[0]} on Instagram</p>
                <a 
                  href={`https://instagram.com/${selectedArtist.handle.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-lilac-600 text-white rounded-lg hover:bg-lilac-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  {selectedArtist.handle}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Artists; 