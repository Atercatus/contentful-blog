import * as S from "./styles";
import Head from "next/head";
import Layout from "../../components/layout";
import Headline from "../../components/headline";
import PostCard from "../../components/post-card";
import useInfiniteScroll from "./hooks/use-infinite-scroll";
import { fetchEntries } from "../../vendor/contentful-client";
import { getPaginationQuery, SKIP_GAP } from "./helper/configure-pagination";
import { spr } from "../../vendor/spr";

export const Main = ({ initialSkip, initialPosts }) => {
  const { Sentinel, posts } = useInfiniteScroll(initialSkip, initialPosts);

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
          <S.Sentinel ref={Sentinel} />
        </S.GridCardContainer>
      </S.CardContainer>
    </Layout>
  );
};

export async function getStaticProps({ res }) {
  spr(res);

  const initialPosts = await fetchEntries(getPaginationQuery({ skip: 0 }));

  return { props: { initialSkip: SKIP_GAP, initialPosts } };
}
