import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
        // const handleDelete = (id) => {
    //     const newBlog = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlog);
    // }
    const { blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogsList blogs={ blogs } title="All Blogs!" />}
        </div>
    );
}
 
export default Home;