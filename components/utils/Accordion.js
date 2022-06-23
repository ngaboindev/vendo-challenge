import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MobileNavItem from '@/components/utils/MobileNavItem'
import TopArrowIcon from './icons/TopArrowIcon'
import DownArrowIcon from './icons/DownArrowIcon'

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const AccordionIcon = isOpen ? TopArrowIcon : DownArrowIcon

  return (
    <motion.div>
      <AnimatePresence>
        <motion.div
          key="title"
          className="relative z-20 px-1 py-2 border-b border-gray-600 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div className="text-gray-300">
            <MobileNavItem className="!border-0" Icon={AccordionIcon}>
              {title}
            </MobileNavItem>
          </motion.div>
        </motion.div>

        {isOpen && (
          <motion.div
            key="answer"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            }}
            exit={{ opacity: 0 }}
            className="p-5 bg-white"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Accordion
