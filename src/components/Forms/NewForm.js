import React , { useState }from "react";
import "./NewForm.css";

const Form = (props) => {
  const [enteredTitle , setEnteredTitle]  = useState('')
  const [enteredAmount , setEnteredAmount]  = useState('')
  const [enteredDate , setEnteredDate]  = useState(new Date().toDateString())
 
  const titleChangeHandler = (e) =>{
    setEnteredTitle(e.target.value);
  }

  const amountChangeHandler = (e) =>{
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = (e) =>{
    setEnteredDate(e.target.value)
  }

  //  const [userData , setUserData] = useState({ enteredTitle:'', enteredAmount:'',enteredDate:''})

  //  const titleChangeHandler = (e) =>{
  //   setUserData({
  //     ...userData,
  //     enteredTitle: e.targe.value
  //   })
  // }

  // const amountChangeHandler = (e) =>{
  //   setUserData({
  //     ...userData,
  //     enteredAmount: e.targe.value
  //   })
  // }

  // const dateChangeHandler = (e) =>{
  //   setUserData({
  //     ...userData,
  //     enteredDate: e.targe.value
  //   })
  // }

  const submitHandler = (e) => {
    e.preventDefault()
     const expenseData = {
      id: Math.random().toString(),
      title : enteredTitle,
      date : new Date(enteredDate),
      amount : +enteredAmount
     }

  // console.log(expenseData);
     props.onSave(expenseData)    // communicate to parent component - ( NewExpense )

    
     setEnteredAmount('')
     setEnteredDate('')
     setEnteredTitle('')
     
  }

  return (

    <form onSubmit={submitHandler}>
      
      <div className="new-expense__controls">   
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
              />
        </div>
 
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number" 
            min="0" 
            step="1" 
            value={enteredAmount}
            onChange={amountChangeHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="date" 
            min="2019-01-01" 
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
             />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={props.onHandle}>Cancel</button>
      </div>

    </form>

  )
}

export default Form;