import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="GuitarLA - venta de guitarras y blog de musica"
        />
        <link rel="shortcut icon" href="./img/logo-guitar.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={'true'}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-slate-800 text-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
