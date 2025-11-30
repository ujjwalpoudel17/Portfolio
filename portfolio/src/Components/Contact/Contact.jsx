import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-50 mt-28" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide ">
              Contact
            </p>
            <h2 className="font-heading mb-4 font-bold tracking-tight  text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-indigo-600 ">
              I'm always ready to support you.
            </p>
          </div>
        </div>

        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Contact Info */}
            <div className="pr-6">
              <p className="mt-3 mb-12 text-lg ">
                You can reach me using the communication channels below.
              </p>
              <ul className="space-y-6">
                {/* Address */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium "> Address</h3>
                    <p className="">Gaindakot-14</p>
                    <p className="">Nawalpur,Nepal</p>
                  </div>
                </li>

                {/* Phone */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5l5 2v4a2 2 0 0 1-2 2a16 16 0 0 1-15-15a2 2 0 0 1 2-2" />
                      <path d="M15 7a2 2 0 0 1 2 2" />
                      <path d="M15 3a6 6 0 0 1 6 6" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium">Contact</h3>
                    <p className="">Phone: +9779867820238</p>
                    <p className="">Mail: ujjwalpoudel999@gmail.com</p>
                  </div>
                </li>

                {/* Hours */}
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="mb-2 text-lg font-medium">Working Hours</h3>
                    <p className="">Sunday - Friday: Any Shift</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map */}
           <div className="h-fit w-full">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4455.11759507907!2d84.37233287348852!3d27.711804219576223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb28aa4ff59f%3A0x2338033298c7629!2sGaindakot%20Municipality%2C%20Gaindakot-8!5e0!3m2!1sen!2snp!4v1748021108815!5m2!1sen!2snp"
    width="100%"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Gaindakot Map"
  ></iframe>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
