const MegaMenu = () => {
  const lightiningLinks = [
    'Table lamps',
    'Floor lamps',
    'Ceiling lights',
    'Lampshades',
    'Inteligent lightning',
  ]

  const decorLinks = [
    'Art & Figuratines',
    'Candles',
    'Decorative Pillows',
    'Frames & Pictures',
    'Mirrors',
    'Rugs',
  ]

  const plantsLinks = [
    'Artificial plants',
    'Potted plants',
    'Dried flowers',
    'Flower pots',
  ]

  return (
    <div className="absolute left-0 z-50 w-full px-8 mb-0 bg-white shadow b top-[208px] py-9">
      <div className="container mx-auto">
        <h4 className="text-gray-800 text-[28px] font-bold">
          Lightning & Decor
        </h4>
        <ul className="flex gap-4 text-gray-600">
          <li className="w-[22%] mt-10 block">
            <a className="mb-4 font-extrabold uppercase">LIGHTNING</a>
            <ul className="py-5 space-y-3">
              {lightiningLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </li>
          <li className="w-[22%] mt-10 block">
            <a className="font-extrabold uppercase">DECOR</a>
            <ul className="py-5 space-y-3 ">
              {decorLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </li>
          <li className="w-[22%] mt-10 block">
            <a className="font-extrabold uppercase">PLANTS</a>
            <ul className="py-5 space-y-3 ">
              {plantsLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </li>
          <li className="w-[25%] mr-6 space-y-3">
            <img
              className="object-cover"
              src="/images/hero-1.svg"
              className="w-full"
            />
            <h3 className="text-sm font-bold text-gray-800 uppercase">
              NEW COLLECTIONS
            </h3>
          </li>
          <li className="w-[25%] space-y-3">
            <img
              className="object-cover"
              src="/images/hero-2.svg"
              className="w-full"
            />
            <h3 className="text-sm font-bold text-gray-800 uppercase">SALE</h3>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MegaMenu
