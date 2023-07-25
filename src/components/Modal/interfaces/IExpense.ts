interface IExpense {
  account: string;
  sum: number | null;
  date: string;
  category: string;
  comment: string;
}

export default IExpense;
