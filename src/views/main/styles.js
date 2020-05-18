import styled from "styled-components";
import {
  MAIN_GRID_TEMPLATE_COL,
  CONTENT_WIDTH,
  WINDOW_MAX_WIDTH,
} from "../../common/constants/grid-system";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f3f6;
`;

export const GridCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${MAIN_GRID_TEMPLATE_COL.NORMAL}, 1fr);
  grid-column-gap: 3rem;
  padding: 8rem 0;
  width: ${CONTENT_WIDTH.WIDEST_DESKTOP}rem;

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
    width: ${CONTENT_WIDTH.MOBILE};
    padding: 8rem 0;
  }
`;

export const Sentinel = styled.div``;
