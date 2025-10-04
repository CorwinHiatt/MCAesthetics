import React from 'react';
import Link from 'next/link';

// Example blog post data
// In a real application, you would fetch this from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js App Router",
    excerpt: "Learn how to use the new App Router in Next.js for better routing and layouts.",
    date: "October 4, 2025",
    slug: "getting-started-with-nextjs-app-router"
  },
  {
    id: 2,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS.",
    date: "September 28, 2025",
    slug: "building-responsive-uis-with-tailwind"
  },
  {
    id: 3,
    title: "State Management in React Applications",
    excerpt: "Explore different state management solutions for your React applications.",
    date: "September 15, 2025",
    slug: "state-management-in-react-applications"
  }
];

export const metadata = {
  title: 'Blog | My Next.js Site',
  description: 'Read the latest articles about web development and technology.',
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      
      <div className="space-y-10">
        {blogPosts.map((post) => (
          <article key={post.id} className="border-b pb-8">
            <div className="text-gray-500 mb-2">{post.date}</div>
            <h2 className="text-2xl font-semibold mb-3">
              <Link href={`/blog/${post.slug}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-700">{post.excerpt}</p>
            <div className="mt-4">
              <Link 
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}


