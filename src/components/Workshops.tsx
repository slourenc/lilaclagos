import React, { useState } from 'react';
import { workshopData, WorkshopItem } from '../data/content';

const Workshops: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);

  const handleBookWorkshop = (workshop: WorkshopItem) => {
    const subject = `Workshop Booking: ${workshop.title}`;
    const body = `Hi LiLAC Team,

I would like to book the ${workshop.title} workshop.

Workshop Details:
- Duration: ${workshop.duration}
- Price: ${workshop.price}
- Schedule: ${workshop.schedule}

Please let me know the next available dates and any additional information.

Thanks!`;
    
    window.location.href = `mailto:lagoslilac@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      'beginner': 'bg-green-100 text-green-700',
      'intermediate': 'bg-yellow-100 text-yellow-700',
      'advanced': 'bg-red-100 text-red-700',
      'all-levels': 'bg-lilac-100 text-lilac-700'
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section id="workshops" className="section-padding bg-pattern relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sage-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-lilac-100/20 rounded-full blur-3xl"></div>

      <div className="container-width relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            <span className="gradient-text">Workshops</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Hands-on workshops led by experienced artists. 
            All skill levels welcome in our supportive, inspiring environment.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 text-center fade-in-up delay-200">
            <div className="glass p-4 rounded-2xl">
              <div className="text-2xl font-bold text-lilac-600">3</div>
              <div className="text-sm text-gray-600">Active Workshops</div>
            </div>
            <div className="glass p-4 rounded-2xl">
              <div className="text-2xl font-bold text-lilac-600">€20-30</div>
              <div className="text-sm text-gray-600">Per Session</div>
            </div>
            <div className="glass p-4 rounded-2xl">
              <div className="text-2xl font-bold text-lilac-600">2-3h</div>
              <div className="text-sm text-gray-600">Duration</div>
            </div>
          </div>
        </div>

        {/* Workshop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workshopData.map((workshop, index) => (
            <div
              key={workshop.id}
              className={`group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer fade-in-up delay-${index * 100}`}
              onClick={() => setSelectedWorkshop(workshop)}
            >
              {/* Workshop Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={workshop.imageUrl}
                  alt={workshop.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(workshop.difficulty)}`}>
                    {workshop.difficulty.replace('-', ' ').toUpperCase()}
                  </span>
                </div>

                {/* Price Badge */}
                <div className="absolute top-4 left-4 glass-dark px-3 py-2 rounded-full">
                  <div className="text-white font-bold">{workshop.price}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lilac-600 transition-colors">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {workshop.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>⏱️</span>
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>📅</span>
                    <span>{workshop.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>🎨</span>
                    <span>{workshop.materials}</span>
                  </div>
                </div>

                {/* Highlights Preview */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {workshop.highlights.slice(0, 2).map((highlight, idx) => (
                    <span key={idx} className="px-2 py-1 bg-lilac-50 text-lilac-700 text-xs rounded-full">
                      {highlight}
                    </span>
                  ))}
                  {workshop.highlights.length > 2 && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                      +{workshop.highlights.length - 2} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookWorkshop(workshop);
                  }}
                  className="w-full btn-primary text-sm py-2 px-4"
                >
                  Book Workshop
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-lilac-500/10 to-sage-500/10 rounded-2xl blur-xl"></div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Workshop Detail Modal */}
      {selectedWorkshop && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWorkshop(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Workshop Image */}
            <img
              src={selectedWorkshop.imageUrl}
              alt={selectedWorkshop.title}
              className="w-full h-64 object-cover"
            />
            
            <div className="p-8">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedWorkshop.difficulty)}`}>
                    {selectedWorkshop.difficulty.replace('-', ' ').toUpperCase()}
                  </span>
                  <span className="text-2xl font-bold text-lilac-600">{selectedWorkshop.price}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedWorkshop.title}</h3>
                <p className="text-gray-600">{selectedWorkshop.description}</p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Workshop Details</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>⏱️</span>
                      <span>{selectedWorkshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{selectedWorkshop.schedule}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>🎨</span>
                      <span>{selectedWorkshop.materials}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What You'll Learn</h4>
                  <div className="space-y-1">
                    {selectedWorkshop.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-2 h-2 bg-lilac-500 rounded-full"></span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => handleBookWorkshop(selectedWorkshop)}
                  className="flex-1 btn-primary"
                >
                  Book This Workshop
                </button>
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className="flex-1 btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Workshops; 