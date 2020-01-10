import React, { useContext } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

const ProductList = () => {
    const { products } = useContext(ProductConsumer);
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <Title name="our" title="products">
                        {" "}
                    </Title>
                    <div className="row">
                        {() => {
                            return products.map(product => {
                                return (
                                    <Product key={product.id} product={product}>
                                        {" "}
                                    </Product>
                                );
                            });
                        }}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ProductList;
