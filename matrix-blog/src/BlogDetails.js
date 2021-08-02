import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { blogs, error, isPending } = useFetch('http://localhost:8000/blogs/api/' + id + "/");
    const history = useHistory();


    const handleDelete = () => {
        fetch("http://localhost:8000/blogs/api/" + id + "/", {
            method: "DELETE"
        })
        .then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <h4>By { blogs.author }</h4>
                    <hr/>
                    <p>{ blogs.body }</p>
                    <hr/>
                    <button onClick={handleDelete}>Delete</button>
                </article>) }
        </div>
    );
}
 
export default BlogDetails;