import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "react-feather";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = ["home", "for-whom", "advantages", "prices", "about", "contacts"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: "for-whom", label: "Для кого" },
    { id: "advantages", label: "Преимущества" },
    { id: "prices", label: "Цены" },
    { id: "FAQ", label: "ЧаВо" },
    { id: "about", label: "О нас" },
    { id: "contacts", label: "Контакты" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full text-white p-4 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-800/90 backdrop-blur-sm" : "bg-gray-800/50"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип или название (можно заменить на ваш логотип) */}
        <a 
          href="#home" 
          className="text-xl font-bold hover:text-gray-300 transition-colors"
          onClick={closeMobileMenu}
        >
          ZNAIKA
        </a>

        {/* Десктопное меню */}
        {!isMobile && (
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:text-gray-300 transition-colors px-2 py-1 ${
                    activeSection === item.id ? "text-blue-400 font-medium" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* Мобильное меню - кнопка бургер */}
        {isMobile && (
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white focus:outline-none"
            aria-label="Меню"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        )}
      </div>

      {/* Мобильное меню - выпадающий список */}
      <AnimatePresence>
        {isMobile && isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800/95 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={`#${item.id}`}
                    className={`block py-3 px-4 hover:bg-gray-700/50 rounded transition-colors ${
                      activeSection === item.id ? "text-blue-400 font-medium" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};