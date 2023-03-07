import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'
import { supabase } from '../../supabase/supabase'
import toast, { Toaster } from 'react-hot-toast'

export default function ProductoGuitarra({ guitarra, agregarCarrito }) {
  const [cantidad, setCantidad] = useState(0)
  const { nombre, image, descripcion, precio, id } = guitarra[0]

  function handleSubmit(e) {
    e.preventDefault()

    if (cantidad < 1) {
      toast.error('Cantidad no válida😔', {
        id: 'clipboard',
        duration: 2000,
        position: 'top-right',
      })
      return
    }

    // Construir el objeto con los datos del producto seleccionado
    const guitarraSeleccionada = {
      id,
      image,
      nombre,
      precio,
      cantidad,
    }

    // Pasamos los datos al carrito
    toast.success('Agregado al carrito', {
      id: 'clipboard',
      duration: 2000,
      position: 'top-right',
    })
    agregarCarrito(guitarraSeleccionada)
  }

  return (
    <Layout
      title={nombre}
      description={
        'Guitarras, venta de guitarras electricas y acusticas, bajos'
      }
    >
      <section className="py-5 flex justify-center px-2 md:px-0">
        <Toaster />
        <div className="bg-white md:w-6/12 grid md:grid-cols-2 justify-center px-5 py-5 text-slate-900 rounded-md">
          <div className="flex justify-center">
            <Image
              className="rounded-md"
              src={image}
              width={200}
              height={100}
              alt={`Guitarra ${nombre}`}
              priority
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <h3 className="uppercase text-3xl font-bold">{nombre}</h3>
              <Link
                href="/tienda"
                className="bg-slate-800 py-1 px-2 text-slate-100 rounded-md"
              >
                Ir atrás
              </Link>
            </div>
            <p className="text-lg">{descripcion}</p>
            <div className="flex items-center justify-between pb-4">
              <p className="font-bold text-3xl">- ${precio}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label
                className="text-2xl font-bold text-slate-800"
                htmlFor="cantidad"
              >
                Cantidad:
              </label>
              <select
                id="cantidad"
                className="bg-slate-700 py-1 px-10 rounded-md appearance-none text-white text-center text-lg"
                onChange={(e) => setCantidad(+e.target.value)}
              >
                <option className="bg-slate-600" value="0">
                  -- Seleccione --
                </option>
                <option className="bg-slate-600" value="1">
                  1
                </option>
                <option className="bg-slate-600" value="2">
                  2
                </option>
                <option className="bg-slate-600" value="3">
                  3
                </option>
                <option className="bg-slate-600" value="4">
                  4
                </option>
                <option className="bg-slate-600" value="5">
                  5
                </option>
              </select>
              <input
                className="uppercase text-slate-100 font-bold bg-slate-700 w-full p-2 rounded-md mt-5 ease-in-out duration-300 hover:bg-slate-800"
                type="submit"
                value="agregar al carrito"
              />
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Aqui tenemos que pasarle como retorno un arreglo con todas las urls de la pagina y retornarlas como PARAMS (obligatorio), usar este formato si usas supbase
  // console.log('cargando...')
  try {
    const { data, error } = await supabase.from('guitarras').select()
    const paths = data.map((guitarra) => ({
      params: {
        url: guitarra.url,
      },
    }))

    if (error) throw error

    return {
      paths,
      fallback: false,
    }
  } catch (e) {
    console.error(e)
  }
}

// Luego en esta funcion comparamos si la url de la base de datos es igual a la que mando la funcion getStaticPaths, y con eso traera la informacion de la bd
export async function getStaticProps({ params: { url } }) {
  try {
    const { data: guitarra, error } = await supabase
      .from('guitarras')
      .select()
      .eq('url', url)

    if (error) throw error

    return {
      props: { guitarra },
    }
  } catch (e) {
    console.error(e)
  }
}
