import { useState } from "react";
import { Spiral as Hamburger } from 'hamburger-react'
/*
text-edf2f4 , text-shadow-sm - Fix this it
*/
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState('')
    const handleClick = () => {
      console.log('showMenu => => =>', showMenu)
      setShowMenu(!showMenu)
    }
    console.log("SHOW MENU => ->", showMenu)
    const navItemClasses = "relative inline-block text-xl mr-8";
    const underlineClasses = "absolute w-full h-[0.125rem] bg-lightgrey opacity-0 bottom-[-1rem] left-0 transition-opacity duration-100 hover:opacity-100";
    return (
        <nav 
          className="
          sm:px-16 px-6 w-full flex items-center fixed top-0 z-20 bg-black bg-opacity-30 justify-between border-b border-white
          left-0right-0h-20flex-row
          "
        >
          <div className="flex justify-start p-1 pl-7 w-1/3 items-end">
              <a href="#app">
                  <h3 className="text-yellow-500 border-3 py-2 px-3 text-2xl md:text-6xl animate-show text-shadow-sm">
                      Mohammed
                  </h3>
              </a>
          </div>
          <div 
            className="
              relative hidden justify-end
              items-center py-6 text-right text-lightgrey z-10
              transition-all duration-200 md:flex w-1/3 space-x-15
            "
          >
              <div className={navItemClasses}>
                  <a href="#about" className="text-4xl">About</a>
                  <div className={underlineClasses}></div>
              </div>
              <div className={navItemClasses}>
                  <a href="#projects" className="text-4xl">Projects</a>
                  <div className={underlineClasses}></div>
              </div>
              <div className={navItemClasses}>
                  <a href="#skills" className="text-4xl">Skills</a>
                  <div className={underlineClasses}></div>
              </div>
          </div>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
          <GiHamburgerMenu 
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer text-gray-600'
            onClick={() => setShowMenu(!showMenu)}
          />

          <div 
            className={
              `${!showMenu ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`
            }>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              <li
                className={
                  `${
                    active === 'about' ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`
                }
              > 
                <a href='#about'>about</a>
              </li>

              <li
                className={
                  `${
                    active === 'Projects' ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`
                }
              > 
                <a href='#projects'>Projects</a>
              </li>

              <li
                className={
                  `${
                    active === 'Skills' ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`
                }
              > 
                <a href='#skills'>Skills</a>
              </li>

            </ul>
          </div>
        </div>
        </nav>
    )
}

export default Header;
