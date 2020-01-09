import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/NavBar";
import ProductList from "../src/components/ProductList";
import Details from "../src/components/Details";
import Cart from "../src/components/Cart";
import Default from "../src/components/Default";
import Modal from "./components/Modal";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar></Navbar>
                <Switch>
                    <Route exact path="/" component={ProductList}></Route>
                    <Route path="/details" component={Details}></Route>
                    <Route path="/cart" component={Cart}></Route>
                    <Route component={Default}></Route>
                </Switch>
                <Modal></Modal>
            </React.Fragment>
        );
    }
}
export default App;
