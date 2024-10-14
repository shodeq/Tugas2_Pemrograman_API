
import axiosInstance from "@/libs/axios/Index"
import { Jadwal_kuliahQueryResponse } from "@/types"
import { useEffect, useState } from "react"




export const useQueryJadwal_kuliah = () => {
    const [state, setState] = useState<Jadwal_kuliahQueryResponse>({
        data: null
    })

    const refetch = async () => {
        try {
            const response = await axiosInstance.get('/jadwal-kuliah')
            console.log(response)
                setState({
                    data: response.data.data,
                    
                })
        } catch (error) {
            setState(prev => ({
                ...prev,
                isError: error instanceof Error ? error : new Error('Unknown error'),
            }))
            
        } finally{
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }))
        }
    }
    useEffect(() =>{
        refetch()
    },[])

    return{
        ...state,
        refetch
    }
}
