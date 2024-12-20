import Link from 'next/link';
import picture1 from '../../public/bannerheader.jpg'
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <header className="m-auto flex flex-col justify-between items-center text-center h-screen">
                <div className="flex flex-col justify-center items-center flex-grow">
                    <h1 className="text-7xl font-semibold w-[60%] mb-8">
                        ISM Mecanica Automotriz
                    </h1>
                    <h2 className="text-3xl font-semibold text-gray-600 w-[60%]">
                        Taller especializado en ofrecer el mejor servicio de mecánica automotriz,
                        garantizando una total satisfacción del cliente
                    </h2>
                    <Link href='/booking'>
                        <button className="bg-yellow-500 px-8 py-2 rounded-md font-semibold mt-10 hover:bg-yellow-400 shadow-md">
                            Reservar hora
                        </button>
                    </Link>
                </div>
                <section className="flex gap-16 font-semibold text-lg mb-8 pt-6 text-gray-600 border-t">
                    <div>Nissan</div>
                    <div>Chevrolet</div>
                    <div>Hyundai</div>
                    <div>Suzuki</div>
                </section>
            </header>
            <main className="flex flex-col gap-8 bg-gray-50">
                <section className="flex flex-col 2xl:flex-row gap-16 w-[60%] m-auto rounded-md border p-8 bg-white">
                    <div className=''>
                        <h3 className="font-semibold text-xl mb-8">Mantenimiento Preventivo</h3>
                        <p className="text-gray-700 text-lg">
                            Si buscas tener un vehículo en las mejores condiciones y por largo tiempo primero debes saber qué es el mantenimiento preventivo.
                            El mantenimiento preventivo consiste en una revisión periódica, es decir, llevar tu auto al mecánico sin esperar que algo se descomponga.

                            Muchos conductores sólo se montan en sus autos y lo manejan sin pensar ni un momento en las necesidades
                            de mantenimiento de su automóvil hasta que llega el momento en donde los deja botados y es ahí cuando
                            hay que gastar mucho más dinero y tiempo del que se invierte al hacer el mantenimiento preventivo del automóvil a tiempo.
                        </p>
                    </div>
                    <Image className="rounded-lg shadow-lg w-full" src={picture1} width={300} alt='' />
                </section>
                <section className="flex flex-col 2xl:flex-row-reverse gap-16 w-[60%] m-auto rounded-md border p-8 bg-white">
                    <Image className="order-2 rounded-lg shadow-lg w-full" src={picture1} width={300} alt='' />
                    <div>
                        <h3 className="font-semibold text-xl mb-8">Servicios</h3>
                        <p className="text-gray-700 text-lg">
                            «En ISM Mecánica, nos especializamos en brindar el mejor servicio de mecánica automotriz, asegurando la total satisfacción de nuestros clientes.
                            Confía en nuestro equipo de profesionales para mantener tu vehículo en óptimas condiciones.
                            Visítanos y descubre cómo podemos ayudarte a mantener tu auto en su mejor estado.»
                        </p>
                    </div>
                </section>
            </main>
            <footer className="p-4 bg-yellow-500 mt-10">
                footer
            </footer>
        </div>
    );
}
