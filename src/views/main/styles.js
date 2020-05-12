import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f3f6;
`;

export const GridCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 3rem;
  padding: 8rem 0;
  width: 216rem;

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
