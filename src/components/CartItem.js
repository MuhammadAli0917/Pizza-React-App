import React from 'react';

function CartItem({product, changeQuantity}) {
    return (
        <div className="cartItem">
            <img src={product.url} className="cartItemImage" alt=""/>
            <div className="cartMain">
                <div>
                    <p className="itemTitle">{product.title}</p>
                    <span className="cartPrice">UZS: {product.price}</span>
                </div>
                <div>
                    <p className="itemQuantity">Quantity: <span>{product.quantity}</span></p>
                    <div>
                        <button className="quantityBtn" onClick={() => changeQuantity(product, "-")}>-</button>
                        <button className="quantityBtn" onClick={() => changeQuantity(product, "+")}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;