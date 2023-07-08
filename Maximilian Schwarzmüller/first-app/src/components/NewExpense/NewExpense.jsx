import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

export default function NewExpense(props) {
  function onAddNewExpense(newExpenseData){
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString()
    }
    props.addExpenseHandler(expenseData);
  }
  
  return (
    <div className='new-expense'>
      <ExpenseForm onAddNewExpense={onAddNewExpense} />
    </div>
  )
}
