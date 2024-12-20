import React, { useState, useEffect } from 'react';

const Calendar: React.FC = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [currentYear, setCurrentYear] = useState<number>(today.getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth());
    const [previousMonths, setPreviousMonths] = useState<Record<number, number>>({});
    const [chileTime, setChileTime] = useState<string>('');

    // Función para obtener la hora en Chile (UTC-3)
    const getChileTime = () => {
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'America/Santiago',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const chileDate = new Date().toLocaleString('es-CL', options);
        setChileTime(chileDate);
    };

    useEffect(() => {
        const interval = setInterval(getChileTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const daysInMonth = (month: number, year: number) => new Date(year, month + 1, 0).getDate();

    const firstDayOfMonth = (month: number, year: number) => new Date(year, month, 1).getDay();

    const days = Array.from(
        { length: daysInMonth(currentMonth, currentYear) },
        (_, i) => i + 1
    );

    const isPastDate = (day: number) => {
        const date = new Date(currentYear, currentMonth, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const isSunday = (day: number) => {
        const date = new Date(currentYear, currentMonth, day);
        return date.getDay() === 0;
    };

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedMonth = parseInt(event.target.value, 10);
        setCurrentMonth(selectedMonth);
    };

    const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedYear = parseInt(event.target.value, 10);

        // Guardar el mes actual antes de cambiar de año
        setPreviousMonths((prev) => ({
            ...prev,
            [currentYear]: currentMonth, // Guardar el mes actual asociado al año actual
        }));

        // Al cambiar de año, restaurar el mes si existe en el registro previo
        if (previousMonths[selectedYear] !== undefined) {
            setCurrentMonth(previousMonths[selectedYear]);
        } else {
            setCurrentMonth(0); // Si no hay un registro previo, comenzar en enero
        }

        setCurrentYear(selectedYear);
    };

    return (
        <div className="p-4 border rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4">Reservas</h2>

            <div className="mb-4">
                <span className="font-medium">Hora actual en Chile: </span>
                <span>{chileTime}</span>
            </div>

            <div className="flex justify-end gap-4 items-center mb-4">
                <div className='border rounded px-2 py-1'>
                    {/* <label className="mr-2">Mes:</label> */}
                    <select
                        value={currentMonth}
                        onChange={handleMonthChange}
                        className='outline-none'
                    >
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i} className=''
                            >
                                {new Date(0, i).toLocaleString('es-ES', { month: 'long' })}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="px-2 py-1 border rounded">
                    {/* <label className="mr-2">Año:</label> */}
                    <select
                        value={currentYear}
                        onChange={handleYearChange}
                        className='outline-none'
                    >
                        {[today.getFullYear() - 1, today.getFullYear(), today.getFullYear() + 1].map(
                            (year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            )
                        )}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map((day) => (
                    <div key={day} className="text-center font-medium">
                        {day}
                    </div>
                ))}

                {/* Celdas vacías para alinear los días */}
                {Array.from({ length: firstDayOfMonth(currentMonth, currentYear) }).map((_, i) => (
                    <div key={`empty-${i}`} />
                ))}

                {days.map((day) => {
                    const past = isPastDate(day);
                    const sunday = isSunday(day);

                    return (
                        <div
                            key={day}
                            onClick={() =>
                                !past && !sunday && setSelectedDate(new Date(currentYear, currentMonth, day))
                            }
                            className={`p-4 border rounded text-center cursor-pointer ${sunday
                                ? 'bg-red-400 text-white cursor-not-allowed'
                                : past
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : selectedDate?.getDate() === day &&
                                        selectedDate?.getMonth() === currentMonth &&
                                        selectedDate?.getFullYear() === currentYear
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-100 hover:bg-blue-100'
                                }`}
                        >
                            {day}
                        </div>
                    );
                })}
            </div>

            {selectedDate && (
                <p className="mt-4">Fecha seleccionada: {selectedDate.toLocaleDateString()}</p>
            )}

            <div className='flex justify-end'>
                <button className='bg-yellow-500 px-8 py-2 rounded-md font-semibold mt-10 hover:bg-yellow-400 shadow-md'>Continuar</button>
            </div>
        </div>
    );
};

export default Calendar;