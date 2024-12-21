import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { IoCart } from "react-icons/io5";
import logo from "../../public/LOGOTIPO-COLOR-PNG.png";

export const Navbar = () => {
    return (
        <nav className="fixed w-full flex justify-around items-center bg-black font-semibold shadow-sm text-sm text-gray-200 px-4">
            <ul className="flex items-center gap-4">
                <Link href='/'>
                    <li className="p-2 flex items-center">
                        {/* Ajusta el tamaño del logo */}
                        <Image src={logo} width={50} height={50} alt="Logo ISM" />
                    </li>
                </Link>
                <Link href='/booking'><li className="p-4">Reservar</li></Link>
                <Link href='/'><li className="p-4">Servicios</li></Link>
                <Link href='/'><li className="p-4">Productos</li></Link>
            </ul>
            <ul className="flex items-center gap-4">
                <Link href='/'><li className="p-4 text-xl"><FiUser /></li></Link>
                <Link href='/'><li className="p-4 text-xl"><IoCart /></li></Link>
            </ul>
        </nav>
    )
}
