import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="fixed top-0 w-full text-center text-white bg-green-600 border-b-4 border-green-700m">
        <ul>
          <li className="inline-block py-4">
            <Link to="/" className="pl-6 pr-8">
              Home
            </Link>
            <Link to="/about" className="pl-6 pr-8">
              About
            </Link>
            <Link to="/article" className="pl-6 pr-8">
              Article
            </Link>
            <Link to="/article-list" className="pl-6 pr-8">
              Article List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
