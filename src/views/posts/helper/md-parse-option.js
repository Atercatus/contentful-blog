import * as S from "./styles";

export const renderers = {
  paragraph,
  heading,
  list,
  blockquote,
  listItem,
  thematicBreak,
  image,
  inlineCode,
  code,
};

function paragraph(props) {
  return <S.P>{props.children}</S.P>;
}

function heading(props) {
  const { level, children } = props;

  switch (level) {
    case 1:
      return <S.H1>{children}</S.H1>;
    case 2:
      return <S.H2>{children}</S.H2>;
    case 3:
      return <S.H3>{children}</S.H3>;
    case 4:
      return <S.H4>{children}</S.H4>;
    case 5:
      return <S.H5>{children}</S.H5>;
    case 6:
      return <S.H6>{children}</S.H6>;
  }
}

function blockquote(props) {
  return <S.Blockquote>{props.children}</S.Blockquote>;
}

function list(props) {
  const { ordered, children } = props;

  if (ordered) {
    return <ol>{children}</ol>;
  }

  return <S.UL>{children}</S.UL>;
}

function listItem(props) {
  return <S.LI>{props.children}</S.LI>;
}

function thematicBreak(props) {
  return <S.HR>{props.children}</S.HR>;
}

function image(props) {
  return (
    <S.ImageContainer>
      <S.Image src={props.src} />
    </S.ImageContainer>
  );
}

function inlineCode(props) {
  return <S.InlineCode>{props.children}</S.InlineCode>;
}

function code(props) {
  const { language, value } = props;

  return (
    <pre>
      <code className={language}>{value}</code>
    </pre>
  );
}
