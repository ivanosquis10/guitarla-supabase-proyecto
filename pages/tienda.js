import Guitarra from '../components/guitarra'
import Layout from '../components/layout'
import { supabase } from '../supabase/supabase'

export default function Tienda({ dataGuitarras }) {
  return (
    <>
      <Layout
        title={'Tienda Virtual'}
        description={'Tienda virtual, venta de guitarras, instrumentos, etc'}
      >
        <main className="container my-5 mx-auto">
          <h2 className="tracking-widest text-center my-10 text-3xl uppercase font-bold  p-2">
            Nuestra coleccion
          </h2>

          <div className="grid gap-5 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
            {dataGuitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  try {
    const { data: dataGuitarras } = await supabase.from('guitarras').select('*')

    return {
      props: {
        dataGuitarras,
      },
    }
  } catch (e) {
    console.error(e)
  }
}
