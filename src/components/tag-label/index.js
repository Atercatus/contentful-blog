import * as S from "./styles";

const TagLabel = ({ tag }) => {
  return (
    <S.TagLabel color={tag} href={"#"}>
      #{tag}
    </S.TagLabel>
  );
};

export default TagLabel;
