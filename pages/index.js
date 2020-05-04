import { useEffect, useState } from "react";
import Head from "next/head";
import Post from "../components/post";
import Link from "next/link";
import { hrefResolver, asResolver } from "../vendor/link-helper";
import { fetchEntries } from "../vendor/contentful-client";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries();
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel='stylesheet'
          href='https://css.zeit.sh/v1.css'
          type='text/css'
        />
      </Head>
      {!!posts.length
        ? posts.map((post) => (
            <>
              <Post
                alt={post.fields.alt}
                date={post.fields.date}
                key={post.fields.title}
                image={post.fields.image}
                title={post.fields.title}
                url={post.fields.url}
              />
            </>
          ))
        : null}
      {!!posts.length &&
        posts.map((post) => (
          <Link href={hrefResolver(post)} as={asResolver(post)}>
            asd
          </Link>
        ))}
    </>
  );
}

export default HomePage;
