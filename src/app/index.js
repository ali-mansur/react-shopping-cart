var React = require('react');
var ReactDOM = require('react-dom');

//Module requires
var Item = require('./Item');

//CSS requires
require('./css/reset.css');
require('./css/index.css');

//Create a component
var ShoppingCart = React.createClass({
    
    getInitialState: function(){
        return {
            storeName: 'Fastrack Store - S R Nagar, Hyderabad',
            items: [
                {   
                    id: 1,
                    imgSrc: "app/images/multi-color-dress.jpg",
                    name: "Multicolored Dress",
                    price: 123,
                    quantity: 0,
                    maxQuantity: 5
                },
                {   
                    id: 2,
                    imgSrc: "app/images/flag-of-world.jpeg",
                    name: "Flags of World",
                    price: 456,
                    quantity: 0,
                    maxQuantity: 10
                },
                {   
                    id: 3,
                    imgSrc: "app/images/the-lost-art.jpeg",
                    name: "The lost Art Kimino Kults",
                    price: 789,
                    quantity: 0,
                    maxQuantity: 3
                }
            ],
            subTotal: 0
        }
    },

    render: function(){
        var items = this.state.items;
        items = items.map(function(item, index){
            return(<Item key={index} item={item} onDelete={this.onDelete} onQuantityChange={this.getSubTotal}/>);
        }.bind(this));
        return(
            <div>
                <header>
                  <div className="store-name-logo f-l">

                    <img src="app/images/fastrack-logo.jpg" className="store-logo f-l"/>
                    <div className="f-l store-name">
                      { this.state.storeName } 
                    </div>

                    <div className="clear"></div>

                  </div>
                  
                  <div className="main-nav f-r">
                    <ul>
                      <li><a href="#home">Home</a></li>
                      <li><a href="#products"> Products </a></li>
                      <li><a href="#offers"> Offers </a></li>
                      <li><a href="#update"> Update </a></li>
                      <li><a href="#search"> Search </a></li>
                      <li>
                          <div className="cart f-l">
                            <img src="app/images/cart.jpg"/> 
                          </div>
                          <div className="f-l cart-count">
                          { this.state.items.length }
                          </div>
                      </li>
                    </ul>
                  </div>

                  <div className="clear"></div>

                </header>

                <div className="main-container">
                    <div className="cart-heading">
                        <h1>Your Order: Shopping Cart</h1>
                    </div>

                    <div className="f-l item-container">
                        <div>
                            <ul>{items}</ul>
                        </div>
                    </div>

                    <div className="shipping-checkout f-l">
                        <div className="shipping">
                            <img src="app/images/free-delivery.png" className="shipping-img"/>
                            <p>
                                Some Details regarding shipping and free Delivery.
                            </p>
                        </div>

                        <div className="sub-total">
                            <span>
                                Sub-Total
                            </span>
                            <p>
                                Rs. { this.state.subTotal }
                            </p>
                            <button> checkout </button>
                        </div>

                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        );
    },

    //Custom functions
    onDelete: function(item){
        var updateditems = this.state.items.filter(function(val, index){
            return item.id !== val.id;
        });
        this.setState({
          items: updateditems
        }, function(){
           this.getSubTotal();
        });
    },

    getSubTotal: function(){
        let sum = 0;
        for (let i = 0; i < this.state.items.length; i++) {
            sum+= this.state.items[i].price * this.state.items[i].quantity;
        }
        this.setState({
          subTotal: sum
        });
    }

});

ReactDOM.render(<ShoppingCart />, document.getElementById('shopping-cart'));
