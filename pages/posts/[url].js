import Image from 'next/image'
import Layout from '../../components/layout'
import { supabase } from '../../supabase/supabase'

export default function ProductoBlog({ posts }) {
  const { titulo, image, descripcion } = posts[0]
  return (
    <Layout
      title={titulo}
      description={'Blog, nuestro blog, lee articulos de nuestr blog'}
    >
      <article className="w-full lg:w-6/12 bg-white p-4 sm:rounded-lg shadow hover:shadow-xl transition-all grid justify-items-center gap-2 container mx-auto my-10">
        <div className="sm:flex sm:justify-center">
          <Image src={image} width={400} height={100} alt={titulo} />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-slate-800 text-2xl md:text-3xl font-bold uppercase">
            {titulo}
          </h3>
          <p className="text-gray-800 whitespace-pre-wrap px-10">
            {descripcion}
          </p>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Aqui tenemos que pasarle como retorno un arreglo con todas las urls de la pagina y retornarlas como PARAMS (obligatorio), usar este formato si usas supbase
  try {
    const { data, error } = await supabase.from('posts').select()
    const paths = data.map((post) => ({
      params: {
        url: post.url,
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
    const { data: posts, error } = await supabase
      .from('posts')
      .select()
      .eq('url', url)

    if (error) throw error

    return {
      props: { posts },
    }
  } catch (e) {
    console.error(e)
  }
}
