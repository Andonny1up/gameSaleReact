import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ChakraProvider} from "@chakra-ui/react"
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {RouterProvider} from 'react-router-dom'
import router from './pages'

const queryClient = new QueryClient
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router}/>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>,
)
