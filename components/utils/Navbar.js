import HeaderTop from '@/components/utils/HeaderTop'
import HeaderBottom from '@/components/utils/HeaderBottom'
import MobileNav from '@/components/utils/MobileNav'

const Navbar = () => {
  return (
    <>
      <header className="relative text-gray-300 bg-gray-800">
        <div className="container px-4 mx-auto space-y-4 lg:space-y-0 lg:px-2">
          <HeaderTop />
          <HeaderBottom />
        </div>
      </header>
      <MobileNav />
    </>
  )
}

export default Navbar
