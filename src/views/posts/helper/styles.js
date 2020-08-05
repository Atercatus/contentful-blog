import styled, { css } from "styled-components";

export const Anchor = styled.a`
  color: #4b87e2;
  text-decoration: none;
  word-wrap: break-word;

  &:hover {
    text-decoration: underline;
  }
`;

export const P = styled.p`
  font-size: 1.9rem;
  line-height: 3.5rem;
`;

const headingMargin = css`
  margin: 6.5rem 0 3rem 0;
`;

export const H1 = styled.h1`
  font-size: 4rem;
  ${headingMargin}
`;
export const H2 = styled.h2`
  font-size: 3.6rem;
  ${headingMargin}
`;
export const H3 = styled.h3`
  font-size: 2.8rem;
  ${headingMargin}
`;
export const H4 = styled.h4`
  font-size: 2.2rem;
  ${headingMargin}
`;
export const H5 = styled.h5`
  font-size: 2rem;
  ${headingMargin}
`;
export const H6 = styled.h6`
  font-size: 1.8rem;
  ${headingMargin}
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
  padding: 0rem 0.5rem 0.1rem 0.5rem;
  box-sizing: border-box;
  color: #eb5757;
  border-radius: 5px;
  font-family: "Noto Sans", "Noto Sans KR", sans-serif;
  word-wrap: break-word;
  line-height: 0;
`;

export const CodeBlock = styled.div`
  pre {
    border-radius: 5px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  word-break: break-word;
  margin: 0;
  padding: 1rem 0.7rem;
  color: white;
  background: #2b2b33;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(2n - 1):not(:only-child) {
    background: rgba(43, 43, 51, 0.05);
  }
`;

export const TableCell = css`
  text-align: left;
  word-break: break-word;
  margin: 0;
  padding: 1rem 0.7rem;
`;
export const TD = styled.td`
  ${TableCell}
`;
export const TH = styled.th`
  ${TableCell}
`;
