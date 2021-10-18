import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const expanseStatus = totalExpenses === 0 ? 'Your expenses will be shown bellow!' : null;

  return (
    <ul className="list-group">
    <span>{expanseStatus}</span>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} key={expense.name} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
