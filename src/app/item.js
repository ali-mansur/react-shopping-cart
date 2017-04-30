var React = require('react');
var ReactDom = require('react-dom');

//Create Item component
var Item = React.createClass({

    render: function(){
        var options = new Array(this.props.item.maxQuantity);   
        for(var i=0; i<= this.props.item.maxQuantity; i++ ){
            options[i] = <option >{i}</option>;
        }
        

        return(
            <li className="item">
                <div className="item-image f-l padding-5">
                    <img src={this.props.item.imgSrc} />
                </div>

                <div className="item-details f-l padding-5">
                    <p className="name"> { this.props.item.name } </p>
                    <span className="remove-item" onClick={this.handleDelete}> Remove </span>
                </div>

                <div className="item-quantity-price f-l padding-5">
                    <span> Qty: </span>         
                    <select onChange={this.handleQuantityChange} value={this.props.item.quantity}>
                        {options}
                    </select>
                    <span className="total"> { this.props.item.price * this.props.item.quantity } </span>   
                </div>
                
                <div className="clear"></div>
            </li>
        );
    },

    //Custom functions
    handleDelete: function(){
        this.props.onDelete(this.props.item);
    },

    handleQuantityChange: function(event){
        this.props.item.quantity = event.target.value;
        this.props.onQuantityChange();
    }
});

module.exports = Item;