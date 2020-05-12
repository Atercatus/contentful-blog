import styled, { css } from "styled-components";

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
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3rem;
  width: 216rem;
  height: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: 2160px) {
    grid-template-columns: repeat(18, 1fr);
  }

  @media only screen and (max-width: 2160px) {
    grid-template-columns: repeat(15, 1fr);
    width: 180rem;
  }

  @media only screen and (max-width: 1800px) {
    grid-template-columns: repeat(12, 1fr);
    width: 144rem;
  }

  @media only screen and (max-width: 1440px) {
    width: 132rem;
  }

  @media only screen and (max-width: 1320px) {
    width: 99rem;
  }

  @media only screen and (max-width: 990px) {
    width: 66rem;
  }

  @media only screen and (max-width: 660px) {
    width: 100%;
    padding: 8rem 0;
  }
`;

export const SNSButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  height: 100%;

  @media only screen and (min-width: 2160px) {
    grid-column: 5 span;
  }

  @media only screen and (max-width: 2160px) {
    grid-column: 4 span;
  }

  @media only screen and (max-width: 1800px) {
    /* grid-template-columns: repeat(12, 1fr); */
    grid-column: 3 span;
  }

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1320px) {
  }

  @media only screen and (max-width: 990px) {
  }

  @media only screen and (max-width: 660px) {
  }
`;

const IconContainer = css`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid #272727;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.7rem;

  &:last-child {
    margin: 0;
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
  @media only screen and (min-width: 2160px) {
    grid-column: 8 span;
  }

  @media only screen and (max-width: 2160px) {
    grid-column: 7 span;
  }

  @media only screen and (max-width: 1800px) {
    grid-column: 6 span;
  }

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1320px) {
  }

  @media only screen and (max-width: 990px) {
  }

  @media only screen and (max-width: 660px) {
  }
`;

export const Avatar = styled.div`
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
  @media only screen and (min-width: 2160px) {
    grid-column: 5 span;
  }

  @media only screen and (max-width: 2160px) {
    grid-column: 4 span;
  }

  @media only screen and (max-width: 1800px) {
    grid-column: 3 span;
  }

  @media only screen and (max-width: 1440px) {
  }

  @media only screen and (max-width: 1320px) {
  }

  @media only screen and (max-width: 990px) {
  }

  @media only screen and (max-width: 660px) {
  }
`;

export const HomepageLinkBox = styled.a`
  ${IconContainer}
`;
