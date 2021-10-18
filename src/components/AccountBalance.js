import React, { useContext } from "react";
import { AppContext } from '../context/AppContext';

const AccountBalance = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alerttype = totalExpenses > budget ? 'alert-danger' : 'alert-success'

  return (
    <div>
      <div className={`alert ${alerttype}`}>
        <span>Account Balance: ${ budget - totalExpenses }</span>
      </div>
    </div>
  );
};

export default AccountBalance;
