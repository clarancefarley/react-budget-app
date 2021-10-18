import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid'

const AddExpense = () => {
    const { dispatch } = useContext(AppContext);   

    const [expenseData, setExpenseData] = useState({ name: '',cost: '', });

    const handleChange = (event) => {
        const value = event.target.value;
        setExpenseData({
            ...expenseData,
            [event.target.name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: expenseData.name,
            cost: parseInt(expenseData.cost),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='form-control'
                        onChange={handleChange}
                        value={expenseData.name}
                        required='required'
                        type='text'
                        name='name'>
                    </input>
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        className='form-control'
                        onChange={handleChange}
                        value={expenseData.cost}
                        required='required'
                        type='text'
                        name='cost'>
                    </input>
                </div>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <button className='btn btn-primary' type='submit'>Save</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AddExpense
