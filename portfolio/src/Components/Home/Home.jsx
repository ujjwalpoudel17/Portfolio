import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 flex flex-col md:flex-row items-center pt-28 px-6 md:px-20 gap-10 md:gap-16">
      
     
      <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto">
        <img
          src="https://scontent.fktm24-1.fna.fbcdn.net/v/t39.30808-6/584618062_826695796742497_4398777367123113209_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9r6l9QkKw8cQ7kNvwFVD8QW&_nc_oc=AdkitFbrdmH8FqbVWeSthr7T0teRJvk6IYH9_vHPcPxcOKqfXT3hFnzc5sb2zR-3wrnmDyuXyT10IeramPY8DsV2&_nc_zt=23&_nc_ht=scontent.fktm24-1.fna&_nc_gid=kwh_r9kwZwp_YjNQRHgwpQ&oh=00_AflRRh9WVNvgg3JbnczQtYXrotYH1bmUCclF84YMowEmVw&oe=69507C3A"
          alt="Ujjwal Poudel"
          className="
           w-60 h-60 
    sm:w-72 sm:h-72 
    md:w-80 md:h-80 
    object-cover rounded-2xl shadow-2xl border-4 border-white ring-4 ring-blue-100 
    transition-transform duration-500 hover:scale-105
            {/* w-60 h-60 
            sm:w-72 sm:h-72 
            md:w-auto md:h-[80%] 
            object-cover rounded-2xl shadow-2xl border-4 border-white ring-4 ring-blue-100 
            transition-transform duration-500 hover:scale-105 */}
          "
        />
      </div>

   
      <div className="flex flex-col justify-center text-center md:text-left space-y-6 animate-slideDownOnce max-w-xl">
        <h1 className="text-4xl sm:text-5xl font-mono text-gray-800">
          Hi,
        </h1>
        <h1 className="text-4xl sm:text-5xl font-mono bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          I'm Ujjwal Poudel
        </h1>

        <p className="text-xl text-gray-700">
          ( Web Developer & a Freelancer )
        </p>

       
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Passionate about crafting clean and functional web experiences. I love solving real-world problems through code, and I enjoy turning complex ideas into beautiful, intuitive designs.
        </p>

        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Currently focused on React and Laravel, I’m always looking for new challenges to grow as a full-stack developer.
        </p>

       
        <div className="pt-2">
       <Link
  to="/contact"
  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
>
  Contact Me
</Link>

        </div>
      </div>
    </div>
  );
}

export default Home;





















// import React from 'react'

// function Home() {
//   return (
//     <div className="h-screen bg-gradient-to-r from-gray-50 via-white to-gray-100 flex pt-28 px-6 md:px-20 overflow-hidden">
//       {/* Profile Image */}
//       <div className="flex-shrink-0 h-full w-auto flex items-center justify-center">
//         <img
//           src="https://avatars.githubusercontent.com/u/133738668?v=4"
//           alt="Ujjwal Poudel"
//           className="h-[80%] object-cover rounded-2xl shadow-2xl border-4 border-white ring-4 ring-blue-100 transition-transform duration-500 hover:scale-105"
//           style={{ width: 'auto', minWidth: '300px' }}
//         />
//       </div>

//       {/* Text Content */}
//       <div className="flex flex-col justify-center text-left ml-12 space-y-6 animate-slideDownOnce">
//         <h1 className="text-5xl font-mono text-gray-800">
//           Hi,
//         </h1>
//         <h1 className="text-5xl font-mono bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
//           I'm Ujjwal Poudel
//         </h1>
//         <p className="text-2xl text-gray-700">
//           ( Web Developer & a Freelancer )
//         </p>

//         {/* New Text Section */}
//         <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
//           Passionate about crafting clean and functional web experiences. I love solving real-world problems through code, and I enjoy turning complex ideas into beautiful, intuitive designs.
//         </p>
//         <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
//           Currently focused on React and Laravel, I’m always looking for new challenges to grow as a full-stack developer.
//         </p>

//         {/* CTA Button */}
//         <div>
//           <a
//             href="/Contact"
//             className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home;
