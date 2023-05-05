import React, { useState } from 'react'
import './NewExpenses.css'
import NewForm from './NewForm'

const NewExpenses = (props) => {

  const [flag , setFlag] =   useState(true)
  
  const SaveData = (e) =>{
    console.log('New Expense data',e);
    props.onAddExpense(e)
    setFlag(true)
  }
  return (
    <div className='new-expense'>
       {  flag  ? <button 
                  onClick={()=>setFlag(false)}>
                  Add New Expense
                 </button> :
                 
                 <NewForm 
                 onSave={SaveData} 
                 onHandle={()=>setFlag(true)}
                 />
        }
    </div>
  )
}

export default NewExpenses