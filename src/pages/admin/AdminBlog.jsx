import { useState } from "react";
import { blogPosts } from "../../data/blog";
import { Link } from "react-router-dom";

export default function AdminBlog() {
  const [posts] = useState(blogPosts);

  return (
    <main className="container-custom py-10">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-poppins font-semibold">Manage Blog</h1>
          <p className="mt-2 text-white/70">Create and manage blog posts</p>
        </div>
        <button className="btn-primary">Create New Post</button>
      </div>

      <div className="mt-8 space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="card-glass p-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-white/70 mt-2">{post.excerpt}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/60">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.publishedAt.toLocaleDateString()}</span>
                  <span>•</span>
                  <span className="text-primary">{post.category}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Link to={`/blog/${post.slug}`} className="btn-secondary text-sm">
                  View
                </Link>
                <button className="btn-primary text-sm">Edit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
