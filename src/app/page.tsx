'use client'
import { Jadwal_kuliah } from "@/types";
import { useQueryJadwal_kuliah } from "../features/Jadwal_kuliah/useQueryJadwal_kuliah";

const renderElement = (Jadwal_Kuliah: Jadwal_kuliah[]) => Jadwal_Kuliah.map((item, index: number) => (
    <tr key={index} className="border-black border-t-4 border-b-0 bg-blue-500 hover:bg-blue-400">
        <td className="py-4 px-8 text-left font-bold text-white">{item.course_name}</td>
        <td className="py-4 px-8 text-left font-bold text-white">{item.course_code}</td>
        <td className="py-4 px-8 text-left font-bold text-white">{item.day}</td>
        <td className="py-4 px-8 text-left font-bold text-white">{item.time}</td>
    </tr>
))

export default function App() {

    const { data } = useQueryJadwal_kuliah()

    console.log(data)

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-extrabold mb-6 text-black">Course Schedule</h2>
            <div className="overflow-x-auto bg-white border-black border-4 shadow-lg p-4 rounded-lg">
                <table className="min-w-full bg-blue-500 border-4 border-black">
                    <thead>
                        <tr className="bg-blue-400 text-black text-lg uppercase leading-normal border-black border-b-4">
                            <th className="py-4 px-8 text-left">Course Name</th>
                            <th className="py-4 px-8 text-left">Course Code</th>
                            <th className="py-4 px-8 text-left">Day</th>
                            <th className="py-4 px-8 text-left">Time</th>
                        </tr>
                    </thead>
                    <tbody className="text-black text-lg">
                        {data && renderElement(data)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
