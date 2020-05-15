import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import * as S from "./styles";

export const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <S.P>{children}</S.P>,
  },

  renderText: (text) => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 ? <br key={index} /> : "", textSegment];
    }, []);
  },
};
