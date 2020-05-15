import styled from "styled-components";
import { MoreMark } from "../../svgs/more-mark/styles";
import { CalendarSVG } from "../../svgs/calendar/styles";

export const Article = styled.article`
  font-family: "Noto Sans", "Noto Sans KR", sans-serif;
  font-size: 1.8rem;
  color: #222426;
  max-width: 92rem;
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
`;

export const PublishDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${CalendarSVG} {
    margin-right: 1rem;
  }
`;

export const SocialBtnContainer = styled.div`
  ${MoreMark} {
    transform: rotate(90deg);
  }

  svg {
    margin-left: 2rem;
    cursor: pointer;

    path {
      fill: #292929;
      fill-opacity: 1;
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
