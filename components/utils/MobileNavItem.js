import LeftArrowIcon from '@/components/utils/icons/LeftArrowIcon'
import cn from 'classnames'
const MobileNavItem = ({
  children,
  className,
  asLink = false,
  Icon = LeftArrowIcon,
  ...props
}) => {
  return (
    <li
      className={cn(
        'flex items-center  justify-between text-gray-300 uppercase transition-all pt-3 pb-5 border-b border-gray-700 cursor-pointer group',
        className
      )}
      {...props}
    >
      <a href="#" className="font-bold group-hover:text-gray-200">
        {children}
      </a>
      {!asLink ? <Icon /> : ''}
    </li>
  )
}

export default MobileNavItem
