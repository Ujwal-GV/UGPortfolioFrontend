import React from 'react';
import Messages from './Messages';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope, FaPersonBooth } from 'react-icons/fa';

export default function Contact() {
  const navigate = useNavigate();
  const handleChange = () => {
    window.open("/allmessages", "_blank");
  }
  
  return (
    <>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-100 py-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-lg mb-6">
            Feel free to reach out if you have any questions or would like to work together!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-1">
            <a
              href="mailto:ujwalgowda2002v@gmail.com"
              className="w-3/4 lg:w-full md:w-full mx-auto flex items-center justify-center px-6 py-6 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all"
            >
              <FaEnvelope className="mr-2" />
              Send an Email
            </a>

            <a
              href="https://github.com/Ujwal-GV/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-3/4 lg:w-full md:w-full mx-auto flex items-center justify-center px-6 py-6 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all"
            >
              <FaGithub className="mr-2" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ujwal-gowda-v-5ba277276"
              target="_blank"
              rel="noopener noreferrer"
              className="w-3/4 lg:w-full md:w-full mx-auto flex items-center justify-center px-6 py-6 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn
            </a>

            <a
              href="tel:+91 7483268624"
              className="w-3/4 lg:w-full md:w-full mx-auto flex items-center justify-center px-6 py-6 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-all"
            >
              <FaPhoneAlt className="mr-2" />
              Contact Me
            </a>
          </div>

          <div className="mt-8">
            <Messages />
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-6 mt-2 relative">
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Ujwal Gowda. All rights reserved.</p>
        </div>
        <span className='absolute right-0 bottom-6 lg:bottom-5 mr-4 text-md lg:text-2xl md:text-2xl hover:cursor-pointer hover:text-gray-300'>
            <FaPersonBooth onClick={handleChange} />
        </span>
      </footer>
    </>
  );
}
