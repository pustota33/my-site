import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-purple-600">
                <p>Активация Кундалини</p>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                Главная
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                О практике
              </Link>
              <Link
                to="/sessions"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                <p>Онлайн Сеансы</p>
              </Link>
              <Link
                to="/reviews"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                <p>Оффлайн Сеансы</p>
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                Контакты
              </Link>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium">
                Записаться на сеанс
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-purple-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              О практике
            </Link>
            <Link
              to="/sessions"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Онлайн Сеансы
            </Link>
            <Link
              to="/reviews"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Оффлайн Сеансы
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Контакты
            </Link>
            <button 
              className="w-full text-left px-3 py-2 mt-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Записаться на сеанс
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
