import logo from '../../assets/logo.svg';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import Header_form from '../Header_form/Header_form';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <Menu />
      <Search />
      <Header_form />
    </header>
  );
};

export default Header;
