import matter from "gray-matter";
import fs from "fs";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

export default async function Page({ params }) {
  const { slug } = await params;

  // const blog = {
  //   title: 'ABC',
  //   author: 'John Doe',
  //   description: 'This is a sample blog post.',
  //   date: '2025-04-06',
  //   content: "<p>This is the content of the blog post. It can include <strong>HTML</strong> tags and other elements.</p>"
  // }

  const filepath = `content/${params.slug}.md`;
  if (!fs.existsSync(filepath)) {
    notFound();
    return
  }
  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);


  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)

  const htmlContent = (await processor.process(content)).toString()

  return (
    <div className="prose dark:prose-invert max-w-5xl mx-auto my-5 p-4 border rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-lg mb-2 border-l-3 my-1 border-gray-500 pl-4 italic text-gray-600">
        "{data.description}"
      </p>
      <p className="text-gray-500 text-sm">
        {new Date(data.date).toLocaleDateString()}
      </p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      <p className="text-gray-500 text-sm mt-2">Author: {data.author}</p>
    </div>
  );
}
