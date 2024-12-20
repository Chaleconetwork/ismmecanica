import Link from "next/link"
import { FiUser } from "react-icons/fi";
import { IoCart } from "react-icons/io5";

export const Navbar = () => {
    return (
        <nav className="fixed w-full flex justify-around bg-black font-semibold shadow-sm text-sm text-gray-200">
            <ul className="flex justify-end gap-2">
                <Link href='/'><li className="p-4">ISM Mecánica</li></Link>
                <Link href='/booking'><li className="p-4">Reservar</li></Link>
                <Link href='/'><li className="p-4">Servicios</li></Link>
                <Link href='/'><li className="p-4">Productos</li></Link>
            </ul>
            <ul className="flex justify-end">
                <Link href='/'><li className="p-4 text-xl"><FiUser /></li></Link>
                <Link href='/'><li className="p-4 text-xl"><IoCart /></li></Link>
            </ul>
        </nav>
    )
}