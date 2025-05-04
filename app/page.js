"use client";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning", 
      ],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main className="flex justify-center px-4">
      <div className="w-full max-w-7xl">
        {" "}
        {/* Constrained width container */}
        <section className="container py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
         <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
           <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
             A <span className="font-semibold">free repository</span> for
             community <br className="hidden lg:block" /> components using{" "}
             <span className="font-semibold underline decoration-primary">
               <span ref={el} />
             </span>
           </h1>
           <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
             Open source Tailwind UI components and templates to{" "}
             <br className="hidden lg:block" /> bootstrap your new apps, projects
             or landing sites!
           </p>
           <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
             <form
               action="https://www.creative-tim.com/twcomponents/search"
               className="flex flex-wrap justify-between md:flex-row"
             ></form>
           </div>
         </div>
         <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
           <img
             src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
             alt="tailwind css components"
             className="w-full h-full max-w-md mx-auto"
           />
         </div>
       </section>
        <div className="flex justify-center w-full px-4">
          <div className="w-full max-w-3xl">
            <hr className="w-full border-t" />
          </div>
        </div>
        {/* Pricing Section */}
        <section className="py-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold">Choose Your Plan</h2>
            <p className="mt-2">Flexible pricing options for everyone</p>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Pricing Card 1 */}
              <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue-500">
                <h3 className="text-xl font-bold text-gray-800">Basic</h3>
                <p className="mt-2 text-3xl font-semibold text-gray-800">$19</p>
                <p className="mt-4 text-gray-500">Per Month</p>
                <p className="mt-2 text-gray-600">
                  Ideal for individuals starting out.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="text-gray-600">✔️ Feature 1</li>
                  <li className="text-gray-600">✔️ Feature 2</li>
                  <li className="text-gray-600">✔️ Feature 3</li>
                </ul>
                <button className="mt-6 w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                  Get Started
                </button>
              </div>
              {/* Pricing Card 2 - Highlighted Best Plan */}
              <div className="p-4 bg-blue-100 border border-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue-500">
                <h3 className="text-xl font-bold text-gray-800">Standard</h3>
                <p className="mt-2 text-3xl font-semibold text-gray-800">$49</p>
                <p className="mt-4 text-gray-500">Per Month</p>
                <p className="mt-2 text-gray-600">
                  Perfect for small teams and growing businesses.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="text-gray-600">✔️ Feature 1</li>
                  <li className="text-gray-600">✔️ Feature 2</li>
                  <li className="text-gray-600">✔️ Feature 3</li>
                  <li className="text-gray-600">✔️ Feature 4</li>
                </ul>
                <button className="mt-6 w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                  Get Started
                </button>
              </div>
              {/* Pricing Card 3 */}
              <div className="p-4 bg-white rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-blue-500">
                <h3 className="text-xl font-bold text-gray-800">Premium</h3>
                <p className="mt-2 text-3xl font-semibold text-gray-800">$99</p>
                <p className="mt-4 text-gray-500">Per Month</p>
                <p className="mt-2 text-gray-600">
                  Best for larger teams with advanced needs.
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="text-gray-600">✔️ Feature 1</li>
                  <li className="text-gray-600">✔️ Feature 2</li>
                  <li className="text-gray-600">✔️ Feature 3</li>
                  <li className="text-gray-600">✔️ Feature 4</li>
                  <li className="text-gray-600">✔️ Feature 5</li>
                </ul>
                <button className="mt-6 w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center w-full px-4">
          <div className="w-full max-w-3xl">
            <hr className="w-full border-t" />
          </div>
        </div>
        {/* Testimonials Section */}
        <section
          className="py-20 bg-cover bg-center"
          // style={{
          //   backgroundImage:
          //     "url('https://source.unsplash.com/random/1600x900')",
          // }}
        >
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold">What Our Customers Say</h2>
            <p className="mt-4 text-lg">Real feedback from real users</p>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Testimonial Card 1 */}
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <p className="text-gray-600 italic">
                  "This service has transformed my business! Highly recommend."
                </p>
                <h4 className="mt-4 font-bold text-gray-800">John Doe</h4>
                <p className="text-gray-500">CEO, Company A</p>
              </div>
              {/* Testimonial Card 2 */}
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <p className="text-gray-600 italic">
                  "Amazing experience! The support team is fantastic."
                </p>
                <h4 className="mt-4 font-bold text-gray-800">Jane Smith</h4>
                <p className="text-gray-500">Marketing Director, Company B</p>
              </div>
              {/* Testimonial Card 3 */}
              <div className="p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <p className="text-gray-600 italic">
                  "A game-changer for our workflow. Couldn't be happier!"
                </p>
                <h4 className="mt-4 font-bold text-gray-800">Emily Johnson</h4>
                <p className="text-gray-500">Product Manager, Company C</p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center w-full px-4 mb-5">
          <div className="w-full max-w-3xl">
            <hr className="w-full border-t " />
          </div>
        </div>
        {/* Blogs Section */}
        <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Check out our most popular blog posts
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Blog 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="/typescript.webp"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 1
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            {/* Blog 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Blog 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 2
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            {/* Blog 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
                  alt="Blog 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Blog Post Title 3
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}