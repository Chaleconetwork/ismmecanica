import trendelantero from '../../public/trendelantero.png'
import mantenimiento from '../../public/mantenimiento.jpg'
import suspension from '../../public/suspension.png'
import frenos from '../../public/frenos.jpg'
import picture1 from '../../public/main.jpg'
import Link from 'next/link';

import { Card } from '@/components/card';
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
                        <button className="bg-yellow-400 px-8 py-2 rounded-md font-semibold mt-10 hover:bg-yellow-300 shadow-md">
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
            <main className="flex flex-col mt-32">
                <section className="p-8 bg-gray-100">
                    <div className='flex flex-col lg:flex-row gap-24 max-w-7xl m-auto p-8'>
                        <div>
                            <h3 className="font-semibold text-2xl mb-8">Mantenimiento Preventivo</h3>
                            <p className="text-gray-700 text-lg">
                                Si buscas tener un vehículo en las mejores condiciones y por largo tiempo primero debes saber qué es el mantenimiento preventivo.
                                El mantenimiento preventivo consiste en una revisión periódica, es decir, llevar tu auto al mecánico sin esperar que algo se descomponga.

                                Muchos conductores sólo se montan en sus autos y lo manejan sin pensar ni un momento en las necesidades
                                de mantenimiento de su automóvil hasta que llega el momento en donde los deja botados y es ahí cuando
                                hay que gastar mucho más dinero y tiempo del que se invierte al hacer el mantenimiento preventivo del automóvil a tiempo.
                            </p>
                        </div>
                        <Image className="rounded-lg shadow-lg xl:w-[350px]" src={picture1} width={350} alt='' />
                    </div>
                </section>
                <section className="py-8 shadow-md rounded-md">
                    <div className="w-full max-w-7xl mx-auto px-4">
                        <h3 className="text-2xl font-semibold mb-3 text-left">Servicios</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                            <Card
                                title="MANTENIMIENTO"
                                content="Los mantenimientos son fundamentales para preservar el vehículo en óptimas condiciones, prevenir averías y garantizar la seguridad al conducir. Se recomienda realizar revisiones periódicas en talleres especializados."
                                img={mantenimiento}
                            />
                            <Card
                                title="FRENOS"
                                content="Mantener el sistema de frenos en buen estado es clave para la seguridad del vehículo y sus ocupantes."
                                img={frenos}
                            />
                            <Card
                                title="SUSPENSIÓN"
                                content="El mantenimiento de amortiguadores y cazoletas asegura una conducción segura y cómoda, además de prolongar la vida útil de otros componentes del sistema."
                                img={suspension}
                            />
                            <Card
                                title="TREN DELANTERO"
                                content="Estos mantenimientos son esenciales para el buen funcionamiento de la suspensión y dirección, asegurando una conducción segura y confortable."
                                img={trendelantero}
                            />
                        </div>

                    </div>
                </section>
            </main>
            <footer className="flex justify-around font-semibold text-lg p-4 bg-yellow-400">
                <ul>
                    <li>+56 9 57345082</li>
                    <li>El Peumo 1405 Cerro Navia</li>
                    <li>hola@ismmecanica.cl</li>
                </ul>
                <ul>
                    <li>Encuentranos</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                </ul>
            </footer>
        </div>
    );
}
