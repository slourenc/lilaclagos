import React, { useState } from 'react';
import { workshopData, WorkshopItem } from '../data/content';

const Workshops: React.FC = () => {
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);

  const handleBookWorkshop = (workshop?: WorkshopItem) => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSchedule = () => {
    // Scroll to workshop schedule section
    const scheduleSection = document.getElementById('workshop-schedule');
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: 'smooth' });
    }
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
            Join our 3-week still life course - a structured learning experience for beginners and artists wanting to develop their skills in a supportive environment.
          </p>
        </div>

        {/* Course Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg fade-in-up delay-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Still Life Painting Course</h3>
              <div className="flex flex-wrap justify-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <span className="text-lilac-600">📅</span>
                  <span>3-Week Course | Thursdays</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lilac-600">🕔</span>
                  <span>5:00pm – 7:30pm</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lilac-600">📍</span>
                  <span>LACO hub, Chinicato, Lagos</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Course Details</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Start Date:</strong> Thursday 26th June</li>
                  <li><strong>Duration:</strong> 3 weeks (2.5 hours each)</li>
                  <li><strong>Level:</strong> Beginners & developing artists</li>
                  <li><strong>Materials:</strong> All provided</li>
                  <li><strong>Contact:</strong> lagoslilac@gmail.com</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Pricing</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-lilac-50 rounded-lg">
                    <span>Per Session</span>
                    <span className="font-bold text-lilac-700">€25</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg border-2 border-green-200">
                    <span>All 3 Sessions</span>
                    <span className="font-bold text-green-700">€65</span>
                  </div>
                  <p className="text-sm text-gray-600 italic">Save €10 when booking all 3 sessions in advance!</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Course Description</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                Discover the beauty of everyday objects in this inspiring course that blends traditional still-life techniques with a touch of expressive exploration. Whether you're building skills or returning to your practice, this is a space to grow your confidence, creativity, and personal style.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each workshop is designed as a stand-alone session, allowing participants to join at any time. However, attending each week provides the opportunity to build on previous knowledge and deepen your understanding over time.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleBookWorkshop()}
                className="btn-primary text-lg px-8 py-3 mr-4"
              >
                Contact Us to Book (€65)
              </button>
              <button
                onClick={handleScrollToSchedule}
                className="btn-secondary text-lg px-8 py-3"
              >
                Book Individual Sessions
              </button>
            </div>
          </div>
        </div>

        {/* Individual Workshop Details */}
        <div id="workshop-schedule" className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12 fade-in-up">
            Workshop Schedule
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  
                  {/* Session Number */}
                  <div className="absolute top-4 left-4 bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    <span className="font-bold text-lilac-600">{index + 1}</span>
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 glass-dark px-3 py-2 rounded-full">
                    <div className="text-white font-bold">{workshop.price}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lilac-600 transition-colors">
                    {workshop.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {workshop.description}
                  </p>

                  {/* Schedule */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span>📅</span>
                    <span>{workshop.schedule}</span>
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
                    Contact to Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Ethos */}
        <div className="max-w-4xl mx-auto mb-16 fade-in-up">
          <div className="bg-gradient-to-br from-lilac-50 to-sage-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Course Ethos</h3>
            <p className="text-gray-700 leading-relaxed text-center text-lg">
              Enjoy a relaxed and supportive studio environment that values both skill-building and creativity. 
              While grounded in technique, the course invites you to express your own visual voice. 
              Connect with fellow artists, gain confidence, and leave with a renewed sense of inspiration.
            </p>
          </div>
        </div>

                 {/* Contact Information */}
         <div className="text-center max-w-2xl mx-auto fade-in-up">
           <div className="bg-white rounded-2xl p-8 shadow-lg">
             <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book?</h3>
             <p className="text-gray-600 mb-6">
               Spaces are limited, so contact us in advance to secure your spot. We're happy to answer any questions about the course content, our studio space, or what to expect.
             </p>
             <div className="space-y-4">
               <button
                 onClick={() => handleBookWorkshop()}
                 className="inline-flex items-center gap-2 px-6 py-3 bg-lilac-600 text-white rounded-lg hover:bg-lilac-700 transition-colors font-medium"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 Go to Contact Section
               </button>
               <p className="text-sm text-gray-600">
                 📍 Lilac Studio Space at LACO hub, Chinicato, Lagos
               </p>
             </div>
           </div>
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

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <span>📅</span>
                  <span>{selectedWorkshop.schedule}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>⏱️</span>
                  <span>{selectedWorkshop.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>🎨</span>
                  <span>{selectedWorkshop.materials}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <span>👥</span>
                  <span>Max {selectedWorkshop.maxParticipants} participants</span>
                </div>
              </div>

              {/* Learning Outcomes */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">What You'll Learn</h4>
                <ul className="space-y-2">
                  {selectedWorkshop.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-lilac-500 mt-1">•</span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => handleBookWorkshop(selectedWorkshop)}
                  className="flex-1 btn-primary"
                >
                  Contact to Book
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