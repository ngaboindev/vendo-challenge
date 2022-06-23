import HeaderTop from '@/components/utils/HeaderTop'
import HeaderBottom from '@/components/utils/HeaderBottom'
import MobileNav from '@/components/utils/MobileNav'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="relative text-gray-300 bg-gray-800">
        <div className="container px-4 mx-auto space-y-4 lg:space-y-0 lg:px-2">
          <HeaderTop handleMobileNav={() => setIsOpen(!isOpen)} />
          <HeaderBottom />
        </div>
      </header>
      {isOpen && <MobileNav />}
    </>
  )
}

export default Navbar
