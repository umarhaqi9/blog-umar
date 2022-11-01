import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;
  console.log(posts);
  return (
    <main className="relative min-h-screen bg-slate-200 sm:flex sm:items-center sm:justify-center">
      <div className="rounded-xl bg-white py-6 px-6">
        <h1 className="font-bold text-5xl mb-5">Posts</h1>
        <Link to="admin" className="font-semibold text-red-600 hover:underline">
          Admin
        </Link>
        <ul>
          {posts.map((post) => (
            <li className="font-semibold" key={post.slug}>
              <Link
                to={post.slug}
                className="text-black hover:text-blue-600 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}