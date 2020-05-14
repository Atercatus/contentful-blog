import * as S from "./styles";
import MagnifyingGlassSVG from "../../svgs/magnifying-glass";

const Header = () => (
  <S.Header>
    <S.Logo href='#'>
      <span>A</span>
      SERIES
    </S.Logo>
    <S.SearchBar>
      <MagnifyingGlassSVG />

      {/* <S.SearchIconBox>
        <MagnifyingGlassSVG />
      </S.SearchIconBox> */}
    </S.SearchBar>
  </S.Header>
);

export default Header;
