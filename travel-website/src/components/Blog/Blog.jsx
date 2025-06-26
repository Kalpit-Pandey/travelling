import { blogPosts } from './blogData';
import '../../styles/components/blog.css';

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Our Blogs
          </h2>
          <span className="underline"></span>
          <p className="section-desc">
            An insight to the incredible experiences in the world
          </p>
        </div>

        <div className="section-content">
          <div className="blogs-wrapper">
            {/* Main (Left) Article */}
            <div className="blogs-article blogs-left-articles">
              <div className="left-article-image">
                <img src={blogPosts.mainPost.image} alt={blogPosts.mainPost.title} />
              </div>
              <div className="left-article-content">
                <h3 className="content-title">
                  {blogPosts.mainPost.title}
                </h3>
                <p className="content">
                  {blogPosts.mainPost.content}
                </p>
                <p className="read-more">
                  Read More &gt;
                </p>
              </div>
            </div>

            {/* Right Articles */}
            <div className="blogs-article blogs-right-articles">
              {blogPosts.sidePosts.map(post => (
                <div key={post.id} className="right-article">
                  <div className="right-article-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="right-article-content">
                    <h3 className="content-title">
                      {post.title}
                    </h3>
                    <p className="content">
                      {post.content}
                    </p>
                    <p className="read-more">
                      Read More &gt;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;