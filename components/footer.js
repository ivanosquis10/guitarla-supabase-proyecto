import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 w-full py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm md:text-base">
        <nav className="flex flex-col md:flex-row text-center gap-3 mt-5 md:mt-0">
          <Link href="/" legacyBehavior>
            <a className="uppercase font-bold text-slate-200 p-1 rounded-md ease-in-out duration-300 hover:bg-slate-700">
              Inicio
            </a>
          </Link>

          <Link href="/nosotros" legacyBehavior>
            <a className="uppercase font-bold text-slate-200 p-1 rounded-md ease-in-out duration-300 hover:bg-slate-700">
              Nosotros
            </a>
          </Link>

          <Link href="/blog" legacyBehavior>
            <a className="uppercase font-bold text-slate-200 p-1 rounded-md ease-in-out duration-300 hover:bg-slate-700">
              Blog
            </a>
          </Link>

          <Link href="/tienda" legacyBehavior>
            <a className="uppercase font-bold text-slate-200 p-1 rounded-md ease-in-out duration-300 hover:bg-slate-700">
              Tienda
            </a>
          </Link>
        </nav>

        <p className="uppercase text-slate-100 p-1 text-center text-xs mt-5">
          Todos los derechos reservados - {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
