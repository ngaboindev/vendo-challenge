import Link from 'next/link'
import cn from 'classnames'
import { motion } from 'framer-motion'

const borderMotion = {
  rest: { opacity: 0, x: 0, ease: 'easeOut', duration: 0.2, type: 'tween' },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
}

const NextLink = ({ to, className = '', children, ...otherProps }) => {
  return (
    <Link href={to} {...otherProps}>
      <motion.a
        initial="rest"
        whileHover="hover"
        animate="rest"
        className={cn(
          'block cursor-pointer relative text-sm font-semibold',
          className
        )}
      >
        {children}
        <motion.span
          variants={borderMotion}
          className="absolute left-0 w-full h-[2px] bg-gray-300 top-7"
        ></motion.span>
      </motion.a>
    </Link>
  )
}
export default NextLink
