import React, { Component } from 'react';

import { connect } from 'react-redux';

class Stats extends Component {
    cost() {
        let totalCost = 0;
        this.props.shoppingBag.forEach(item => totalCost = totalCost + item.cost);
        return totalCost;
    }

    calories() {
        let totalCalories = 0;
        this.props.shoppingBag.forEach(item => totalCalories = totalCalories + item.calories)
        return totalCalories;
    }

    weights() {
        let totalWeights = 0;
        this.props.shoppingBag.forEach(item => totalWeights = totalWeights + item.weight)
        return totalWeights;
    }

    render() {
        return (
            <div className="col-md-4 stats-bg">
                <h3 className="text-center"> Stats Items</h3>
                <ul className="list-group">
                    <li className="list-group-item">Total Cost:- <span className="badge badge-primary">Rs {this.cost()} </span></li>
                    <li className="list-group-item">Total Calories:-  <span className="badge badge-warning">{this.calories()} kcal </span></li>
                    <li className="list-group-item">Total Weights:- <span className="badge badge-secondary">{this.weights()} mg </span></li>
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

export default connect(mapStateToProps, null)(Stats);