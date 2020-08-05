import styled, { css } from "styled-components";
import { TAG_COLOR } from "../../common/constants/color-table";

export const TagLabel = styled.a`
  font-size: 1.8rem;
  font-weight: 500;
  color: white;
  background: ${(props) => TAG_COLOR[props.color] || TAG_COLOR.default};
  border-radius: 5px;
  padding: 0.2rem 0.5rem 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-right: 0.7rem;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
`;

export const TagLabelEffect = css`
  transition: ease transform 0.3s;

  &:hover {
    transform: translateY(-0.4rem);
  }
`;
