import { NextRequest, NextResponse } from "next/server"
import * as services from "../services/Jadwal_kuliahService"




export const GET = async (req: NextRequest) => {
    try {
        const url = new URL(req.url)
        const department = url.searchParams.get('department') || '';
        const day = url.searchParams.get('day')|| '';
    
        const filters = {department, day}
    
        const data = await services.getAll(filters)
        
        return NextResponse.json({
            status: true,
            statusCode: 200,
            message: "Success get data",
            data
        })
    } catch (error) {
        return NextResponse.json({
            message: error.message
        })
    }
}