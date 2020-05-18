import { BLOG_POST_CONTENT_TYPE } from "../../../common/constants/grid-system";

export const OPTION = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export const SKIP_GAP = 10;

export function getPaginationQuery({ skip = 0 }) {
  return {
    content_type: BLOG_POST_CONTENT_TYPE,
    limit: SKIP_GAP,
    skip,
  };
}
