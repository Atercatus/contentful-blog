import React from "react";
import { fetchEntries, fetchEntry } from "../../vendor/contentful-client";
import ReactMarkdown from "react-markdown";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as S from "./styles";

export const Post = ({ post }) => {
  const mdBody = post.fields.mdBody;
  const richText = post.fields.richBody;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <S.Paragraph>{children}</S.Paragraph>
      ),
    },
    renderText: (text) => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 ? <br key={index} /> : "", textSegment];
      }, []);
    },
  };
  console.log(richText);

  return (
    <S.Article>
      <ReactMarkdown source={mdBody} />
      {documentToReactComponents(richText, options)}
    </S.Article>
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
