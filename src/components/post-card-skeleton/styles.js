import styled, { keyframes } from "styled-components";
import * as S from "../post-card/styles";

const backgroundColor = "#cccccc";
const blink = keyframes`
  0%{
    opacity:0.9;
  }

  50%{
    opacity:1;
  }

  100%{
    opacity:0.9;
  }
`;

export const PostCardSkeleton = styled.div`
  ${S.PostCardStyle}
  background: #E3E3E3;

  &,
  * {
    animation: ${blink} 2s linear infinite;
  }
`;

export const ThumbnailContainer = styled(S.ThumbnailContainer)`
  cursor: default;
  background: ${backgroundColor};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const PostMeta = styled(S.PostMeta)`
  align-items: flex-start;
`;

export const Title = styled(S.Title)`
  width: 70%;
  height: 2.2rem;
  background: ${backgroundColor};
  border-radius: 3px;
`;

export const DescriptionContainer = styled(S.DescriptionContainer)`
  width: 90%;
  background: ${backgroundColor};
  border-radius: 3px;
`;

export const SubMeta = styled(S.SubMeta)``;

export const TagContainer = styled(S.TagContainer)``;

export const Tag = styled.span`
  width: 6rem;
  height: 2.45rem;
  background: ${backgroundColor};
  border-radius: 5px;
`;

export const CardFooter = styled(S.CardFooter)`
  border-top: none;
`;

export const PublishDate = styled(S.PublishDate)`
  flex: none;
  width: 40%;
  height: 2rem;
  background: ${backgroundColor};
  border-radius: 3px;
`;
