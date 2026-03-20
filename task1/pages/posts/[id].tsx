import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/types";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";
interface PostPageProps {
    post: Post;
    author: {
        name: string;
        bio: string;
    };
}
export default function PostPage({ post, author }: PostPageProps) {
    return (
        <article style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>{post.title}</h1>
            <p>By {author.name}</p>
            <p>{post.content}</p>
            <div style={{ marginTop: "10px" }}>
                {post.tags.map((tag) => (
                    <span key={tag} style={{ marginRight: "10px" }}>
                        #{tag}
                    </span>
                ))}
            </div>
        </article>
    );
}
export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts();
    return {
        paths: posts.map((post) => ({
            params: { id: post.id },
        })),
        fallback: "blocking",
    };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = await getPostById(params?.id as string);
    if (!post) {
        return {
            notFound: true,
        };
    }
    const authorData = await getAuthorById(post.author);
    return {
        props: {
            post,
            author: {
                name: authorData?.name || "Unknown Author",
                bio: authorData?.bio || "",
            },
        },
        revalidate: 60,
    };
};