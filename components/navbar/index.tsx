import Logo from '../logo';
import Menu from './Menu';
import MobileNavigation from './MobileNavigation';

export default function Navbar() {
  return (
    <nav className="padding-x py-4 flex justify-between items-center bg-white">
      <Logo />
      <div className="hidden sm:block">
        <Menu />
      </div>
      <div className="sm:hidden">
        <MobileNavigation />
      </div>
    </nav>
  );
}
