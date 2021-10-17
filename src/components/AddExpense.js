import React from 'react'

const AddExpense = () => {
    return (
        <form>
            <div className='row'>
                <div className='col-sm'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='form-control'
                        required='required'
                        type='text'
                        id='name'>
                    </input>
                </div>
                <div className='col-sm'>
                    <label htmlFor='cost'>Cost</label>
                    <input
                        className='form-control'
                        required='required'
                        type='text'
                        id='cost'>
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
