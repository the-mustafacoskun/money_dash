import { useQuery } from "@tanstack/react-query"
import api from "../api/axiosInstance"

export const useBalanceHistory = () => {
  return useQuery({
    queryKey: ['balanceHistory'],
    queryFn: () => api.get('/balanceHistory').then(r => r.data)
    })
}
export default useBalanceHistory;