import styled from "styled-components";
import { TagLabel, TagLabelEffect } from "../tag-label/styles";

export const TagFilter = styled.div`
  font-family: "Roboto" sans-serif;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TagName = styled.h2`
  font-size: 4.4rem;
  margin: 0;
  padding: 0;
`;

export const TagListContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  /* background: white;
  border-radius: 8px; */

  &::-webkit-scrollbar {
    display: none;
  }

  ${TagLabel} {
    ${TagLabelEffect}
  }
`;
