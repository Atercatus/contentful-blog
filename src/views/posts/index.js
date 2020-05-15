import React from "react";
import { fetchEntries, fetchEntry } from "../../vendor/contentful-client";
import ReactMarkdown from "react-markdown";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as S from "./styles";
import Layout from "../../components/layout";
import { renderers } from "./helper/md-parse-option";
import { options } from "./helper/rich-text-parse-option";
import Head from "next/head";
import FacebookSVG from "../../svgs/facebook/fill";
import MoreMarkSVG from "../../svgs/more-mark";
import LinkedInSVG from "../../svgs/linked-in/fill";
import TwitterSVG from "../../svgs/twitter";
import CalendarSVG from "../../svgs/calendar";

export const Post = ({ post }) => {
  const { title, description, mdBody, richText, heroImage } = post.fields;
  const heroImageUrl = heroImage.fields.file.url;

  console.log(post);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <S.PostContainer>
          <S.Article>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.PostMeta>
              <S.PublishDate>
                <CalendarSVG width={20} height={20} />
                May 05, 2020
              </S.PublishDate>
              <S.SocialBtnContainer>
                <TwitterSVG width={20} height={20} />
                <FacebookSVG width={20} height={20} />
                <LinkedInSVG width={20} height={20} />
                <MoreMarkSVG />
              </S.SocialBtnContainer>
            </S.PostMeta>
            <S.Hero>
              <S.HeroImage src={heroImageUrl} />
            </S.Hero>
            <ReactMarkdown source={mdBody} renderers={renderers} />
            {documentToReactComponents(richText, options)}
          </S.Article>
        </S.PostContainer>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const posts = await fetchEntries({
    content_type: "blogPost",
    "fields.slug[exists]": true,
    select: "sys.id,fields.slug",
  });

  const paths = posts.map((post) => {
    return { params: { slug: post.fields.slug, id: post.sys.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, res }) {
  // Serverless Pre-Rendering(SPR): https://vercel.com/blog/serverless-pre-rendering
  if (res) {
    res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
  }

  const { id } = params;
  const post = await fetchEntry(id);

  return { props: { post } };
}
