import { useQuery } from "@tanstack/react-query"
import api from "../api/axiosInstance"

export const useWeeklyActivity = () => {
  return useQuery({
    queryKey: ['weeklyActivity'],
    queryFn: () => api.get('/weeklyActivity').then(r => r.data)
  })
}