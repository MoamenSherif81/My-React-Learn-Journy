import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';
import './ExpenseItem.css'

function ExpenseItem(props) {
  
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2 className='expense-item__title'>{props.title}</h2>
        <div className='expense-item__price'>{props.price} EGP</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
