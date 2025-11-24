import React from 'react'

function Services() {
  return (
    <div className="container mx-auto px-6 py-20 mt-20">
  <h2 className="text-4xl font-bold text-center mb-6 transition-transform duration-500 transform hover:scale-105">
    Services
  </h2>
  <p className="text-md text-center text-gray-600 mb-12 max-w-3xl mx-auto">
    I provide modern development services including responsive web design, dynamic digital solutions, and seamless cross-platform functionality. Let’s bring your ideas to life!
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    
 
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4 transform hover:scale-110 transition duration-300">
        🌐
      </div>
      <h3 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
        Full Stack Web Development
      </h3>
      <p className="text-gray-600">
        Building responsive, scalable web applications using PHP and Laravel as the core backend technology.
      </p>
    </div>

    
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4 transform hover:scale-110 transition duration-300">
        💼
      </div>
      <h3 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
        Frontend Web Development
      </h3>
      <p className="text-gray-600">
        Crafting visually engaging and responsive interfaces using HTML5, CSS3, Tailwind CSS, and ReactJS.
      </p>
    </div>

    
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4 transform hover:scale-110 transition duration-300">
        🔍
      </div>
      <h3 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
        SEO Optimization
      </h3>
      <p className="text-gray-600">
        Enhancing your website’s visibility and ranking on search engines through strategic SEO practices.
      </p>
    </div>

  
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
      <div className="text-5xl mb-4 transform hover:scale-110 transition duration-300">
        🔗
      </div>
      <h3 className="text-2xl font-semibold mb-3 hover:text-blue-600 transition-colors duration-300">
        RESTful API Development
      </h3>
      <p className="text-gray-600">
        Designing and developing secure, efficient, and scalable RESTful APIs to power web and mobile applications.
      </p>
    </div>

  </div>
</div>

  )
}

export default Services