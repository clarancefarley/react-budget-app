import React from 'react'

const ExpenseList = () => {
    const expenses = [
        { id: 122333, name: 'Shopping', cost: 50 },
        { id: 122333, name: 'Holiday', cost: 300 },
        { id: 122333, name: 'Transportation', cost: 70 },
        { id: 122333, name: 'Fuel', cost: 40 },
        { id: 122333, name: 'Child Care', cost: 500 },
    ]
    return (
        <ul>
            {expenses.map((expense) => (
                console.log(expenses)
            ))}
        </ul>
    )
}

export default ExpenseList
