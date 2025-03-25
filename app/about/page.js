import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl text-center">
        Hello! I'm a passionate software developer with a love for creating beautiful and functional web applications. 
        I specialize in using modern technologies like React, Next.js, and Tailwind CSS to build responsive and user-friendly interfaces.
      </p>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">My Journey</h2>
        <p className="text-gray-600">
          I started my journey in web development a few years ago, and since then, I have worked on various projects that have helped me grow my skills and knowledge. 
          I enjoy tackling challenges and continuously learning new technologies to enhance my craft.
        </p>
      </div>
      <div className="mt-6">
        <a href="#contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default About;
