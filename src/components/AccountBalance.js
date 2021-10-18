import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';

const AccountBalance = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  console.log(totalExpenses)

  return (
    <div>
      <div className="alert alert-success">
        <span>Account Balance: ${ budget - totalExpenses }</span>
      </div>
    </div>
  );
};

export default AccountBalance;
