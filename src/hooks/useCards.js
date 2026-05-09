import { useQuery } from "@tanstack/react-query"
import api from "../api/axiosInstance"


export const useCards = () => {
  return useQuery({
    queryKey: ['cards'],
    queryFn: () => api.get('/cards').then(r => r.data)
  })
}