import { useState, useEffect } from 'react'
import Image from 'next/image'
import Layout from '../components/layout'
import toast, { Toaster } from 'react-hot-toast'

export default function Carrito({
  carrito,
  eliminarProducto,
  actualizarCantidad,
}) {
  const [total, setTotal] = useState(0)

  // funcion que se va a encargar de calcular el total
  useEffect(() => {
    const calculoTotal = carrito.reduce(
      (acumulado, currentProduct) =>
        acumulado + currentProduct.cantidad * currentProduct.precio,
      0
    )
    setTotal(calculoTotal)
  }, [carrito])

  function notificacionCompra() {
    toast.success('Compra completada, muchas gracias!', {
      icon: '🥳',
      position: 'top-right',
      id: 'clipboard',
      style: {
        borderRadius: '10px',
        background: '#0c4a6e',
        color: '#fff',
      },
    })
  }

  function notificacionEliminar() {
    toast.error('Eliminado del carrito', {
      icon: '😔',
      position: 'top-right',
      id: 'clipboard',
      style: {
        borderRadius: '10px',
        background: '#0c4a6e',
        color: '#fff',
      },
    })
  }

  return (
    <Layout title="Carrito compras">
      <main className="container mx-auto my-2">
        <h1 className="text-center my-10 text-3xl uppercase font-bold p-2">
          Carrito de compras
        </h1>

        <div className="grid lg:grid-cols-2 gap-3 p-10">
          <div className="space-y-5">
            <h2 className="bg-slate-600/80 rounded-md py-1 px-1 text-4xl font-bold uppercase mb-3">
              Articulos
            </h2>

            {carrito.length === 0 ? (
              <p className="uppercase text-center font-bold">carrito vacio</p>
            ) : (
              carrito.map((producto) => (
                <section key={producto.id}>
                  <div className="bg-slate-600/80 w-full md:grid md:grid-cols-3 text-slate-900 rounded-md">
                    <div className="flex justify-center ">
                      <Image
                        className="rounded-l-md"
                        src={producto.image}
                        width={250}
                        height={150}
                        alt={producto.nombre}
                        priority
                      />
                    </div>

                    <div className="col-span-2 flex flex-col gap-5 p-5">
                      <h3 className="uppercase text-3xl font-bold text-slate-100">
                        {producto.nombre}
                      </h3>
                      <div className="">
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold text-slate-200">
                            Cantidad:{' '}
                          </p>

                          <select
                            className="bg-slate-700 py-2 px-8 rounded-md text-white text-center text-lg"
                            onChange={(e) =>
                              actualizarCantidad({
                                id: producto.id,
                                cantidad: e.target.value,
                              })
                            }
                            value={producto.cantidad}
                          >
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
                        </div>

                        <div className="mt-2 ">
                          <p className="text-2xl text-slate-100 mb-2 bg-slate-600/80 rounded-md py-1">
                            Precio:{' '}
                            <span className="font-bold text-slate-300">
                              ${producto.precio}
                            </span>{' '}
                          </p>
                          <p className="text-2xl text-slate-100 bg-slate-600/80 rounded-md py-1">
                            Subtotal:{' '}
                            <span className="font-bold text-slate-300">
                              ${producto.cantidad * producto.precio}
                            </span>{' '}
                          </p>
                          <button
                            className="uppercase text-slate-100 font-bold bg-slate-700 w-full p-2 rounded-md mt-5 ease-in-out duration-300 hover:bg-slate-800"
                            onClick={() => {
                              notificacionEliminar()
                              eliminarProducto(producto.id)
                            }}
                          >
                            Borrar producto
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))
            )}
          </div>

          <aside className="w-full h-fit sticky top-2">
            <Toaster />
            <div className="bg-slate-600/80 p-5 rounded-md">
              <h3 className="text-4xl font-bold mb-3">Resumen del pedido</h3>
              <p className="text-2xl text-slate-300">
                Total a pagar:{' '}
                <span className="font-bold text-slate-100">${total}</span>
              </p>
              <button
                onClick={() => notificacionCompra()}
                className="uppercase font-bold bg-slate-700 w-full p-2 rounded-md mt-5 ease-in-out duration-300 hover:bg-slate-800"
              >
                Comprar
              </button>
            </div>
          </aside>
        </div>
      </main>
    </Layout>
  )
}
