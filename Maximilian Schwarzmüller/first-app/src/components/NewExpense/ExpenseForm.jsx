import { useState } from 'react';
import './ExpenseForm.css'

export default function ExpenseForm(props) {
  const [ formInputs, setFormInputs ] = useState({
    title: '',
    price: '',
    date: '',
  }); 

  function inputChangeHandler(e){
    setFormInputs((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }
    });
  }

  function submitHandler(e){
    e.preventDefault();
    console.log(formInputs);
    props.onAddNewExpense(formInputs);
    setFormInputs({
      title: '',
      price: '',
      date: '',
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor="title-inp">Title</label>
          <input id='title-inp' type="text" name='title' value={formInputs.title} onChange={inputChangeHandler} />
        </div>   

        <div className='new-expense__control'>
          <label htmlFor="price-inp">Price</label>
          <input id='price-inp' type="number" name='price' value={formInputs.price} min="0.25" step="0.25" onChange={inputChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label htmlFor="date-inp">Date</label>
          <input id='date-inp' type="date" name='date' value={formInputs.date} onChange={inputChangeHandler}/>
        </div>
      </div>
      <div className='mew-expense__actions'>
        <button>Add Expense</button>
      </div>
    </form>
  )
}
