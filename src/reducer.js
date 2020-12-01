
// Reducer 

/*
    1. We first intialize the state to an empty productCart array and the total cost to be 0.
    2. Then use a switch statement to handle the two action types ( add and delet product) the reducer will recieve. 
        - addProduct: increment totalCost by the product price and return a new array with the newly added product.
        - deleteProduct: subtract product price from totalCost and return a new array with the target product omitted.
            - Have to use the parseInt method to convert strings to numbers or we would get a string of numbers concatendated.
*/


function cartReducer(state, action) {
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }
    switch (action.type) {
        case "addProduct":
            return {
                ...state, totalCost: state.totalCost + parseInt(action.productData.productPrice), productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        case "deleteProduct":
            const updatedArray = state.productCart.filter(product => product.productName !== action.productData.productName);
            return {
                ...state, totalCost: state.totalCost - parseInt(action.productData.productPrice), productCart: updatedArray
            }
        default:
            return state;
    }
}
export default cartReducer;