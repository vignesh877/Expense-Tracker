import React from 'react'
import './ExpenseList.css'
import ExpenseItems from './ExpenseItems'
const ExpenseList = (props) => {

    let expenseDetails = <h2 className='expenses-list__fallback'>No data found</h2>
    if(props.item.length > 0) {
      expenseDetails = props.item.map(i =>{
              return <ExpenseItems
                      key ={i.id}
                      title={i.title} 
                      amount={i.amount}
                      date={i.date} />
            })
    }
  return (
    <ul className='expenses-list'>
        {expenseDetails}
    </ul>
)
}

export default ExpenseList