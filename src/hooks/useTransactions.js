// src/hooks/useTransactions.js
import { useQuery } from '@tanstack/react-query'
import api from '../api/axiosInstance'

export const useTransactions = () => {
  return useQuery({
    queryKey: ['transactions'],
    queryFn: () => api.get('/transactions').then(r => r.data)
  })
}