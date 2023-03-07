import Layout from '../components/layout'

export default function Pagina404() {
  return (
    <Layout title="404">
      <div className="container mx-auto flex justify-center items-center flex-col gap-2 my-10 py-10 h-[19rem]">
        <h3 className="text-7xl font-bold">Error 404</h3>
        <p className="text-4xl">Página no encontrada :(</p>
        <p className="text-lg">Dale click al logo y ve al inicio :D</p>
      </div>
    </Layout>
  )
}
