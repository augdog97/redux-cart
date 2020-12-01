import React, { Component } from "react";

/* 
    1. in AddProduct we have both local component state productName and productPrice which are used to store the values entered into the input fields.
        - You can have both local component states working in conjunction with application wide Redux state. 
        - Local component states are typically for use in the local component where other components do not require access. 
    2. onClick handler of the button, we have the addProduct prop which dispatches the addProduct action type to the reducer with the input values from product name and product price fields. 
        - dispatch actions directly from child components to update application state. 
*/

class AddProduct extends Component {
    state = {
        productName: "",
        productPrice: 0
    }
    productNameChangedHandler = (event) => {
        this.setState({productName: event.target.name});
    }
    productPriceChangedHandler = (event) => {
        this.setState({productPrice: event.target.price});
    }

    render() {
        return (
            <div className="container"> 
                <input  
                    type="text" 
                    placeholder="Product Name" 
                    onChange={this.state.productNameChangedHandler} 
                    value={this.state.productName} 
                />
                <input 
                    type="number"
                    placeholder="Product Price" 
                    onChange={this.state.productPriceChangedHandler}
                    value={this.state.productPrice} 
                />
                <button className="buttons" onClick={()=> {
                    this.props.addProduct(this.state.productName, this.state.productPrice);}}>
                    Add Product
                </button>
            </div>
        );
    }
};
export default AddProduct;