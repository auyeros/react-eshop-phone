//casi hooks usecontect

import React, { useEffect, useState, useContext } from "react";
import { storeProducts, detailProduct } from "./data";
import { runInThisContext } from "vm";

const ProductContext = React.createContext();

const ProductProvider = () => {
    const [products, setProducts] = useState([]);
    const [productDetail, setDetailProduct] = useState(detailProduct);
    const [cart, setCart] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState(detailProduct);
    const [cartSubtotal, setCartSubtotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // let stateTest = {
    //     products,
    //     productDetail,
    //     cart,
    //     modalOpen,
    //     modalProduct,
    //     cartSubtotal,
    //     cartTax,
    //     cartTotal
    // };
    useEffect(() => {
        this.setProductsOnStore();
    });

    const setProductsOnStore = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });
        setProducts(tempProducts);
    };

    const getItem = id => {
        const product = products.find(item => item.id === id);
        return product;
    };

    const handleDetail = id => {
        const product = this.getItem(id);
        setDetailProduct(product);
    };

    const addToCart = id => {
        let tempProducts = [...products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        setProducts(tempProducts);
        setCart([...cart, product]);

        this.addTotals();

        // this.setState(
        //     () => {
        //         return {
        //             products: tempProducts,
        //             cart: [...this.state.cart, product]
        //         };
        //     },
        //     () => {
        //         this.addTotals();
        //     }
        // );
    };

    const openModal = id => {
        const product = this.getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const increment = id => {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        setCart([...tempCart]);
        this.addTotals();
    };

    const decrement = id => {
        let tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            setCart([...tempCart]);

            this.addTotals();
        }
    };

    const removeItem = id => {
        let tempProducts = [...products];
        let tempCart = [...cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        setCart([...tempCart]);
        setProducts([...tempProducts]);

        this.addTotals();
    };

    const clearCart = () => {
        setCart([]);
        this.setProducts();
        this.addTotals();
    };

    const addTotals = () => {
        let subTotal = 0;
        cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        setCartSubtotal(subTotal);
        setCartTax(tax);
        setCartTotal(total);
    };

    return (
        <ProductContext.Provider value={{}}>
            {this.props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
