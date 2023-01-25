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
                body: JSON.stringify({ // instead of returning the whole cart, just returning 'items' array and 'totalQuantity' properties becoz we do not need 'changed' property there in the database when we send our data to the server.
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
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
    return async (dispatch) => {

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
            dispatch(cartActions.replaceCart({
                // if we add items to cart means (Add to cart), then when we fetch data we shd get items that we store in the server. But in some cases, if we don't add items to cart so firebase data contains 0 items so in this case if we fetch data, it should give us empty array instead of showing undefined error. 
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
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


