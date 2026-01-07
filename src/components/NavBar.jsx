import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-gray-900"
        >
          <span className="text-indigo-600 text-xl">✍️</span>
          Blogify
        </Link>

        {/* Links */}
        <nav className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition ${
                isActive
                  ? "text-gray-900 font-medium"
                  : "text-gray-500 hover:text-gray-900"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/create-blog"
            className="text-sm px-5 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            Write
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
