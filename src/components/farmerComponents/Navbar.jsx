
import { useState } from "react";
import { Link } from "react-router-dom";
import pics from "../../utils/photo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const navLinks = [
    {
      name: "Dashboard",
      path: "/farmer/dashboard",
      image: pics[20],
    },
    {
      name: "Products",
      path: "/farmer/products",
      image: pics[12],
    },
    {
      name: "Orders",
      path: "/farmer/orders",
      image: pics[19],
    },
    {
      name: "Messages",
      path: "/farmer/messages",
      image: pics[18],
    },
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
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-slate-700 transition-all duration-200 hover:bg-green-50 hover:text-green-600"
              >
                {/* Link Image */}
                <img
                  src={link.image}
                  alt={link.name}
                  className="w-5 h-5 object-contain"
                />

                {/* Link Name */}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="hidden md:flex items-center">
          <img
            src={pics[17]}
            alt="Logout"
            className="w-9 h-9 object-contain cursor-pointer transition-transform duration-200 hover:scale-110"
            onClick={handleLogOut}
          />
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
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 pt-2 border-t border-slate-200">

          {/* Mobile Navigation */}
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-slate-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                >
                  {/* Link Image */}
                  <img
                    src={link.image}
                    alt={link.name}
                    className="w-5 h-5 object-contain"
                  />

                  {/* Link Name */}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Logout */}
          <div className="mt-3 pt-3 border-t border-slate-200">
            <button
              onClick={handleLogOut}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-red-500 hover:bg-red-50 transition-all duration-200"
            >
              <img
                src={pics[17]}
                alt="Logout"
                className="w-5 h-5 object-contain"
              />

              <span>Logout</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
