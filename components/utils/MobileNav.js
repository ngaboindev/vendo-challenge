import NextLink from '@/components/utils/NextLink'
import SubMobileNavItem from '@/components/utils/SubMobileNavItem'
import MobileNavItem from '@/components/utils/MobileNavItem'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MobileNav = () => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false)

  const MobileNavContent = () => {
    return isSubNavOpen ? (
      <SubMobileNavItem closeSubNav={() => setIsSubNavOpen(false)} />
    ) : (
      <ul className="font-bold text-gray-300 space-y-7">
        <MobileNavItem onClick={() => setIsSubNavOpen(true)}>
          ROOMS
        </MobileNavItem>
        <MobileNavItem>FURNITURE</MobileNavItem>
        <MobileNavItem onClick={() => setIsSubNavOpen(true)}>
          LIGHTNING & DECOR
        </MobileNavItem>
        <MobileNavItem>KITCHEN</MobileNavItem>
        <MobileNavItem>BATH & BODY</MobileNavItem>
        <MobileNavItem>GARDEN</MobileNavItem>
        <li>
          <NextLink to="/profile">My Profile</NextLink>
        </li>
        <li>
          <NextLink to="/about">About</NextLink>
        </li>
        <li>
          <NextLink to="/contact">Contact</NextLink>
        </li>
      </ul>
    )
  }

  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 100,
        duration: '0.2',
        delay: '0.1',
      }}
      className="absolute z-30 block w-full min-h-screen bg-gray-800 lg:hidden"
    >
      <div className="container p-4 mx-auto">
        <MobileNavContent />
      </div>
    </motion.div>
  )
}

export default MobileNav
