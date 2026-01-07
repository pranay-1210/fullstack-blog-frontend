import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExampleProvider } from "./store/ExampleContext";

import Home from "./components/Home";
import CreateBlog from "./components/CreateBlog";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <ExampleProvider>
        <NavBar />

        <div className="min-h-screen bg-gray-100 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Routes>
        </div>

      </ExampleProvider>
    </BrowserRouter>
  );
}

export default App;
