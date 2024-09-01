import './menu.css';

const menuList = ['Shop', 'Man', 'Woman', 'Combos', 'Joggers'];

const Menu = () => {
  return (
    <ul className="header__menu">
      {menuList.map((menuItem) => (
        <li key={menuItem}>{menuItem}</li>
      ))}
    </ul>
  );
};

export default Menu;
