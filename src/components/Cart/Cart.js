import React, { useContext } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals.js";

const Cart = props => {
    // export default class Cart extend
    const value = useContext(ProductConsumer);
    const { cart } = value;
    //render{
    return (
        <section>
            {() => {
                // {value => {
                if (cart.length > 0) {
                    return (
                        <React.Fragment>
                            <Title name="your" title="cart" />
                            <CartColumns />
                            <CartList value={value} />
                            <CartTotals value={value} history={props.history} />
                        </React.Fragment>
                    );
                } else {
                    return <EmptyCart />;
                }
            }}
        </section>
    );
    // }
};

export default Cart;
