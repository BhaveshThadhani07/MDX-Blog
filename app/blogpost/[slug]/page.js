export default async function Page({ params }) {
  const { slug } = await params;

  const blog = {
    title: 'ABC',
    author: 'John Doe',
    description: 'This is a sample blog post.',
    date: '2025-04-06',
    content: "<p>This is the content of the blog post. It can include <strong>HTML</strong> tags and other elements.</p>"
  }

  return (
    <div className="max-w-5xl mx-auto my-5 p-4 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="text-lg mb-2 border-l-3 my-1 border-gray-500 pl-4 italic text-gray-600">"{blog.description}"</p>
      <p className="text-gray-500 text-sm">{new Date(blog.date).toLocaleDateString()}</p>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
      <p className="text-gray-500 text-sm mt-2">Author: {blog.author}</p>
</div>
  );
}
