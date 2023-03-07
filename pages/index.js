import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import Post from '../components/post'
import { supabase } from '../supabase/supabase'

export default function Home({ dataGuitarras, dataPosts }) {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de música, venta de guitarras y más'}
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

        <section className="bg-slate-900 h-screen w-full grid lg:grid-cols-3 curso">
          <div className="p-2 md:p-20 col-span-2">
            <h3 className="font-bold text-4xl md:text-6xl mb-3 text-white">
              Adquiere nuestros cursos de musica
            </h3>
            <p className="font-bold text-xl md:text-3xl mb-3 text-gray-300">
              Con 30% de descuento en su primera compra
            </p>
            <p>
              Cras rutrum, risus eget euismod suscipit, magna urna vulputate mi,
              in suscipit sem libero vitae risus. Praesent nec ornare eros. Nunc
              dictum facilisis mauris, et faucibus neque pharetra ut. Vivamus
              posuere magna et erat ultrices, sed luctus eros rhoncus. Praesent
              nec ornare eros. Nunc dictum facilisis mauris, et faucibus neque
              pharetra ut. Vivamus posuere magna et erat ultrices, sed luctus
              eros rhoncus.
            </p>
          </div>
        </section>

        <section className="container my-5 mx-auto">
          <h2 className="tracking-widest text-center my-10 text-3xl uppercase font-bold  p-2">
            Blog
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 md:px-0">
            {dataPosts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  try {
    const { data: dataGuitarras } = await supabase.from('guitarras').select('*')
    const { data: dataPosts } = await supabase.from('posts').select('*')

    return {
      props: {
        dataGuitarras,
        dataPosts,
      },
    }
  } catch (e) {
    console.error(e)
  }
}
