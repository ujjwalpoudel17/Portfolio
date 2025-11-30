import React from 'react'

function Project() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="container mx-auto flex-grow overflow-hidden">
        {/* Projects Section */}
        <section
          id="projects"
          className="mb-20 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="text-3xl font-bold mb-5 mt-50">Projects</h2>
          <p className="mb-10">
            Here are some of the projects that showcase my skills in web development, demonstrating my ability to build responsive, accessible, and modern applications using various technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-lg shadow-xl hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 border-1">
              <h3 className="text-xl font-semibold mb-2">Responsive Home Rental System </h3>
              <p className="mb-4">A fully responsive blog platform built with PHP and Tailwind CSS.</p>
              <a href="#" className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Responsive Hotel Booking System</h3>
              <p className="mb-4">A Hotel Management System built with Laravel and Tailwind Css.</p>
              <a href="#" className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-xl hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
              <p className="mb-4">A full-stack e-commerce platform built with Laravel/PHP and Tailwind Css for Frontend.</p>
              <a href="#" className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
        </section>
      </main>
    </div>
  )
}

export default Project

