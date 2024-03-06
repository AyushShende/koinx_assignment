'use client';

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Menu from './Menu';

export default function MobileNavigation() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClose = () => setShowMenu(!showMenu);
  return (
    <div className="relative">
      <FaBars onClick={handleClose} size={26} />
      {showMenu && (
        <div className="absolute w-[200px] top-8 right-2 z-10 bg-white border border-gray-200 py-2 px-4 rounded shadow-md">
          <Menu />
        </div>
      )}
    </div>
  );
}
