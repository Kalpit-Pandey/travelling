const BlogCard = ({ image, title, content, isMain = false }) => {
  return isMain ? (
    <div className="blogs-article blogs-left-articles">
      <div className="left-article-image">
        <img src={image} alt={title} />
      </div>
      <div className="left-article-content">
        <h3 className="content-title">{title}</h3>
        <p className="content">{content}</p>
        <p className="read-more">Read More &gt;</p>
      </div>
    </div>
  ) : (
    <div className="right-article">
      <div className="right-article-image">
        <img src={image} alt={title} />
      </div>
      <div className="right-article-content">
        <h3 className="content-title">{title}</h3>
        <p className="content">{content}</p>
        <p className="read-more">Read More &gt;</p>
      </div>
    </div>
  );
};

export default BlogCard;