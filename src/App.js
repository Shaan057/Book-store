import { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";
import CartContext from "./context/CartContext";

import "./App.css";

class App extends Component {
  state = {
    cartList: [],
  };

  addToCart = (book) => {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, book],
    }));
  };

  resetCart = () => {
    console.log("reset");
    this.setState({ cartList: [] });
  };

  deleteFromCart = (bookId) => {
    const updatedCartList = this.state.cartList.filter(
      (eachCartItem) => eachCartItem.isbn13 !== bookId
    );

    this.setState({ cartList: updatedCartList });
  };
  render() {
    const { cartList } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartList,
          addToCart: this.addToCart,
          deleteFromCart: this.deleteFromCart,
          resetCart: this.resetCart,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={BookList} />
          <Route exact path="/books/:id" component={BookDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    );
  }
}

export default App;
