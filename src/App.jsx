import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./store/BlogContext";


import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <BlogProvider>
        <NavBar />

        {/* Main content area */}
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-blog" element={<CreateBlog />} />
            </Routes>
          </div>
        </main>

      </BlogProvider>
    </BrowserRouter>
  );
}

export default App;
