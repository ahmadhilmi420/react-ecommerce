import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
const location = useLocation();
const navigate = useNavigate();

  // Check if the user is logged in (based on the presence of a token)
const isLoggedIn = Boolean(localStorage.getItem("token"));

const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    navigate("/login"); // Redirect to the login page
};

const getLinkClass = (path: string) => {
    const baseClass = "px-4 py-2 rounded-md transition-colors duration-200";
    return location.pathname === path
    ? `${baseClass} text-white bg-indigo-600`
    : `${baseClass} text-gray-300 hover:bg-gray-800`;
};

return (
    <nav className="bg-gray-900 border-b border-gray-800">
    <div className="container mx-auto px-4">
        <div className="flex items-center h-16 justify-between">

          {/* Navigation Links */}
        <div className="flex space-x-4">
            <Link
            to="/" className={getLinkClass("/")}>
            Home
            </Link>
            <Link
            to="/produts" className={getLinkClass("/produts")}>
            Produts
            </Link>
        </div>

          {/* Login/Logout Button */}

        <div>
            {isLoggedIn ?(
            <button
                onClick={handleLogout}
                className ="px-4 py-2 text-gray-300 hover:bg-red-600
                hover:text-white rounded-md transition-colors duration-200">
                Logout
            </button>
            ) : (
              // <Link to="/login" className={getLinkClass("/login")}>Login</Link>
            <button onClick={() => navigate("/auth/login")}>Login</button>
            )}
            
        </div>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
