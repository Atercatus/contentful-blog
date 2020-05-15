import * as S from "./styles";
import Link from "next/link";
import { hrefResolver, asResolver } from "../../vendor/link-helper";
import MoreMarkSVG from "../../svgs/more-mark";
import { getLongdate } from "../../vendor/date-format-helper";
import CalendarSVG from "../../svgs/calendar";

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
  const creationDate = getLongdate(new Date(publishDate));

  return (
    <S.PostCard>
      {!!heroImage && (
        <Link href={hrefResolver(post)} as={asResolver(post)} passHref>
          <S.ThumbnailContainer hasDescription={hasDescription}>
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

        <S.DescriptionContainer>
          <Link href={hrefResolver(post)} as={asResolver(post)} passHref>
            <S.DescriptionAnchor>
              <S.Description>{description}</S.Description>
            </S.DescriptionAnchor>
          </Link>
        </S.DescriptionContainer>
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
        {/* <CalendarSVG /> */}
        <S.PublishDate>{creationDate}</S.PublishDate>
        <MoreMarkSVG />
      </S.CardFooter>
    </S.PostCard>
  );
};

export default PostCard;
