export type Jadwal_kuliah = {
    course_name: string,
    course_code: string,
    day: string,
    time: string,
    department: string,
    year_of_entry: number,
    classroom: string,
    lecturer_name: string,
    semester: number,
    credit_hours: number
}

export type Jadwal_kuliahQueryResponse = {
    data: Array<Jadwal_kuliah> | null,
}