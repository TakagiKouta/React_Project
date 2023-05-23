import axiosClient from "./axiosClient";

//http://localhost:5000/api/v1/
const householdAPI = {
    getIncomeData: () => axiosClient.get("household/incomeData"),
    getExpenseData: () => axiosClient.get("household/expenseData"),
    createIncome: (params) => axiosClient.post("household/income/create",params),
    createExpense: (params) => axiosClient.post("household/expense/create",params),

    deleteIncome: (id) => axiosClient.delete(`/household/income/delete/${id}`),
    deleteExpense: (id) => axiosClient.delete(`/household/expense/delete/${id}`),
};


export default householdAPI;