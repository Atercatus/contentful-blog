import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

import * as S from "./styles";

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: paragraph,
    [BLOCKS.HEADING_1]: heading1,
    [BLOCKS.HEADING_2]: heading2,
    [BLOCKS.HEADING_3]: heading3,
    [BLOCKS.HEADING_4]: heading4,
    [BLOCKS.HEADING_5]: heading5,
    [BLOCKS.HEADING_6]: heading6,
    [BLOCKS.OL_LIST]: ol,
    [BLOCKS.UL_LIST]: ul,
    [BLOCKS.LIST_ITEM]: li,
    [BLOCKS.HR]: hr,
    [BLOCKS.QUOTE]: quote,
    [BLOCKS.EMBEDDED_ASSET]: image,
  },

  renderMark: {
    [MARKS.CODE]: code,
  },

  renderText: (text) => {
    if (text === "") {
      return <br />;
    }

    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 ? <br key={index} /> : "", textSegment];
    }, []);
  },
};

function paragraph(node, children) {
  return <S.P>{children}</S.P>;
}

function heading1(node, children) {
  return <S.H1>{children}</S.H1>;
}
function heading2(node, children) {
  return <S.H2>{children}</S.H2>;
}
function heading3(node, children) {
  return <S.H3>{children}</S.H3>;
}
function heading4(node, children) {
  return <S.H4>{children}</S.H4>;
}
function heading5(node, children) {
  return <S.H5>{children}</S.H5>;
}
function heading6(node, children) {
  return <S.H6>{children}</S.H6>;
}

function ol(node, children) {
  return <S.OL>{children}</S.OL>;
}

function ul(node, children) {
  return <S.UL>{children}</S.UL>;
}

function li(node, children) {
  return <S.LI>{children}</S.LI>;
}

function hr(node, children) {
  return <S.HR></S.HR>;
}

function quote(node, children) {
  return <S.Blockquote>{children}</S.Blockquote>;
}

function image(node, children) {
  const src = node.data.target.fields.file.url;

  return (
    <S.ImageContainer>
      <S.Image src={src} />
    </S.ImageContainer>
  );
}

function code(text) {
  const language = text.slice(0, 3)[1];
  text = text.slice(3);

  const value = text.reduce((acc, cur) => {
    if (typeof cur !== "string" && cur.type === "br") {
      return acc + "\n";
    }

    return acc + cur;
  }, "");

  return (
    <S.CodeBlock>
      <SyntaxHighlighter language={language} style={tomorrow}>
        {value}
      </SyntaxHighlighter>
    </S.CodeBlock>
  );
}
