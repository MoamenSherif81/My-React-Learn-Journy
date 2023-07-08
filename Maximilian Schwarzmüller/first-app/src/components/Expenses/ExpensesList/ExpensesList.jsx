import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Card from '../../UI/Card/Card';
import './ExpensesList.css'

function ExpensesList(props) {
  return (
    <Card className='expenses'>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpensesList;
