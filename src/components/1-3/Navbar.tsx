export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li><a href="#home" className="hover:text-gray-300">Главная</a></li>
        <li><a href="#for-whom" className="hover:text-gray-300">Для кого</a></li>
        <li><a href="#advantages" className="hover:text-gray-300">Преимущества</a></li>
        <li><a href="#prices" className="hover:text-gray-300">Цены</a></li>
        <li><a href="#about" className="hover:text-gray-300">О нас</a></li>
        <li><a href="#contacts" className="hover:text-gray-300">Контакты</a></li>
      </ul>
    </nav>
  );
};