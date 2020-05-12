import styled from "styled-components";
import { MoreMark } from "../../svgs/more-mark/styles";

export const ThumbnailContainer = styled.a`
  position: relative;
  width: 100%;
  height: ${(props) => (props.hasDescription ? "16rem" : "22rem")};
  cursor: pointer;
  display: flex;
  justify-content: flex-end;

  ${MoreMark} {
    position: absolute;
    box-sizing: border-box;
    transform: translate(-0.5rem, 1rem);
    z-index: 1;

    path {
      fill: white;
    }
  }

  ${MoreMark}:hover {
    path {
      fill-opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #202121;
    transition: ease opacity 0.3s;
    opacity: 0;
  }
`;

export const Thumbnail = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: ease transform 0.3s;
  z-index: 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const PostMeta = styled.div`
  width: 100%;
  padding: 1.5rem 1.6rem 0 1.6rem;
  flex: 1 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleAnchor = styled.a`
  width: 100%;
  text-decoration: none;
`;

export const Title = styled.h3`
  width: 100%;
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  color: #2f3237;

  /* for multiline ellipsis */
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  &:hover {
    color: black;
  }
`;

export const DescriptionContainer = styled.div`
  font-size: 1.4rem;
  font-weight: regular;
  margin: 0.8rem 0;
  flex: 1 0 auto;
`;

export const DescriptionAnchor = styled.a`
  cursor: pointer;
  height: fit-content;
  width: 100%;
`;

export const Description = styled.p`
  margin: 0;
  color: #717174;

  /* for multiline ellipsis */
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  &:hover {
    color: #2f3237;
  }
`;

export const SubMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 1.3rem;
`;

export const PublishDate = styled.div`
  color: #929294;
  font-size: 1.2rem;
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  span:last-child {
    margin-right: 0;
  }
`;

export const TagMark = styled.span`
  font-weight: bold;
  color: #717174;
`;

export const Tag = styled.a`
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  text-decoration: none;
  color: #929294;

  &:hover {
    color: #2f3237;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  height: 5rem;
  border-top: 1px solid #f2f3f6;
  flex-shrink: 0;
  padding: 0 1.6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

export const Views = styled.span`
  font-size: 1.2rem;
  flex: 1 0 auto;
`;

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 3 span;
  background: #ffffff;
  height: 38rem;
  border-radius: 5px;
  margin-bottom: 3.5rem;
  box-shadow: 0 6px 25px rgba(23, 25, 29, 0.05);
  font-family: "Roboto", sans-serif;
  transition: ease box-shadow 0.3s, transform 0.3s;

  @media only screen and (max-width: 1320px) {
    grid-column: 4 span;
  }

  @media only screen and (max-width: 990px) {
    grid-column: 6 span;
  }

  @media only screen and (max-width: 660px) {
    grid-column: 12 span;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 35px rgba(22, 25, 29, 0.14);

    ${MoreMark} {
      path {
        fill-opacity: 0.9;
      }
    }

    ${ThumbnailContainer}::after {
      opacity: 0.3;
    }
  }
`;
