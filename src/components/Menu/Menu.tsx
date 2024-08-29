import { a } from 'vitest/dist/suite-IbNSsUWN.js';
import './menu.css';

const Menu = () => {
  const menuList = ['Shop', 'Man', 'Woman', 'Combos', 'Joggers'];

  return (
    <ul className="header__menu">
      {menuList.map((menuItem, index) => (
        <li key={index}>
          <a>{menuItem}</a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
