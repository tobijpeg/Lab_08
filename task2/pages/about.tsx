import { GetStaticProps } from "next";

interface AboutProps {
    generatedAt: string;
}

export default function About({ generatedAt }: AboutProps) {
    return (
        <main style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>About Page (SSG)</h1>
            <p>This page was generated at build time.</p>
            <p>Generated at: {generatedAt}</p>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            generatedAt: new Date().toISOString(),
        },
    };
};