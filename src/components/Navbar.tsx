
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/our-work" },
    { name: "Our Story", path: "/our-story" },
    { name: "Donate", path: "/donate" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover-scale" onClick={handleNavClick}>
            <img 
              src="/lovable-uploads/c4768e24-0110-4567-a914-ba04460bf3cf.png" 
              alt="HOUU Logo" 
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-houg-primary font-bold text-sm md:text-base leading-tight">Hands On Unemployment Uganda</span>
            </div>
          </Link>
          
          {/* Contact Info */}
          <div className="hidden lg:flex items-center gap-4 text-sm text-gray-600">
            <span>+256704159210</span>
            <span>•</span>
            <span>+971554628399</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover-scale ${
                  isActive(link.path)
                    ? "text-houg-primary border-b-2 border-houg-primary"
                    : "text-houg-text hover:text-houg-secondary"
                }`}
                onClick={handleNavClick}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-houg-text focus:outline-none hover-scale"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white animate-fade-in">
          <div className="flex flex-col space-y-3 px-4 pt-2 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-houg-primary font-semibold"
                    : "text-houg-text"
                }`}
                onClick={handleNavClick}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-200">
              <p className="text-sm text-gray-600">Contact: +256704159210</p>
              <p className="text-sm text-gray-600">UAE: +971554628399</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
