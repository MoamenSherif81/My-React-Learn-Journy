import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense() {
  function onAddNewExpense(newExpenseData){
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    }
    console.log(expenseData);
  }
  
  return (
    <div className='new-expense'>
      <ExpenseForm onAddNewExpense={onAddNewExpense} />
    </div>
  )
}
