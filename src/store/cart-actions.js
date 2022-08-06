import { uiActions } from "./UI-slice";
import { cartActions } from "./cart-slice";

// 2. Inside the action creators way: to put logic for side-effects and async code. This is an alternative for 'Inside the component way'.
// Action creator function for sending data(cart):
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-advancedredux-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
            });
            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }));
        }
        catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        }
    };
};

// Action creator function for fetching data(cart):

export const fetchCartData = () => { // immediately returning a function that takes dispatch as an argument.
    return async(dispatch) => {

        const fetchData = async () => {
            const response = await fetch('https://react-advancedredux-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Fetching cart data failed.');
            }

            const data = await response.json();
            return data;
        };
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        }
        catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }));
        }

    };
};


