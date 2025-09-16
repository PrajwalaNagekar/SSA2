import React from "react";

const posts = [
  {
    image: "/difference-between-day-school-and-residential-school.webp",
    title: "7 Differences Between Day Schools and Residential Schools You Should Know",
    date: "August 6, 2025",
    comments: "No Comments",
    excerpt: "Whether we talk about the residential school or the day school, both carry some kind of differences. It is about...",
    href: "/7-differences-between-day-schools-and-residential-schools-you-should-know"
  },
  {
    image: "/WhatsApp-Image-2025-07-03-at-13.56.12_f0545b22-1.webp",
    title: "Tips for Preparing Your Child for Boarding School Life",
    date: "August 5, 2025",
    comments: "No Comments",
    excerpt: "Are you looking to prepare your child for boarding school? Well, there are a number of benefits of sending your...",
    href: "/tips-for-preparing-your-child-for-boarding-school-life"
  },
  // Add the original two posts below
  {
    image: "/advantage-of-boarding-school-for-international-students-1024x555-1.webp",
    title: "The Advantages of Boarding School for International Students",
    date: "August 5, 2025",
    comments: "No Comments",
    excerpt: "Today, there are many International students who are coming to India to get a taste of the education here. Coming...",
    href: "/the-advantages-of-boarding-school-for-international-students"
  },
  {
    image: "/top-5-boarding-school-in-west-bengal-1.webp",
    title: "Top 5 Boarding School In West Bengal",
    date: "August 5, 2025",
    comments: "No Comments",
    excerpt: "Whenever we think about a child's education and how to engage him or her in a good environment to learn...",
    href: "/top-5-boarding-school-in-west-bengal"
  }
];

const recentPosts = [
  {
    image: "/advantage-of-boarding-school-for-international-students-1024x555-1.webp",
    title: "The Advantages of Boarding School for International Students",
    href: "#"
  },
  {
    image: "/top-5-boarding-school-in-west-bengal-1.webp",
    title: "Top 5 Boarding School In West Bengal",
    href: "#"
  },
  {
    image: "/school-compare.webp",
    title: "7 Differences Between Day Schools and Residential Schools You Should Know",
    href: "#"
  }
];

export default function BlogPageClone() {
  return (
    <div className="bg-white min-h-screen text-justify">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Blog List */}
          <div className="lg:col-span-2 space-y-10">
            {/* Tabs */}
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <button className="bg-[#4f46e5] text-white px-3 py-1 text-xs rounded font-semibold">All Posts</button>
              <button className="bg-gray-50 px-3 py-1 text-xs rounded text-gray-800 font-medium hover:bg-gray-200">Academic</button>
              <button className="bg-gray-50 px-3 py-1 text-xs rounded text-gray-800 font-medium hover:bg-gray-200">Athletics</button>
              <button className="bg-gray-50 px-3 py-1 text-xs rounded text-gray-800 font-medium hover:bg-gray-200">Blog</button>
              <button className="bg-gray-50 px-3 py-1 text-xs rounded text-gray-800 font-medium hover:bg-gray-200">Campus Life</button>
              <button className="bg-gray-50 px-3 py-1 text-xs rounded text-gray-800 font-medium hover:bg-gray-200">Events</button>
              <button className="bg-gray-50 px-3 py-1 text-xs rounded text-gray-800 font-medium hover:bg-gray-200">NEWS</button>
            </div>
            {/* Blog Posts */}
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-sm">
                <img src={post.image} alt={post.title} className="h-56 w-full object-cover rounded-t-lg" />
                <div className="px-4 py-3">
                  <h2 className="text-lg font-bold text-gray-900">{post.title}</h2>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                    <span>{post.date}</span>
                    <span>/</span>
                    <span>{post.comments}</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
                  <a href={post.href} className="text-indigo-600 hover:underline text-sm font-semibold mt-2 block">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-10">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-4 py-5 mb-6">
                <h3 className="text-base font-semibold mb-2 text-gray-900">About Us</h3>
                <p className="text-gray-700 text-sm mb-1">
                  A good system of education must instill self-esteem and creativity. The methodology of education needs to change to eliminate a lot of unwanted information.
                </p>
              </div>
              {/* Recent Posts */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-4 py-5 mb-6">
                <h3 className="text-base font-semibold mb-3 text-gray-900">Most Recent Posts</h3>
                <div className="space-y-2">
                  {recentPosts.map((post, idx) => (
                    <a key={idx} href={post.href} className="flex items-center gap-2 hover:text-indigo-600 transition-colors text-sm">
                      <img src={post.image} alt={post.title} className="w-8 h-8 object-cover rounded"/>
                      <span className="leading-tight">{post.title}</span>
                    </a>
                  ))}
                </div>
              </div>
              {/* Video Embed */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-4 py-5 mb-6">
                <iframe
                  width="100%"
                  height="60"
                  src="https://www.youtube.com/embed/VIDEO_ID_HERE"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded"
                ></iframe>
              </div>
              {/* Category */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-4 py-5 mb-6">
                <h3 className="text-base font-semibold mb-3 text-gray-900">Category</h3>
                <div className="space-y-1">
                  <a href="#" className="flex justify-between text-xs text-gray-700 hover:text-indigo-600 transition-colors">
                    Academic <span className="font-semibold text-gray-400">(1)</span>
                  </a>
                  <a href="#" className="flex justify-between text-xs text-gray-700 hover:text-indigo-600 transition-colors">
                    Athletics <span className="font-semibold text-gray-400">(1)</span>
                  </a>
                  <a href="#" className="flex justify-between text-xs text-gray-700 hover:text-indigo-600 transition-colors">
                    Campus Life <span className="font-semibold text-gray-400">(1)</span>
                  </a>
                  <a href="#" className="flex justify-between text-xs text-gray-700 hover:text-indigo-600 transition-colors">
                    Events <span className="font-semibold text-gray-400">(1)</span>
                  </a>
                  <a href="#" className="flex justify-between text-xs text-gray-700 hover:text-indigo-600 transition-colors">
                    NEWS <span className="font-semibold text-gray-400">(4)</span>
                  </a>
                </div>
              </div>
              {/* Tags */}
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm px-4 py-5">
                <h3 className="text-base font-semibold mb-3 text-gray-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-gray-50 text-xs rounded text-gray-700">Boarding</span>
                  <span className="px-2 py-1 bg-gray-50 text-xs rounded text-gray-700">School</span>
                  <span className="px-2 py-1 bg-gray-50 text-xs rounded text-gray-700">West Bengal</span>
                  <span className="px-2 py-1 bg-gray-50 text-xs rounded text-gray-700">Education</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
