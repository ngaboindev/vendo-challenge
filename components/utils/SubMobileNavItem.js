import Accordion from './Accordion'
import MobileNavItem from './MobileNavItem'
import RightArrowIcon from './icons/RightArrowIcon'
import { lightiningLinks, decorLinks, plantsLinks } from '@/data/links'

const SubMobileNavItem = ({ closeSubNav }) => {
  return (
    <div className="text-gray-300">
      <div className="flex items-center justify-between pb-5 border-b border-gray-700">
        <RightArrowIcon
          className="cursor-pointer"
          onClick={() => closeSubNav()}
        />
        <h3 className="text-[26px] mx-auto font-semibold">Lightning & Decor</h3>
      </div>
      <Accordion title="LIGHTNING">
        {lightiningLinks.map((link) => (
          <MobileNavItem
            asLink
            className="!text-gray-600 text-sm capitalize font-semibold border-gray-300"
          >
            {link}
          </MobileNavItem>
        ))}
      </Accordion>
      <Accordion title="DECOR">
        {decorLinks.map((link) => (
          <MobileNavItem
            asLink
            className="!text-gray-600 text-sm capitalize font-semibold border-gray-300"
          >
            {link}
          </MobileNavItem>
        ))}
      </Accordion>
      <Accordion title="PLANTS">
        {plantsLinks.map((link) => (
          <MobileNavItem
            asLink
            className="!text-gray-600 text-sm capitalize font-semibold border-gray-300"
          >
            {link}
          </MobileNavItem>
        ))}
      </Accordion>
      <MobileNavItem asLink className="pt-6 pb-5">
        NEW COLLECTION
      </MobileNavItem>
      <MobileNavItem asLink className="!border-0">
        SALE
      </MobileNavItem>
    </div>
  )
}

export default SubMobileNavItem
