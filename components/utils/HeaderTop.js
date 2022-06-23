import Image from 'next/image'
import Logo from '@/components/core/Logo'
import NextLink from '@/components/utils/NextLink'
import MenuButton from '@/components/utils/MenuButton'
import { useState } from 'react'

const IconLink = ({ to, iconSrc, children }) => {
  return (
    <NextLink to={to}>
      <div className="flex items-center gap-2">
        <Image src={iconSrc} width={15} height={15} />
        {children}
      </div>
    </NextLink>
  )
}

const HeaderTop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between py-4 lg:py-8">
      <ul className="flex-col items-center hidden lg:flex md:flex-row md:space-x-7">
        <li>
          <select className="text-sm font-bold bg-transparent focus:outline-none">
            <option value="us">US</option>
            <option value="pl">PL</option>
            <option value="uk">UK</option>
          </select>
        </li>
        <li>
          <NextLink to="/about">About</NextLink>
        </li>
        <li>
          <NextLink to="/contact">Contact</NextLink>
        </li>
      </ul>
      <div className="block lg:hidden">
        <MenuButton
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <Logo />
      <ul className="flex flex-col items-center md:flex-row md:space-x-7">
        <li className="hidden lg:inline-block">
          <IconLink iconSrc="/icons/profile.svg" to="/profile">
            <span>My profile</span>
          </IconLink>
        </li>
        <li>
          <IconLink iconSrc="/icons/bag.svg" to="/cart">
            <span>
              0 <span className="hidden lg:inline">Items</span>
            </span>
            <span className="hidden font-normal lg:inline text-gray-300/50">
              $0.00
            </span>
          </IconLink>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderTop
