
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "首页", path: "/" },
    { name: "关于我们", path: "/about" },
    { name: "产品展示", path: "/products" },
    { name: "新闻动态", path: "/news" },
    { name: "团队成员", path: "/members" },
    { name: "联系我们", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 bg-gradient-to-r from-primary to-secondary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="text-xl font-bold text-white hover:scale-105 transition-transform duration-300"
          >
            梦笔笙花工作室
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-white px-3 py-2 rounded-md transition-all duration-300
                  hover:bg-white/10 hover:scale-105
                  ${isActive(item.path) 
                    ? "bg-white/20 font-bold shadow-lg after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white" 
                    : "hover:text-opacity-80"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-white hover:bg-white/10 p-2 rounded-md transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-down">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 px-4 text-white rounded-md transition-all duration-300
                  hover:bg-white/10 hover:translate-x-2
                  ${isActive(item.path) 
                    ? "bg-white/20 font-bold" 
                    : "hover:text-opacity-80"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
