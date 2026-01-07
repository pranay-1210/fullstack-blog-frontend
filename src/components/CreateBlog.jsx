import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const titleRef = useRef();
  const contentRef = useRef();
  const authorRef = useRef();
  const navigate = useNavigate();

  const handleCreateBlog = async (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const author = authorRef.current.value;

    fetch("http://localhost:3006/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        author,
      }),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.blog);
        titleRef.current.value = "";
        contentRef.current.value = "";
        authorRef.current.value = "";
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Pour your heart out ✍️
        </h2>

        <p className="text-gray-500 text-center mb-6">
          Write and publish your thoughts as a blog post
        </p>

        <form onSubmit={handleCreateBlog} className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Blog title"
            ref={titleRef}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <textarea
            placeholder="Write your content here..."
            ref={contentRef}
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="text"
            placeholder="Author name"
            ref={authorRef}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <button
            type="submit"
            className="mt-4 bg-indigo-600 text-white font-semibold py-3 rounded-lg
                       hover:bg-indigo-700 transition duration-200"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
