import Layout from '../components/layout'
import Post from '../components/post'
import { supabase } from '../supabase/supabase'

export default function Blog({ dataPosts }) {
  return (
    <>
      <Layout
        title={'Blog'}
        description={
          'Blog de música, venta de guitarras, consejos, recomendaciones'
        }
      >
        <main className="container my-5 mx-auto">
          <h2 className="tracking-widest text-center my-10 text-3xl uppercase font-bold  p-2">
            Blog
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 md:px-0">
            {dataPosts?.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  try {
  const { data: dataPosts } = await supabase.from('posts').select('*')

  return {
    props: {
      dataPosts,
    },
  }
} catch(e) {
  console.error(e)
}
}
