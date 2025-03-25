import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">free repository</span> for community <br className="hidden lg:block" /> components using <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Open source Tailwind UI components and templates to <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
              <input type="search" name="query" placeholder="Search Components" required className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0" />
              <button type="submit" className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg" alt="tailwind css components" className="w-full h-full max-w-md mx-auto" width={500} height={500} />
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-10 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Choose Your Plan</h2>
          <p className="mt-2 text-gray-500">Flexible pricing options for everyone</p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Pricing Card 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Basic</h3>
              <p className="mt-2 text-4xl font-semibold text-gray-800">$19</p>
              <p className="mt-4 text-gray-500">Per Month</p>
              <ul className="mt-6 space-y-2">
                <li className="text-gray-600">✔️ Feature 1</li>
                <li className="text-gray-600">✔️ Feature 2</li>
                <li className="text-gray-600">✔️ Feature 3</li>
              </ul>
              <button className="mt-6 w-full p-2 text-white bg-primary rounded-lg hover:bg-primary/70">Get Started</button>
            </div>
            {/* Pricing Card 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Standard</h3>
              <p className="mt-2 text-4xl font-semibold text-gray-800">$49</p>
              <p className="mt-4 text-gray-500">Per Month</p>
              <ul className="mt-6 space-y-2">
                <li className="text-gray-600">✔️ Feature 1</li>
                <li className="text-gray-600">✔️ Feature 2</li>
                <li className="text-gray-600">✔️ Feature 3</li>
                <li className="text-gray-600">✔️ Feature 4</li>
              </ul>
              <button className="mt-6 w-full p-2 text-white bg-primary rounded-lg hover:bg-primary/70">Get Started</button>
            </div>
            {/* Pricing Card 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800">Premium</h3>
              <p className="mt-2 text-4xl font-semibold text-gray-800">$99</p>
              <p className="mt-4 text-gray-500">Per Month</p>
              <ul className="mt-6 space-y-2">
                <li className="text-gray-600">✔️ Feature 1</li>
                <li className="text-gray-600">✔️ Feature 2</li>
                <li className="text-gray-600">✔️ Feature 3</li>
                <li className="text-gray-600">✔️ Feature 4</li>
                <li className="text-gray-600">✔️ Feature 5</li>
              </ul>
              <button className="mt-6 w-full p-2 text-white bg-primary rounded-lg hover:bg-primary/70">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
