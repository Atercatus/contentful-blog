import * as S from "./styles";
import Header from "../header";

const Layout = ({ children }) => (
  <S.Layout>
    <Header />
    <S.Content>{children}</S.Content>
  </S.Layout>
);

export default Layout;
