import * as S from "./styles";

const TagLabel = ({ tag }) => {
  return (
    <S.TagLabel color={tag} href={"#"} data-tag={tag}>
      # {tag}
    </S.TagLabel>
  );
};

export default TagLabel;
