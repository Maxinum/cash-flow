import ITransaction from "./interfaces/ITransaction";

export const addTransaction = (transaction: ITransaction[]) => ({
  type: "ADD_TRANSACTION",
  payload: transaction,
});

export const getTransactions = (transactions: ITransaction[]) => {
  return {
    type: "GET_TRANSACTIONS",
    payload: transactions,
  };
};

export const getAccounts = (accounts: string[]) => {
  return {
    type: "GET_ACCOUNTS",
    payload: accounts,
  };
};

export const getExpenses = (expenses: string[]) => {
  return {
    type: "GET_EXPENSES",
    payload: expenses,
  };
};
