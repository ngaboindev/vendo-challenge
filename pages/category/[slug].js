import Layout from '@/components/core/Layout'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Category = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <Layout>
      <h1 className="mb-3 text-3xl font-bold uppercase">{slug}</h1>
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit.
      </p>
      <div className="flex items-center gap-3 py-7">
        <div>
          <Image
            className="transition-all cursor-pointer hover:scale-105"
            src="/images/hero-1.svg"
            width={400}
            height={400}
          />
        </div>
        <div>
          <Image
            className="transition-all cursor-pointer hover:scale-105"
            src="/images/hero-2.svg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Category
