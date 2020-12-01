import { connect} from "react-redux";
import Cart from "./Cart";

/*
  1. mapstateToProps subcribes to the store for updates and returns an object that contains a slive of the store data that we want to make available as props to our component (totalCost and productCart).
  2. mapDispatchToProps provides component with acces to the action creator functions taht can be called to dispatch an action to the store.
    - onAddProduct function will simiarly dispatches an action type "addProduct" and productData object as payload. 
    - onDeleteProduct function will simiarly dispatches an action type "deleteProduct" and productData as payload. 
      - Both actions are hanlded by the reducer. 
  3. We then connect mapStateToProps and mapDispatchToProps to our Cart component so that it has access to totalCost, onAddProduct and onDeleteProduct as props. This is done using the connect method.
    - The connect method returns a new higher order Cart component connected to the Redux store.
    - The higher order Cart component has added access to actions and dispatch calls that connects to the Redux store. You can think of it similar to extending an existing class. 
    - Connect takes in mapStateToProps and mapDispatchToProps function as arguments and passes them to the extended Cart component. 
      - This is how a slice of the store and action creators are made available to components in general. React handles these automatically.

*/

function mapStateToProps(state) {
  return {
    totalCost: state.totalCost,
    productCart: state.productCart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddProduct: (productName, productPrice) => dispatch({
      type: "addProduct",
      productData: {
        productName: productName,
        productPrice: productPrice
      }
    }),
    onDeleteProduct: (productData) => dispatch({
      type: "deleteProduct",
      productData: productData
    })
  }
}
var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Cart);
export default connectedComponent;