import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();                //abort controller 

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setError(null);
                setIsPending(false);
            })
            .catch(err => {
                if(err.name === "AbortError"){
                    console.log("Fetch Aborted");
                }
                // console.log(err.message);
                else{
                    setError(err.message);
                    setIsPending(false);
                }
            });

        return () => abortCont.abort();
    }, [url]);

    return { blogs, isPending, error };
}
 
export default useFetch; 