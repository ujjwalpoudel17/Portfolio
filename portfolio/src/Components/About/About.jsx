import React from 'react'

function About() {
  return (
  <>
 <div className="w-full min-h-screen flex items-center bg-gray-50 ">
  <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-10 lg:px-0 flex flex-col gap-4 pt-10 pb-20 ">
  
    <div className="flex flex-col gap-2 mb-2 md:mb-4">
      <h2 className="text-5xl font-serif font-semibold">About Me</h2>
      <span className="w-16 h-[4px] bg-rose-500 rounded"></span>
      <span className="w-8 h-[4px] bg-rose-500 rounded"></span>
    </div>

    <h4 className="capitalize text-2xl font-semibold">I'm Ujjwal Poudel and i'm 
      <span className="text-rose-500"> web developer and a Freelancer</span>
    </h4>
    <p className="text-md">I am a dedicated and innovative FullStack Developer passionate about creating impactful digital
      experiences. With a keen eye for detail and a commitment to excellence, I specialize in designing and developing
      solutions that combine creativity with functionality.</p>

    <div className="w-full flex flex-col lg:flex-row gap-6 sm:gap-4 lg:gap-6 justify-between">
      
      <div className="w-full flex flex-col items-stretch gap-4">
        
        <div className="flex flex-col sm:flex-row gap-2 md:gap-6 items-center justify-between font-serif">
          
          <ul className="w-full text-gray-900 ">
            <li className="py-2 border-b border-gray-200 dark:border-gray-600"><span className="font-bold">Birthday :</span> 07
              feb 2002</li>
            <li className="py-2 border-b border-gray-200 dark:border-gray-600"><span className="font-bold">Website :</span>
              https://www.ujjwalpoudel.com.np</li>
            <li className="py-2 border-b border-gray-200 dark:border-gray-600"><span className="font-bold">Degree :</span> Bachelor of Computer Applictaion(B.C.A)</li>
            <li className="py-2 border-b border-gray-200 dark:border-gray-600"><span className="font-bold">Location :</span>
              Gaindakot-14, Nawalpur, Nepal</li>
          </ul>
         
          <ul className="w-full text-gray-900 font-serif">
            <li className="py-2 border-b border-gray-200 dark:border-gray-600"><span className="font-bold">Email :</span>
              ujjwalpoudel999@gmailcom
            </li>
            <li className="py-2 border-b border-gray-200 dark:border-gray-600"><span className="font-bold">Phone No :</span>
              +9779867820238</li>
            <li className="py-2 border-b border-gray-200 dark:border-gray-600"><span className="font-bold">Employment :</span>
              Remote/On-site/Hybrid</li>
            <li className="py-2 border-b border-gray-200 dark:border-gray-600"><span className="font-bold">Freelance :</span>
              Available</li>
          </ul>
        </div>
        
        <div className="flex gap-4 justify-center sm:justify-start mt-5">
          <button className="px-4 sm:px-6 py-2 bg-rose-600 rounded-full text-white font-bold">Download CV</button>
        </div>
      </div>
      
      <div className="w-full flex flex-col gap-2 mt-5">
       
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between font-semibold">
            <span>PHP/Laravel</span>
            <span>80 %</span>
          </div>
        
          <div className="w-full bg-gray-300 rounded-full">
            <div className="w-[92%] h-2 bg-rose-500 rounded-full"></div>
          </div>
        </div>

        
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between font-semibold">
            <span>HTML/CSS/Javascript</span>
            <span>70 %</span>
          </div>
        
          <div className="w-full bg-gray-300 rounded-full">
            <div className="w-[90%] h-2 bg-rose-500 rounded-full"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between font-semibold">
            <span>React Js</span>
            <span>50 %</span>
          </div>
        
          <div className="w-full bg-gray-300 rounded-full">
            <div className="w-[80%] h-2 bg-rose-500 rounded-full"></div>
          </div>
        </div>

      
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between font-semibold">
            <span>Tailwind Css</span>
            <span>85 %</span>
          </div>
       
          <div className="w-full bg-gray-300 rounded-full">
            <div className="w-[85%] h-2 bg-rose-500 rounded-full"></div>
          </div>
        </div>

      
        <div className="flex flex-col gap-2">
          <div className="w-full flex justify-between font-semibold">
            <span>RestAPI</span>
            <span>50 %</span>
          </div>
         
          <div className="w-full bg-gray-300 rounded-full">
            <div className="w-[70%] h-2 bg-rose-500 rounded-full"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
  </>
  )
}

export default About