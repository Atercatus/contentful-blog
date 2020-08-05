import * as S from "./syles";
import TagLabel from "../tag-label";
import { TAG_COLOR } from "../../common/constants/color-table";

const TagFilter = () => {
  const setCategory = (e) => {
    if (!e.target.hasAttribute("data-tag")) {
      return;
    }

    const category = e.target.dataset.tag;

    console.log(category);
  };

  return (
    <S.TagFilter>
      <S.TagListContainer onClick={setCategory}>
        {Object.keys(TAG_COLOR).map((tagName) => (
          <TagLabel tag={tagName} key={tagName} />
        ))}
      </S.TagListContainer>
    </S.TagFilter>
  );
};

export default TagFilter;
