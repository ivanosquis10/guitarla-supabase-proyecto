import Image from 'next/image'
import Layout from '../components/layout'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description={'Sobre nosotros, tienda de música'}
      >
        <main className="container my-5 mx-auto px-2 md:px-0">
          <h2 className="tracking-widest text-center my-5 text-3xl uppercase font-bold  p-2">
            Sobre nosotros
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Image
              className="rounded-md"
              width={800}
              height={500}
              src="https://msetvyvvrzdkntctbebj.supabase.co/storage/v1/object/sign/guitarras/blog_1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJndWl0YXJyYXMvYmxvZ18xLmpwZyIsImlhdCI6MTY3NzYyNDA4OCwiZXhwIjoxNzA5MTYwMDg4fQ.94MXSlvYgJxGZ7yES4uMzzNKdli2OzYHxF4aJ0BrNoM&t=2023-02-28T22%3A41%3A28.400Z"
              alt="imagen sobre nosotros"
            />

            <div className="h-full flex flex-col gap-2 break-words px-2 md:px-0 text-base md:text-lg">
              <p>
                Sed non velit nulla. Maecenas pellentesque, enim a volutpat
                pellentesque, dolor ante suscipit dolor, quis aliquam libero
                quam vel nulla. Ut sed interdum ante, at pharetra nibh. Maecenas
                ultricies nulla quis facilisis tincidunt. Donec convallis, quam
                in mollis rutrum, elit neque condimentum nulla, sed aliquam
                dolor dui a nibh. Maecenas porta, libero id finibus porta, sem
                sapien feugiat orci, tincidunt finibus felis felis a lorem.
                Suspendisse potenti. Aliquam tincidunt eget felis tincidunt
                lacinia. Fusce congue sodales scelerisque. Etiam auctor in arcu
                id venenatis. feugiat orci, tincidunt finibus felis felis a
                lorem. Suspendisse potenti.
              </p>
              <p>
                Donec eget neque metus. Donec eu pellentesque tortor. Cras
                consectetur lacus ut volutpat euismod. Quisque vehicula, quam at
                dapibus auctor, lectus augue placerat metus, at congue ligula
                erat eget risus. Mauris pellentesque, lacus sit amet
                pellentesque aliquam, ante ex lacinia mauris, eget ullamcorper
                nibh est id magna.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}
