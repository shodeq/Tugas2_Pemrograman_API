import * as repository from "../repositories/Jadwal_kuliahReoisitories"


export const getAll = async (filters: {department: string, day: string}) => {
    const data = await repository.findAll(filters)
    return data
}