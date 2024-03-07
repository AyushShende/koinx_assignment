import Logo from '../logo';
import Menu from './Menu';
import MobileNavigation from './MobileNavigation';

export default function Navbar() {
  return (
    <nav className="padding-x py-4 flex justify-between items-center bg-white">
      <Logo />
      <div className="hidden md:block">
        <Menu />
      </div>
      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </nav>
  );
}
