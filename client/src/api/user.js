import axiosClient from "./axiosClient";

//http://localhost:5000/api/v1/
const userAPI = {
    getUsersData: () => axiosClient.get("user"),
    getExpenseData: () => axiosClient.get("household/expenseData"),
    createIncome: (params) => axiosClient.post("household/income/create",params),
    createExpense: (params) => axiosClient.post("household/expense/create",params),
};


export default userAPI;