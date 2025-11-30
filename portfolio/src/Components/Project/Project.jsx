import React from 'react'

function Project() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="container mx-auto flex-grow px-4 sm:px-6 lg:px-8 py-16">
        
        <section
          id="projects"
          className="mb-20 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-center md:text-left mt-30">
            Projects
          </h2>
          <p className="mb-10 text-center md:text-left text-gray-700 max-w-3xl">
            Here are some of the projects that showcase my skills in web development, demonstrating my ability to build responsive, accessible, and modern applications using various technologies.
          </p>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
           
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Responsive Home Rental System</h3>
              <p className="mb-4 text-gray-600">
                A fully responsive blog platform built with PHP and Tailwind CSS.
              </p>
              <a
                href="https://github.com/ujjwalpoudel17/renthome.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline transition-colors duration-300"
              >
                View Project →
              </a>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">Responsive Hotel Booking System</h3>
              <p className="mb-4 text-gray-600">
                A Hotel Management System built with Laravel and Tailwind CSS.
              </p>
              <a
                href="https://github.com/ujjwalpoudel17/this-is-bookit.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline transition-colors duration-300"
              >
                View Project →
              </a>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
              <p className="mb-4 text-gray-600">
                A full-stack e-commerce platform built with Laravel/PHP and Tailwind CSS for frontend.
              </p>
              <a
                href="https://github.com/ujjwalpoudel17/sixth-sem-final.git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline transition-colors duration-300"
              >
                View Project →
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="animate-fade-in-up mt-20"
          style={{ animationDelay: '0.4s' }}
        >
        
        </section>
      </main>
    </div>
  )
}

export default Project









// import React from 'react'

// function Project() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <main className="container mx-auto flex-grow overflow-hidden">
//         {/* Projects Section */}
//         <section
//           id="projects"
//           className="mb-20 animate-fade-in-up"
//           style={{ animationDelay: '0.2s' }}
//         >
//           <h2 className="text-3xl font-bold mb-5 mt-50">Projects</h2>
//           <p className="mb-10">
//             Here are some of the projects that showcase my skills in web development, demonstrating my ability to build responsive, accessible, and modern applications using various technologies.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-white p-10 rounded-lg shadow-xl  border-1">
//               <h3 className="text-xl font-semibold mb-2">Responsive Home Rental System </h3>
//               <p className="mb-4">A fully responsive blog platform built with PHP and Tailwind CSS.</p>
//               <a href="https://github.com/ujjwalpoudel17/renthome.git" className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
//             </div>
//             <div className="bg-white p-10 rounded-lg shadow-xl border-1">
//               <h3 className="text-xl font-semibold mb-2">Responsive Hotel Booking System</h3>
//               <p className="mb-4">A Hotel Management System built with Laravel and Tailwind Css.</p>
//               <a href="https://github.com/ujjwalpoudel17/this-is-bookit.git" className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
//             </div>
//             <div className="bg-white p-10 rounded-lg shadow-xl border-1">
//               <h3 className="text-xl font-semibold mb-2">E-commerce Website</h3>
//               <p className="mb-4">A full-stack e-commerce platform built with Laravel/PHP and Tailwind Css for Frontend.</p>
//               <a href="https://github.com/ujjwalpoudel17/sixth-sem-final.git" className="text-primary-light dark:text-primary-dark hover:underline transition-colors duration-300">View Project →</a>
//             </div>
//           </div>
//         </section>

//         <section
//           id="contact"
//           className="animate-fade-in-up"
//           style={{ animationDelay: '0.4s' }}
//         >
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Project

