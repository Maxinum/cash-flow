export const addTransaction = (transaction) => ({
  type: "ADD_TRANSACTION",
  payload: transaction,
});

export const getTransactions = (transactions) => {
  return {
    type: "GET_TRANSACTIONS",
    payload: transactions,
  };
};

export const getAccounts = (accounts) => {
  return {
    type: "GET_ACCOUNTS",
    payload: accounts,
  };
};

export const getExpenses = (expenses) => {
  return {
    type: "GET_EXPENSES",
    payload: expenses,
  };
};
