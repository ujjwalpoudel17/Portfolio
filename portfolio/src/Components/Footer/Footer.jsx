import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-6 md:py-8 flex justify-center items-center">
        <p className="text-center text-sm sm:text-base md:text-lg tracking-wide">
          &copy; {new Date().getFullYear()} Ujjwal Poudel | All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;




// import React from 'react'

// function Footer() {
//   return (
//     <>
//    <div className='bg-gradient-to-r from-blue-900 to-purple-900  border-2 text-white flex justify-center items-center h-36 ' >
//     <p className='text-center'> &copy; Ujjwal Poudel | All Rights Reserved</p>
//    </div>
//     </>
//   )
// }

// export default Footer