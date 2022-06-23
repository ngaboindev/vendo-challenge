import Head from 'next/head'
import { Navbar } from '@/components/index'

const Layout = (props) => {
  const { children, ...customMeta } = props
  const meta = {
    title: 'getVendo challenge',
    description: 'getVendo ecommorce',
    ...customMeta,
  }
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      <Navbar />
      <main className="max-w-6xl py-4 mx-auto">{props.children}</main>
    </>
  )
}

export default Layout
