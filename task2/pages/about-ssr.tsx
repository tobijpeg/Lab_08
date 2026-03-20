import { GetServerSideProps } from "next";

interface AboutSSRProps {
    generatedAt: string;
}

export default function AboutSSR({ generatedAt }: AboutSSRProps) {
    return (
        <main style={{ padding: "20px", fontFamily: "Arial" }}>
            <h1>About Page (SSR)</h1>
            <p>This page was generated on each request.</p>
            <p>Generated at: {generatedAt}</p>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        props: {
            generatedAt: new Date().toISOString(),
        },
    };
};