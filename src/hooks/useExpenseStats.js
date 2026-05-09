import { useQuery } from "@tanstack/react-query"
import api from "../api/axiosInstance"

export const useExpenseStats = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['expenseStats'],
        queryFn: () => api.get('/transactions').then(r => r.data)
    })

    const expensesStats = data ? Object.entries( data.filter((item) => item.amount < 0).reduce((acc, item) => {
        acc[item.category]
        ? acc[item.category] = acc[item.category] + Math.abs(item.amount)
        : acc[item.category] = Math.abs(item.amount)
        return acc
    }, {})).map(([name,value])=>({name,value})) : []

    const sum = expensesStats.reduce((acc, item) => acc + item.value, 0);

     const moreThanTenPercent= expensesStats.filter(item => (item.value/sum)*100 >10 );
     const othersValue = expensesStats.filter(item => (item.value/sum)*100 <=10 );
     const others ={name: 'Others', value: othersValue.reduce((acc, item) => acc + item.value, 0)}
     const correctedExpensesStats = [...moreThanTenPercent, others]
    return { correctedExpensesStats, isLoading, isError }
}

