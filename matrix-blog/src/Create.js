import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('New blog added.');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    placeholder="Write your title here..."
                    value={ title }
                    onChange={ (e) => setTitle(e.target.value) }
                    required
                />
                <label>Blog Content:</label>
                <textarea
                    value={ body }
                    onChange={ (e) => setBody(e.target.value) }
                    placeholder="Write your content here..."
                    required
                ></textarea>
                <label>Author:</label>
                <input 
                    type="text"
                    placeholder="Your name here..."
                    value={ author }
                    onChange={ (e) => setAuthor(e.target.value) }
                    required
                />
                {!isPending && <button>Submit</button>}
                {isPending && <button disabled>Submitting</button>}
            </form>
        </div>
    );
}
 
export default Create;