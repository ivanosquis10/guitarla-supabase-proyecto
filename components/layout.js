import Head from 'next/head'
import Footer from './footer'
import Header from './header'

export default function Layout({ children, title = '', description = '' }) {
  return (
    <>
      <Head>
        <title> {`GuitarLA - ${title}`} </title>
        <meta name="description" content={`GuitarLA ${description}`} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
