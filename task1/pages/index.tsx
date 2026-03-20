import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "20px" }}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>
              By {post.author} | {post.readTime} min read
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
    revalidate: 60,
  };
};