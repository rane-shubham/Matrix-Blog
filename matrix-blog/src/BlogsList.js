import { Link } from "react-router-dom";

const BlogsList = ({blogs, title }) => {

    const ifEmpty = () => {
        if(blogs.length===0)
        {
            return(
                <div className="empty">
                    <p><i>Empty</i></p>
                    <Link to="/create"><i>Click here to add a new blog!</i></Link>
                </div>
            );
        }
    }

    return (
        <div className="blogs-list">
            <h1>{title}</h1>
            {ifEmpty()}
            {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/api/${blog.id}/`}>
                            <h2>{blog.title}</h2>
                            <p>By {blog.author}</p>
                        </Link> 
                    </div>
            ))}
        </div>
    );
}

export default BlogsList;