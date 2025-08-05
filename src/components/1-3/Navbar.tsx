import { useEffect, useState } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Проверка скролла для прозрачности
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Определение активной секции
      const sections = [
        "home",
        "for-whom",
        "advantages",
        "prices",
        "about",
        "contacts",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 w-full text-white p-4 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-800/90 backdrop-blur-sm" : "bg-gray-800/50"
      }`}
    >
      <ul className="flex space-x-4 justify-center">
        <li>
          <a
            href="#home"
            className={`hover:text-gray-300 transition-colors ${
              activeSection === "home" ? "text-blue-400 font-medium" : ""
            }`}
          >
            Главная
          </a>
        </li>
        <li>
          <a
            href="#for-whom"
            className={`hover:text-gray-300 transition-colors ${
              activeSection === "for-whom" ? "text-blue-400 font-medium" : ""
            }`}
          >
            Для кого
          </a>
        </li>
        <li>
          <a
            href="#advantages"
            className={`hover:text-gray-300 transition-colors ${
              activeSection === "advantages" ? "text-blue-400 font-medium" : ""
            }`}
          >
            Преимущества
          </a>
        </li>
        <li>
          <a
            href="#prices"
            className={`hover:text-gray-300 transition-colors ${
              activeSection === "prices" ? "text-blue-400 font-medium" : ""
            }`}
          >
            Цены
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`hover:text-gray-300 transition-colors ${
              activeSection === "about" ? "text-blue-400 font-medium" : ""
            }`}
          >
            О нас
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            className={`hover:text-gray-300 transition-colors ${
              activeSection === "contacts" ? "text-blue-400 font-medium" : ""
            }`}
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};
