import React, { Component } from 'react';
import { connect } from 'react-redux';

class PocketMoney extends Component {
    render(){
        return(
            this.props.pocketMoney > 0 ? 
                <p>You have <span className="badge badge-success"> Rs {this.props.pocketMoney} </span>  amount to spend on Grocery Today!</p>
                :
                <p className="badge badge-warning">Your bag is full and you have <span className="badge badge-danger"> Rs {this.props.pocketMoney} </span>  amount of money</p>
            
            
        )
    }
}

function mapStateToProps(state){
    return{
        pocketMoney: state.pocketMoney
    }
}

export default connect(mapStateToProps, null)(PocketMoney);