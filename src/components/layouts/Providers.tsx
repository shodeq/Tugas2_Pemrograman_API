"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

type ProvidersProps = {
    children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}
