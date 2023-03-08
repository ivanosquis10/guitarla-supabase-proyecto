import Image from 'next/image'
import Link from 'next/link'
import { formatearFecha } from '../utils/helpers'

export default function Post({ post }) {
  const { titulo, image, descripcion, created_at, url } = post
  return (
    <article className="">
      <div className="bg-white p-2 rounded-lg shadow hover:shadow-xl transition-all w-full h-full">
        <div>
          <Image src={image} width={500} height={100} alt={titulo} />
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <h3 className="text-slate-800 text-2xl font-bold uppercase">
            {titulo}
          </h3>
          <p className="text-gray-800 resumen">{descripcion}</p>
          <div className="mt-4 flex md:flex-col lg:flex-row items-center justify-between gap-4 py-2">
            <div className="">
              <Link href={`/posts/${url}`} legacyBehavior>
                <a className="bg-slate-800 text-slate-100 py-3 px-5 rounded-md uppercase hover:bg-slate-700 hover:text-slate-100 ease-in-out duration-300">
                  Leer
                </a>
              </Link>
            </div>

            <div>
              <p className="uppercase text-gray-800 text-sm">
                {formatearFecha(created_at)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
