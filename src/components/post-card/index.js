import * as S from "./styles";
import Link from "next/link";
import { hrefResolver, asResolver } from "../../vendor/link-helper";
import MoreMark from "../../svgs/more-mark";

/**
 *
 * @param {child} PostCardProps
 * @description PostCardProps: {sys, fields}
 */
const PostCard = ({ children }) => {
  const post = children;

  const { fields } = post;
  const { title, description, heroImage, publishDate, tags } = fields;
  const hasDescription = !!description;

  return (
    <S.PostCard>
      {!!heroImage && (
        <Link href={hrefResolver(post)} as={asResolver(post)} passHref>
          <S.ThumbnailContainer hasDescription={hasDescription}>
            <MoreMark />
            <S.Thumbnail src={heroImage.fields.file.url} />
          </S.ThumbnailContainer>
        </Link>
      )}
      <S.PostMeta>
        <Link href={hrefResolver(post)} as={asResolver(post)} passHref>
          <S.TitleAnchor>
            <S.Title>{title}</S.Title>
          </S.TitleAnchor>
        </Link>

        <Link href={hrefResolver(post)} as={asResolver(post)} passHref>
          <S.DescriptionContainer>
            <S.DescriptionAnchor>
              <S.Description>{description}</S.Description>
            </S.DescriptionAnchor>
          </S.DescriptionContainer>
        </Link>
        <S.SubMeta>
          <S.TagContainer>
            {!!tags &&
              tags.map((tag) => {
                return (
                  <S.Tag key={tag} href='#'>
                    <S.TagMark>#</S.TagMark>
                    {tag}
                  </S.Tag>
                );
              })}
          </S.TagContainer>
        </S.SubMeta>
      </S.PostMeta>
      <S.CardFooter>
        <S.Views>2000 views</S.Views>
        <S.PublishDate>May 05, 2020</S.PublishDate>
        {/* <S.PublishDate>{publishDate || ""}</S.PublishDate> */}
      </S.CardFooter>
    </S.PostCard>
  );
};

export default PostCard;
