import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../store/BlogContext";

const BlogLoader = ({ children }) => {
    const { setBlogs } = useContext(BlogContext);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
    fetch("http://localhost:3006/api/blogs")
      .then((res) => res.json()) 
      .then((resJson) => {
        setBlogs(resJson.blogs);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <h1>Loading Blogs...</h1>}
      {error && <h1>Error Loading Blogs...</h1>}
      {!loading && !error && children}  
    </>
  );
};

export default BlogLoader;
