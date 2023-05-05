import "./App.css";
import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpenses from "./components/Forms/NewExpenses";

const Dummy_Data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 5, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
   const [expenses , setExpenses] = useState(Dummy_Data)
 
   const addExpense =(expense) =>{
    setExpenses((prev) => {
      return [expense , ...expenses]
    })}

  return (
    
    <div>
      <NewExpenses onAddExpense ={addExpense} />
      <Expense expenses ={expenses} />

    </div>

  )
}

export default App;
