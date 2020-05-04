import {
  Post,
  getStaticPaths as GetStaticPaths,
  getStaticProps as GetStaticProps,
} from "../../../views/posts";

export const getStaticPaths = GetStaticPaths;
export const getStaticProps = GetStaticProps;

export default Post;
