import './ExpenseItem.css'

function ExpenseItem(props) {
  
  return (
    <div className='expense-item'>
      <div className='expense-item__date'>
        <div>{props.date.toLocaleString('en-us', {month: 'long'})}</div>
        <div>Year</div>
        <div>Day</div>
      </div>
      <div className='expense-item__info'>
        <h2 className='expense-item__title'>{props.title}</h2>
        <div className='expense-item__price'>{props.price} EGP</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
