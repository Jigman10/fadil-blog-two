import trash from "./pics/trash.png";

const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => {
        return (
          <div className="blog-preview" key={blog.id}>
            <h2> {blog.title}</h2>
            <p>Written by {blog.author}</p>
            <img
              className="trash"
              src={trash}
              alt="Deleteblog"
              onClick={() => {
                handleDelete(blog.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
