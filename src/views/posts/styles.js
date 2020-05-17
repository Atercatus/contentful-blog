import styled from "styled-components";
import { MoreMark } from "../../svgs/more-mark/styles";
import { CalendarSVG } from "../../svgs/calendar/styles";
import { POST_CONTENT_WIDTH } from "../../common/constant";
import { Anchor } from "./helper/styles";

export const Article = styled.article`
  font-family: "Noto Sans", "Noto Sans KR", sans-serif;
  font-size: 1.8rem;
  color: #222426;
  max-width: ${POST_CONTENT_WIDTH / 10}rem;
  padding: 2rem 0 10rem 0;
  box-sizing: border-box;

  @media only screen and (max-width: ${POST_CONTENT_WIDTH}px) {
    width: 100%;
    padding: 2rem 1rem 10rem 1rem;
  }

  ${Anchor}
`;

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 4.5rem;
  font-weight: bold;
  margin: 5rem 0 2rem 0;
`;

export const Description = styled.p`
  font-size: 2rem;
  color: #757575;
`;

export const PostMeta = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0 5rem 0;

  @media only screen and (max-width: ${POST_CONTENT_WIDTH}px) {
    margin: 2rem 0 2.5rem 0;
  }
`;

export const PublishDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${CalendarSVG} {
    margin-right: 1rem;

    @media only screen and (max-width: ${POST_CONTENT_WIDTH}px) {
      display: none;
    }
  }
`;

export const SocialBtnContainer = styled.div`
  align-self: flex-end;

  ${MoreMark} {
    transform: rotate(90deg);
  }

  svg {
    margin-left: 2rem;
    cursor: pointer;
    transition: ease transform 0.3s;

    path {
      fill: #292929;
      fill-opacity: 1;
    }

    &:hover:not(:last-child) {
      transform: translateY(-0.4rem);
    }

    @media only screen and (max-width: ${POST_CONTENT_WIDTH}px) {
      align-items: flex-start;
      margin: 0 1rem 0 0;

      &:last-child {
        margin: 0;
      }
    }
  }
`;

export const Hero = styled.div`
  width: 100%;
`;

export const HeroImage = styled.img`
  width: 100%;
  object-fit: fill;
`;

export const CaptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Caption = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  /* color: #7689b4; */
  color: #757575;
`;

export const TagContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
