function Post({ alt, date, image, title, url }) {
  return (
    <div className='container'>
      <a href={url}>
        <img alt={alt} src={image} />
      </a>
      <div className='text'>
        <h2>{title}</h2>
        <h4>{date}</h4>
      </div>
    </div>
  );
}

export default Post;
