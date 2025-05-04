"use client"
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll('h2');
    const h2Data = Array.from(h2Elements).map(h2 => ({
      text: h2.textContent,
      id: h2.id
    }));
    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="on-this-page fixed top-24 md:right-48 hidden lg:block border-2 border-gray-300 rounded-lg p-5 w-80 shadow-lg">
      <h2 className='text-xl font-bold my-2 text-center'>Table of Contents</h2>
      <hr className="border-gray-300 mb-2"/>
      <ul className='text-md space-y-2'>
        {headings.map((heading, index) => (
          <li key={index} className="transition-transform duration-300 hover:scale-105">
            <a href={`#${heading.id}`} className="hover:text-blue-500">{heading.text}</a>
          </li>
        ))}
      </ul>
</div>

  );
};

export default OnThisPage;