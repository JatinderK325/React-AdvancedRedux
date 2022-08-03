import { uiActions } from '../../store/UI-slice'; 
import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  // executing useDispatch() to get access to the dispatch function.
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    // use dispatch function to dispatch an action.
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
