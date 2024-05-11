import { useState } from 'react';
import { X } from '@phosphor-icons/react';

import { NavLink } from './NavLink';
import { LocaleSwitcher } from './LocaleSwitcher';
import { navbar } from '../locales/en/en.json';
import { useLang } from '../hooks/useLang';

type ILinks = keyof typeof navbar


export function Navbar() {
  const { scoped } = useLang()
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const links: ILinks[] = ["navLink_1st", "navLink_2nd", "navLink_3rd", "navLink_4th", "navLink_5th"]

  function toggleMenu() {
    setIsOpenMenu(!isOpenMenu);
  }


  return (
    <nav className="w-full flex items-center justify-between">

      <LocaleSwitcher />

      <div
        className={`fixed top-0 bottom-0 left-0 right-0 bg-eerie-black flex items-center justify-center md:bg-[transparent] md:relative ${isOpenMenu ? 'flex' : 'hidden'} md:flex z-50`}
      >
        <div className='absolute top-4 right-4' onClick={toggleMenu}>
          <X size={24} color='white' />
        </div>

        <ul className='flex flex-col gap-x-[60px] items-center md:flex-row'>
          {links.map((link, index) => (
            <NavLink
              key={link}
              title={scoped.navbar[link]}
              index={index}
              onClick={toggleMenu}
            />
          ))}
        </ul>
      </div>

      <button
        className='flex items-end flex-col gap-y-1 md:hidden'
        onClick={toggleMenu}
      >
        <span className="block w-4 h-[2px] bg-eerie-black" />
        <span className="block w-[13px] h-[2px] bg-eerie-black" />
      </button>
    </nav>
  );
}