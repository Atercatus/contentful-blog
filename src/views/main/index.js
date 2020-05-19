import * as S from "./styles";
import Head from "next/head";
import Layout from "../../components/layout";
import Headline from "../../components/headline";
import PostCard from "../../components/post-card";
import useInfiniteScroll from "./hooks/use-infinite-scroll";
import { fetchEntries } from "../../vendor/contentful-client";
import { getPaginationQuery, SKIP_GAP } from "./helper/configure-pagination";
import { spr } from "../../vendor/spr";
import CircleSpinner from "../../components/circle-spinner";
import TagDropdown from "../../components/tag-dropdown";

export const Main = ({ initialSkip, initialPosts, total }) => {
  const { sentinel, posts, isFetching } = useInfiniteScroll(
    initialSkip,
    initialPosts,
    total
  );

  return (
    <Layout>
      <Head>
        <title>A SERIES</title>
      </Head>
      <Headline />
      <S.ContentContainer>
        <S.GridContentContainer>
          <S.TagDropdownContainer>
            <TagDropdown />
          </S.TagDropdownContainer>
          {!!posts.length
            ? posts.map((post) => (
                <PostCard key={post.fields.slug}>{post}</PostCard>
              ))
            : null}

          <S.Sentinel ref={sentinel} />
          {isFetching && (
            <S.SpinnerContainer>
              <CircleSpinner
                width={30}
                height={30}
                stroke={"#9C9C9C"}
                strokeWidth={3}
                strokeLinecap={"square"}
              />
            </S.SpinnerContainer>
          )}
        </S.GridContentContainer>
      </S.ContentContainer>
    </Layout>
  );
};

export async function getStaticProps({ res }) {
  spr(res);

  const { entries, total } = await fetchEntries(
    getPaginationQuery({ skip: 0 })
  );

  return {
    props: {
      initialSkip: Math.min(total, SKIP_GAP),
      initialPosts: entries,
      total,
    },
  };
}
