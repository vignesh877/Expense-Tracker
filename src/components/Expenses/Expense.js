import React ,{ useState } from 'react'
import './Expense.css'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import ExpesnsesChart from './ExpesnsesChart'

const Expense = (props) => {
  const [filtered , setFiltered] = useState('2019')

  const dropDown = (selectedYear) =>{
    setFiltered(selectedYear)
    console.log('year',selectedYear);
  }

  // console.log(props.expenses);

  const filtredItems = props.expenses.filter(i =>{
    return i.date.getFullYear().toString() === filtered
  })

 
  return (
    <div className='expenses'>
      
      <ExpenseFilter selected = {filtered} onModify={dropDown}/>
      <ExpesnsesChart expenses={filtredItems} />
     {/*  conditional rendering */} 
      <ExpenseList item = {filtredItems} />   

      {/* <ExpenseItems
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItems
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItems
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItems
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}
    </div>
  )
}

export default Expense