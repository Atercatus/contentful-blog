import * as S from "./styles";
import { useEffect, useState } from "react";
import Head from "next/head";
import { fetchEntries } from "../../vendor/contentful-client";
import Layout from "../../components/layout";
import Headline from "../../components/headline";
import PostCard from "../../components/post-card";
import { BLOG_POST_CONTENT_TYPE } from "../../common/constant";

export const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries({
        content_type: BLOG_POST_CONTENT_TYPE,
      });
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <Layout>
      <Head>
        <title>A SERIES</title>
      </Head>
      <Headline />
      <S.CardContainer>
        <S.GridCardContainer>
          {!!posts.length
            ? posts.map((post) => (
                <PostCard key={post.fields.slug}>{post}</PostCard>
              ))
            : null}
        </S.GridCardContainer>
      </S.CardContainer>
    </Layout>
  );
};
