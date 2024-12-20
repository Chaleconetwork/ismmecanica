export const CartAndSearch = () => {
    return (
        <div className="flex justify-center gap-2 items-center py-4 bg-black text-white">
            <input className="bg-transparent w-[40%] border p-1 rounded-md" type="text" placeholder="Buscar productos" />
            <div>Carrito</div>
        </div>
    )
}