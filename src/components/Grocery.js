import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addGroceryById, removePocketMoney } from '../actions';

class Grocery extends Component {

    

    preventGroceyAdding(){
        let gotMoney = (this.props.pocketMoney <= 0 ) ? false : true;
        return gotMoney;
    }

    displayGrocery(){
        if(this.props.grocery.length > 0){
            return (
                this.props.grocery.map((item) => {
                    return <li className="list-group-item"
                        key={item.id}
                        onClick={(e) => { !this.preventGroceyAdding() ? e.preventDefault() : 
                            
                                this.props.addGroceryById(item.id)
                                this.props.removePocketMoney(item.id)
                            }
                        }
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
            return <li className="list-group-item">Oops No Items, please come back tomorrow.</li>
        }
    }    
    

    render() {
        return (
            <div className="col-md-4 grocery-bg">
                <h3 className="text-center"> Grocery Items</h3>
                <ul className="list-group">
                    {this.displayGrocery()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        grocery: state.grocery,
        pocketMoney: state.pocketMoney
    }
}


export default connect(mapStateToProps, { addGroceryById,removePocketMoney })(Grocery);