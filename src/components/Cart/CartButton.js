import { uiActions } from '../../store/UI-slice';
import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  // executing useDispatch() to get access to the dispatch function.
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    // use dispatch function to dispatch an action.
    dispatch(uiActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
