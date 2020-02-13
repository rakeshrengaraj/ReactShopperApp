import React, { Component } from 'react';

import { connect } from 'react-redux';

import { removeGroceryById, addPocketMoney } from '../actions';


class ShoppingBag extends Component {

    displayShoppingBag(){
        if(this.props.shoppingBag.length > 0){
            return (
                this.props.shoppingBag.map((item) => {
                    return <li className="list-group-item"
                        key={item.id}
                        onClick={() => 
                            {
                                this.props.removeGroceryById(item.id)
                                this.props.addPocketMoney(item.id)
                            }}
                    >
                        <b>{item.name}</b> -
                    <span className="badge badge-primary"> Rs {item.cost} </span>  -
                    <span className="badge badge-warning"> {item.calories} kcal </span>  -
                    <span className="badge badge-secondary"> {item.weight} mg </span>
                    </li>
                })
            )
        }
        else{
            return <li className="list-group-item">Please add items to shopping bag</li>
        }
    }


    render() {
        return (
            <div className="col-md-4 shopping-bag-bg">
                <h3 className="text-center"> ShoppingBag Items</h3>
                <ul className="list-group">
                    {this.displayShoppingBag()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        shoppingBag: state.shoppingBag
    }
}

export default connect(mapStateToProps, {removeGroceryById,addPocketMoney})(ShoppingBag);