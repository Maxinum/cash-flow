const initialState = {
  transactions: [
    {
      account: "Google Pay",
      category: "Trash",
      sum: 100,
      comment: "Trash",
      date: "2017-01-01T00:00:00",
    },
    {
      account: "PayPal",
      category: "Taxes",
      sum: 1000,
      comment: "Trash",
      date: "2017-02-01T00:00:00",
    },
    {
      account: "PayPal",
      category: "Groceries",
      sum: 2000,
      comment: "Trash",
      date: "2017-02-01T00:00:00",
    },
    {
      account: "Bank Account",
      category: "Rent",
      sum: 500,
      comment: "Trash",
      date: "2017-03-01T00:00:00",
    },
    {
      account: "Bank Account",
      category: "Rent",
      sum: 640,
      comment: "Trash",
      date: "2017-04-01T00:00:00",
    },
    {
      account: "Bank Account",
      category: "Rent",
      sum: 946,
      comment: "Trash",
      date: "2017-05-01T00:00:00",
    },
    {
      account: "Bank Account",
      category: "Rent",
      sum: 3000,
      comment: "Trash",
      date: "2017-06-01T00:00:00",
    },
  ],
  accounts: ["Google Pay", "PayPal", "Bank Account", "Cash"],
  expenses: ["Trash", "Taxes", "Rent", "Groceries", "Transportation"],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "ADD_ACCOUNT":
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "GET_category":
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
