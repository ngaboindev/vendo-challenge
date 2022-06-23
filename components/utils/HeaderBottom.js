import NextLink from '@/components/utils/NextLink'
import MegaMenu from '@/components/core/MegaMenu'
import { useState } from 'react'
import { motion } from 'framer-motion'
import SearchWrapper from '@/components/utils/SearchWrapper'

const HeaderBottom = () => {
  const [isHover, toggleHover] = useState(false)
  const toggleHoverMenu = () => {
    toggleHover(!isHover)
  }
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }
  return (
    <div className="max-w-full pb-6 mx-auto space-y-4 lg:max-w-4xl">
      <SearchWrapper />
      <div className="max-w-3xl mx-auto">
        <ul className="flex-col items-center hidden text-base uppercase lg:flex md:flex-row md:space-x-7">
          <li>
            <NextLink to="/category/rooms" className="text-base uppercase">
              ROOMS
            </NextLink>
          </li>
          <li>
            <NextLink to="/category/furniture" className="text-base uppercase">
              FURNITURE
            </NextLink>
          </li>
          <li className="static">
            <motion.div
              className="menu-item"
              onMouseEnter={toggleHoverMenu}
              onMouseLeave={toggleHoverMenu}
            >
              <NextLink
                to="/category/lightning"
                className="text-base uppercase"
              >
                LIGHTNING & DECOR
              </NextLink>

              <motion.div
                className="sub-menu"
                initial="exit"
                animate={isHover ? 'enter' : 'exit'}
                variants={subMenuAnimate}
              >
                <MegaMenu />
              </motion.div>
            </motion.div>
          </li>
          <li>
            <NextLink to="/category/kitchen" className="text-base uppercase">
              KITCHEN
            </NextLink>
          </li>
          <li>
            <NextLink to="/category/bath" className="text-base uppercase">
              BATH & BODY
            </NextLink>
          </li>
          <li>
            <NextLink to="/category/garden" className="text-base uppercase">
              GARDEN
            </NextLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderBottom
