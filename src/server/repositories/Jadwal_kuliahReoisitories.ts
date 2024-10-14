import Jadwal_kuliah from "../../../public/data/Jadwal_kuliah.json"


export const findAll = async (filters:{department: string, day: string}) => {

    let filterData = Jadwal_kuliah;

    if(filters.department){
        filterData = filterData.filter((course) => 
        course.department.toLowerCase().includes(filters.department.toLowerCase())
        )
    }

    if(filters.day){
        filterData = filterData.filter((course) => 
        course.day.toLowerCase().includes(filters.day.toLowerCase())
        )
    }

    return filterData
}