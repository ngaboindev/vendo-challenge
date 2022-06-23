import Link from 'next/link'

const Logo = ({ ...props }) => {
  return (
    <Link href="/" {...props}>
      <a>
        <h3 className="text-gray-300 text-[27px] tracking-widest font-semibold">
          LOGO
        </h3>
      </a>
    </Link>
  )
}

export default Logo
