import React from 'react'

function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 flex pt-28 px-6 md:px-20 overflow-hidden">
      {/* Profile Image */}
      <div className="flex-shrink-0 h-full w-auto flex items-center justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/133738668?v=4"
          alt="Ujjwal Poudel"
          className="h-[80%] object-cover rounded-2xl shadow-2xl border-4 border-white ring-4 ring-blue-100 transition-transform duration-500 hover:scale-105"
          style={{ width: 'auto', minWidth: '300px' }}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center text-left ml-12 space-y-6 animate-slideDownOnce">
        <h1 className="text-5xl font-mono text-gray-800">
          Hi,
        </h1>
        <h1 className="text-5xl font-mono bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          I'm Ujjwal Poudel
        </h1>
        <p className="text-2xl text-gray-700">
          ( Web Developer & a Freelancer )
        </p>

        {/* New Text Section */}
        <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
          Passionate about crafting clean and functional web experiences. I love solving real-world problems through code, and I enjoy turning complex ideas into beautiful, intuitive designs.
        </p>
        <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
          Currently focused on React and Laravel, I’m always looking for new challenges to grow as a full-stack developer.
        </p>

        {/* CTA Button */}
        <div>
          <a
            href="/Contact"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;
