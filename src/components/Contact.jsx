import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-purple-800">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-neutralDark">
          In hac habitasse platea dictumst
        </p>
      </div>

      <div className="flex justify-center items-stretch">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <p className="text-lg text-neutralDark mb-8">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
              scelerisque sagittis ante, ac tincidunt sem venenatis ut.
            </p>
            <ul>
              <li className="flex mb-6">
                <div className="h-10 w-10 flex items-center justify-center rounded bg-purple-800 text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary">
                    Email
                  </h3>
                  <p className="text-neutral">official.moiz.id@gmail</p>
                </div>
              </li>
              <li className="flex mb-6">
                <div className="h-10 w-10 flex items-center justify-center rounded bg-blue-500 text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary">
                    Contact
                  </h3>
                  <p className="text-neutral">Mobile: +1 (123) 456-7890</p>
                </div>
              </li>
              <li className="flex">
                <div className="h-10 w-10 flex items-center justify-center rounded bg-neutralDark text-primary">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary">
                    Working Hours
                  </h3>
                  <p className="text-neutral">
                    Monday - Friday: 08:00 - 17:00
                  </p>
                  <p className="text-neutral">
                    Saturday & Sunday: 08:00 - 12:00
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-primary p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-800 mb-6">
              Send Me A Message
            </h2>
            <form className="space-y-6">
              <input
                type="email"
                className="w-full h-12 px-4 border border-neutral rounded-lg text-secondary placeholder-neutralDark focus:outline-none focus:ring focus:ring-purple-800"
                placeholder="Email"
              />
              <input
                type="tel"
                className="w-full h-12 px-4 border border-neutral rounded-lg text-secondary placeholder-neutralDark focus:outline-none focus:ring focus:ring-purple-800"
                placeholder="Phone"
              />
              <textarea
                className="w-full h-32 px-4 border border-neutral rounded-lg text-secondary placeholder-neutralDark focus:outline-none focus:ring focus:ring-purple-800"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="w-full h-12 bg-blue-500 text-primary font-semibold rounded-lg hover:bg-secondary transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
