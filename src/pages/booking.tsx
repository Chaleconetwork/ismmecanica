import Calendar from "@/components/calendar";

export default function Booking() {
    return (
        <div className="w-[60%] m-auto mt-20">
            <header>
                <h1 className="text-4xl font-semibold mb-4">Reservas</h1>
            </header>
            <main className="">
                <Calendar />
            </main>
        </div>
    )
}