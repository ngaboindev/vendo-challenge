import Head from 'next/head'
import { Navbar } from '@/components/index'

const Home = () => {
  return (
    <>
      <Head>
        <title>getvendo challenge</title>
      </Head>
      <Navbar />
      <h1 className="text-xl font-bold text-gray-600">Vendo Challenge</h1>
    </>
  )
}

export default Home
