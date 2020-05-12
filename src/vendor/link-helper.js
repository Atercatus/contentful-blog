export const hrefResolver = function (post) {
  const type = post.sys.contentType.sys.id;

  if (type === "blogPost") {
    return `/posts/[id]/[slug]`;
  }
  return "/";
};

export const asResolver = function (post) {
  const type = post.sys.contentType.sys.id;
  const slug = post.fields.slug;
  const id = post.sys.id;

  if (type === "blogPost") {
    return `/posts/${id}/${slug}`;
  }
  return "/";
};
