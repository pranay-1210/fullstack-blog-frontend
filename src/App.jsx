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

        {/* Main content area */}
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-blog" element={<CreateBlog />} />
            </Routes>
          </div>
        </main>

      </ExampleProvider>
    </BrowserRouter>
  );
}

export default App;
