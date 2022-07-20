import './Header.css';
import ChangeMoney from './ChangeMoney';

function Header(props) {
  return (
    <div className="container">
      <h1 className="title">🤑 Expense Tracker</h1>
      <ChangeMoney monetary={props.monetary} />
    </div>
  );
}

export default Header;
