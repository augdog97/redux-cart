import React, { Component} from "react";
import AddProduct from './AddProduct';
import { Table} from 'reactstrap';


/*
    1. The cart is a simple AddProduct form and table which consists lists the added products.
        - Props are sent from the connect HOC. this.props.onAddProduct nad onDeleteProduct(productData) functions are called when the add button and remove buttons are clicked. 
        - onAddProduct is passed as a prop addProduct to AddProduct component. This allows the AddProduct child component to dispatch actions to update application state directly instead of passing data back up the tree.
        - this.props.totalCost is used to display the total cost. 
    2. Used the Table component from reactstrap to create a nice looking table. 
        - The map function is used to populate the table rows with the product name and price. A remove column is added which calls props.onDeleteProduct which dispatches action of type deleteProduct to the reducer to remove the product from the cart array. 
*/
class Cart extends Component {
    render() {
        return (
            <div className="container">
                <AddProduct addProduct={this.props.onAddProduct} />
                <Table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.productCart.map(productData => (
                            <tr key={productData.productName}>
                                <td> {productData.productName}</td>
                                <td> {productData.productPrice}</td>
                                <td onClick={() =>
                                this.props.onDeleteProduct(productData)}> Remove</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <span> Total Amount: {this.props.totalCost}</span>
            </div>
        );
    }
};
export default Cart;