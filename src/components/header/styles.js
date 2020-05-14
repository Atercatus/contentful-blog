import styled from "styled-components";
import { MagnifyingGlass } from "../../svgs/magnifying-glass/styles";

export const Header = styled.header`
  width: 100%;
  height: 6.4rem;
  background: #24292e;
  font-family: "Righteous", cursive;
  padding: 0 6rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
`;

export const Logo = styled.a`
  color: #f0f0f0;
  font-size: 2.2rem;
  text-decoration: none;

  span {
    color: #24292e;
    background: #f0f0f0;
    padding: 0 0.5rem;
    margin-right: 0.7rem;
    box-sizing: border-box;
    border-radius: 5px;
  }
`;

export const SearchIconBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  ${MagnifyingGlass} {
    cursor: pointer;

    path {
      fill: #a0a0a2;
      transition: ease fill 0.3s;
    }
  }

  ${MagnifyingGlass}:hover {
    path {
      fill: #e5e6e7;
    }
  }
`;
