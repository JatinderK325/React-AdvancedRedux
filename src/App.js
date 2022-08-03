import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  // to useSelector(), we need to pass a function(automatically executed by react-redux) which receives the redux state(current state) and returns the current data that we want to use here in this component, here we need the value of cartIsVisible property. 
  // getting access to data with the help of 'useSelector' function in order to conditionally rendering component on the screen.
  const showCart = useSelector(state => state.ui.cartIsVisible);
  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
