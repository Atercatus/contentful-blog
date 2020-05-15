import styled, { css } from "styled-components";
import {
  WINDOW_MAX_WIDTH,
  MAIN_GRID_TEMPLATE_COL,
  CONTENT_WIDTH,
  HEADLINE_SIDE_GRID_COL,
  HEADLINE_CENTER_GRID_COL,
} from "../../common/constant";

export const Headline = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f2f3f6;
  border-bottom: 1px solid #e6eaea;
  padding: 6rem 0;
  height: 30rem;
  box-sizing: border-box;
`;

export const HeadlineGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${MAIN_GRID_TEMPLATE_COL.NORMAL}, 1fr);
  grid-column-gap: 3rem;
  width: ${CONTENT_WIDTH.WIDEST_DESKTOP}rem;
  height: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: ${WINDOW_MAX_WIDTH.WIDE_DESKTOP}px) {
    grid-template-columns: repeat(${MAIN_GRID_TEMPLATE_COL.WIDE}, 1fr);
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.WIDE_DESKTOP}px) {
    grid-template-columns: repeat(${MAIN_GRID_TEMPLATE_COL.MEDIUM}, 1fr);
    width: ${CONTENT_WIDTH.WIDE_DESKTOP}rem;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.MEDIUM_DESKTOP}px) {
    grid-template-columns: repeat(${MAIN_GRID_TEMPLATE_COL.NORMAL}, 1fr);
    width: ${CONTENT_WIDTH.MEDIUM_DESKTOP}rem;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.NORMAL_DESKTOP}px) {
    width: ${CONTENT_WIDTH.NORMAL_DESKTOP}rem;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.NARROW_DESKTOP}px) {
    width: ${CONTENT_WIDTH.NARROW_DESKTOP}rem;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.TABLET}px) {
    width: ${CONTENT_WIDTH.TABLET}rem;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.MOBILE}px) {
    width: ${CONTENT_WIDTH.MOBILE}rem;
    padding: 8rem 0;
  }
`;

export const HeadlineSideGrid = css`
  @media only screen and (min-width: ${WINDOW_MAX_WIDTH.WIDE_DESKTOP}px) {
    grid-column: ${HEADLINE_SIDE_GRID_COL.WIDE} span;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.WIDE_DESKTOP}px) {
    grid-column: ${HEADLINE_SIDE_GRID_COL.MEDIUM} span;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.MEDIUM_DESKTOP}px) {
    grid-column: ${HEADLINE_SIDE_GRID_COL.NORMAL} span;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.NORMAL_DESKTOP}px) {
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.NARROW_DESKTOP}px) {
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.TABLET}px) {
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.MOBILE}px) {
  }
`;

export const SNSButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  height: 100%;

  ${HeadlineSideGrid}
`;

const IconContainer = css`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  /* border: 1px solid #94dbd2; */
  border: 1px solid #272727;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.7rem;
  margin-bottom: 1rem;
  transition: ease border 0.3s;

  &:last-child {
    margin: 0;
  }

  svg {
    path {
      transition: ease fill 0.3s;
      fill: #272727;
    }
  }

  &:hover {
    border: 1px solid #94dbd2;

    svg {
      path {
        fill: #94dbd2;
      }
    }
  }
`;

export const FacebookSVGBox = styled.a`
  ${IconContainer}
`;
export const TwitterSVGBox = styled.a`
  ${IconContainer}
`;
export const LinkedInSVGBox = styled.a`
  ${IconContainer}
`;
export const PaperPlaneSVGBox = styled.a`
  ${IconContainer}
`;

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-family: "Roboto", sans-serif;
  color: #202021;
`;

export const ProfileContainer = styled.div`
  @media only screen and (min-width: ${WINDOW_MAX_WIDTH.WIDE_DESKTOP}px) {
    grid-column: ${HEADLINE_CENTER_GRID_COL.WIDE} span;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.WIDE_DESKTOP}px) {
    grid-column: ${HEADLINE_CENTER_GRID_COL.MEDIUM} span;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.MEDIUM_DESKTOP}px) {
    grid-column: ${HEADLINE_CENTER_GRID_COL.NORMAL} span;
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.NORMAL_DESKTOP}px) {
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.NARROW_DESKTOP}px) {
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.TABLET}px) {
  }

  @media only screen and (max-width: ${WINDOW_MAX_WIDTH.MOBILE}px) {
  }
`;

export const Avatar = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  background: black;
  border-radius: 50%;
`;

export const Nickname = styled.h3`
  font-size: 2.4rem;
  margin: 0;
`;
export const Description = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: normal;
  margin: 0;
`;

export const StackBtn = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StackBtnContainer = styled.div`
  ${HeadlineSideGrid}
`;

export const HomepageLinkBox = styled.a`
  ${IconContainer}
`;
