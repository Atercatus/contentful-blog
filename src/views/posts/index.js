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
import TagLabel from "../../components/tag-label";
import { spr } from "../../vendor/spr";
import { getLongdate } from "../../vendor/date-format-helper";

export const Post = ({ post }) => {
  const {
    title,
    description,
    mdBody,
    richBody,
    heroImage,
    tags,
    publishDate,
  } = post.fields;
  const heroImageUrl = heroImage.fields.file.url;
  const [caption, source] = heroImage.fields.description.split("\n");
  const creationDate = getLongdate(new Date(publishDate));

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
            <S.TagContainer>
              {!!tags && tags.map((tag) => <TagLabel key={tag} tag={tag} />)}
            </S.TagContainer>
            <S.PostMeta>
              <S.PublishDate>
                <CalendarSVG width={24} height={24} />
                {creationDate}
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
              <S.CaptionContainer>
                <S.Caption href={source}>{caption}</S.Caption>
              </S.CaptionContainer>
            </S.Hero>
            <ReactMarkdown source={mdBody} renderers={renderers} />
            {documentToReactComponents(richBody, options)}
          </S.Article>
        </S.PostContainer>
      </Layout>
    </>
  );
};

export async function getStaticPaths() {
  const { entries } = await fetchEntries({
    content_type: "blogPost",
    "fields.slug[exists]": true,
    select: "sys.id,fields.slug",
  });

  const paths = entries.map((post) => {
    return { params: { slug: post.fields.slug, id: post.sys.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params, res }) {
  spr(res);

  const { id } = params;
  const post = await fetchEntry(id);

  return { props: { post } };
}
