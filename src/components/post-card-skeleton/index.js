import * as S from "./styles";

const PostCardSkeleton = () => {
  return (
    <S.PostCardSkeleton>
      <S.ThumbnailContainer />
      <S.PostMeta>
        <S.Title />
        <S.DescriptionContainer />
        <S.SubMeta>
          <S.TagContainer>
            <S.Tag />
          </S.TagContainer>
        </S.SubMeta>
      </S.PostMeta>
      <S.CardFooter>
        <S.PublishDate />
      </S.CardFooter>
    </S.PostCardSkeleton>
  );
};

export default PostCardSkeleton;
