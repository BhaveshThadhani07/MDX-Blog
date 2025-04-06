import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
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
                Tailwind CSS
              </span>
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Open source Tailwind UI components and templates to{" "}
              <br className="hidden lg:block" /> bootstrap your new apps,
              projects or landing sites!
            </p>
          </div>
          <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
            <Image
              src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
              alt="tailwind css components"
              className="w-full h-full max-w-md mx-auto"
              width={500}
              height={500}
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
          style={{
            backgroundImage:
              "url('https://source.unsplash.com/random/1600x900')",
          }}
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
        <div className="py-10">
          <div className="container mx-auto px-5">
            <h2 className="text-3xl font-bold text-center mb-6">Top Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <img
                  src="/codingBlog.jpeg"
                  alt="Blog Title 1"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold">Blog Title 1</h3>
                <p className="">
                  A brief description of the blog post goes here. It should be
                  engaging and informative.
                </p>
                <button className="mt-6 w-48 p-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
                  Read More
                </button>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <img
                  src="/codingBlog.jpeg"
                  alt="Blog Title 2"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold">Blog Title 2</h3>
                <p className="text-gray-600">
                  A brief description of the blog post goes here. It should be
                  engaging and informative.
                </p>
                <button className="mt-6 w-48 p-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
                  Read More
                </button>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <img
                  src="/codingBlog.jpeg"
                  alt="Blog Title 3"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <h3 className="text-xl font-semibold">Blog Title 3</h3>
                <p className="text-gray-600">
                  A brief description of the blog post goes here. It should be
                  engaging and informative.
                </p>
                <button className="mt-6 w-48 p-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
