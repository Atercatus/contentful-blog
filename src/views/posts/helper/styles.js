import styled from "styled-components";

export const P = styled.p`
  font-size: 1.8rem;

  a {
    color: #0366d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 4rem;
`;
export const H2 = styled.h2`
  font-size: 3.6rem;
`;
export const H3 = styled.h3`
  font-size: 2.8rem;
`;
export const H4 = styled.h4`
  font-size: 2.2rem;
`;
export const H5 = styled.h5`
  font-size: 2rem;
`;
export const H6 = styled.h6`
  font-size: 1.8rem;
`;

export const Blockquote = styled.blockquote`
  position: relative;
  margin-left: 0;

  p {
    margin-left: 3rem;
  }

  &::before {
    position: absolute;
    content: "";
    border-left: 6px solid #515151;
    top: 0;
    left: 0;
    bottom: 0;
  }
`;

export const UL = styled.ul`
  padding: 0 0 0 3rem;
`;

export const OL = styled.ol`
  padding: 0 0 0 3rem;
`;

export const LI = styled.li`
  margin-top: 0.8rem;
`;

export const HR = styled.hr`
  border-top: 1px solid #b6b6b6;
  margin: 8rem 0 6rem 0;
`;

export const ImageContainer = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: fill;
`;

export const InlineCode = styled.code`
  background: #ededeb;
  padding: 0.3rem 0.5rem;
  box-sizing: border-box;
  color: #eb5757;
  border-radius: 5px;
  font-family: "Noto Sans", "Noto Sans KR", sans-serif;
`;

export const CodeBlock = styled.div`
  pre {
    border-radius: 5px;
  }
`;
