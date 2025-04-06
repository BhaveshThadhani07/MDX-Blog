import React from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from 'fs';
import matter from "gray-matter";

const dirContent = fs.readdirSync('content', 'utf-8')

const blogs = dirContent.map(file=>{
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
  const {data} = matter(fileContent)
  return data
})

// const blogs = [
//   {
//     title: "Blog Post 1",
//     description: "This is a description for blog post 1.",
//     slug: "blog-post-1",
//     date: "2023-10-01",
//     author: "Author 1",
//     image: "/codingBlog.jpeg",
//   },
//   {
//     title: "Blog Post 2",
//     description: "This is a description for blog post 2.",
//     slug: "blog-post-2",
//     date: "2023-10-02",
//     author: "Author 2",
//     image: "/codingBlog.jpeg",
//   },
//   // Add more blog objects as needed
// ];

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.description}</p>
              <p className="text-gray-500 text-sm mt-2">
                By {blog.author} on {new Date(blog.date).toLocaleDateString()}
              </p>
              {/* <button className="mt-6 w-48 p-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out">Read More</button> */}
              {/* <Button className='m-2' variant="outline" >Read More</Button> */}
              <Link
                href={`/blogpost/${blog.slug}`}
                className={`${buttonVariants({ variant: "outline" })} 
               mt-2 mb-2 mx-auto 
               w-22 
               rounded-lg 
               transition duration-300 ease-in-out 
               hover:bg-gray-200 hover:border-gray-400`}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
