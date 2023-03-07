import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()

  return (
    <header className="bg-slate-900 w-full py-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm md:text-base">
        <Link href="/">
          <Image
            width={300}
            height={40}
            src="../img/logo-guitar.svg"
            alt="logo guitarla"
            priority
          />
        </Link>

        <nav className="flex items-center gap-1 md:gap-3 mt-5 md:mt-0">
          <Link href="/" legacyBehavior>
            <a
              className={`uppercase font-bold text-slate-200 px-2 py-1 rounded-md ease-in-out duration-300 hover:bg-slate-700 ${
                router.pathname === '/' && 'bg-slate-700'
              } `}
            >
              Inicio
            </a>
          </Link>

          <Link href="/nosotros" legacyBehavior>
            <a
              className={`uppercase font-bold text-slate-200 px-2 py-1 rounded-md ease-in-out duration-300 hover:bg-slate-700 ${
                router.pathname === '/nosotros' && 'bg-slate-700'
              } `}
            >
              Nosotros
            </a>
          </Link>

          <Link href="/blog" legacyBehavior>
            <a
              className={`uppercase font-bold text-slate-200 px-2 py-1 rounded-md ease-in-out duration-300 hover:bg-slate-700 ${
                router.pathname === '/blog' && 'bg-slate-700'
              } `}
            >
              Blog
            </a>
          </Link>

          <Link href="/tienda" legacyBehavior>
            <a
              className={`uppercase font-bold text-slate-200 px-2 py-1 rounded-md ease-in-out duration-300 hover:bg-slate-700 ${
                router.pathname === '/tienda' && 'bg-slate-700'
              } `}
            >
              Tienda
            </a>
          </Link>
          <Link href="/carrito" legacyBehavior>
            <a
              className={`uppercase font-bold text-slate-200 px-2 py-1 rounded-md ease-in-out duration-300 hover:bg-slate-700 ${
                router.pathname === '/carrito' && 'bg-slate-700'
              } `}
            >
              <Image
                width={35}
                height={35}
                src="../img/carrito.svg"
                alt="logo carrito de compras"
              />
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
