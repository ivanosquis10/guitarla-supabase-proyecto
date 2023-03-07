import Image from 'next/image'
import Link from 'next/link'
import toast, { Toaster } from 'react-hot-toast'

export default function Guitarra({ guitarra }) {
  const { nombre, precio, descripcion, url, image } = guitarra

  return (
    <div className="px-5 grid gap-5 bg-white text-slate-900 rounded-md">
      <div className="flex justify-center">
        <Image
          className="rounded-md"
          src={image}
          width={150}
          height={150}
          alt={`Guitarra ${nombre}`}
          priority
        />
      </div>

      <div className="space-y-3">
        <Toaster />
        <h3 className="uppercase text-3xl font-bold">{nombre}</h3>
        <p className="text-lg text-slate-700">{descripcion}</p>
        <div className="flex items-center justify-between pb-4">
          <p className="font-bold text-3xl">${precio}</p>
          <Link href={`/guitarras/${url}`} legacyBehavior>
            <a
              onClick={() =>
                toast.loading('Cargando...', {
                  duration: 1000,
                  position: 'top-right',
                })
              }
              className="bg-slate-900 text-white text-center font-bold text-lg uppercase rounded-md px-3 hover:bg-slate-700 hover:text-slate-100 ease-in-out duration-300"
            >
              Ver guitarra
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
