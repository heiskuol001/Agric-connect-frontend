import { useState } from "react";
import { Link } from "react-router-dom";
import pics from "../../utils/photo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navigate = useNavigate()

  const navLinks = [
    { name: "Dashboard", path: "/farmer/dashboard" },
    { name: "Products", path: "/farmer/products" },
    { name: "Orders", path: "/farmer/orders" },
    { name: "Messages", path: "/farmer/messages" },
    ];
    
   const handleLogOut = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/user/api/auth/logout",
      {
        method: "POST",
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Logout failed");
    }

    navigate("/login");
  } catch (error) {
    console.error("Logout error:", error);
  }
};
  return (
    <nav className="relative w-full bg-slate-100 shadow-md">
      {/* Main Navbar */}
      <div className="h-16 flex items-center justify-between px-5 sm:px-8 lg:px-10">
        
        {/* Logo */}
        <Link
          to="/farmer/dashboard"
          className="text-xl font-bold text-slate-800"
        >
          Agric<span className="text-green-600">Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="font-semibold text-slate-700 transition-colors duration-200 hover:text-green-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Login Info */}
        <div className="hidden md:block">
          <h1 className="font-semibold text-slate-700">
                      <img
                          src={pics[17]} alt="logout" className="h-15 w-15 cursor-pointer"
                        onClick={handleLogOut}
                      />
          </h1>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-slate-200 transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {/* Top Line */}
          <span
            className={`block w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />

          {/* Middle Line */}
          <span
            className={`block w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Bottom Line */}
          <span
            className={`block w-6 h-0.5 bg-slate-800 rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-2 border-t border-slate-200">
          
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg font-semibold text-slate-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Login Info */}
          <div className="mt-3 pt-3 border-t border-slate-200">
            <h1 className="px-4 py-2 font-semibold text-slate-700">
                          <img
                              src={pics[17]} alt="logout" className="h-13 w-15 "
                          onClick={handleLogOut}
                          />
            </h1>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;