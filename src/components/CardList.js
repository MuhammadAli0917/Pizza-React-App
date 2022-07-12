import React, {useEffect, useState} from 'react';
import Card from "./Card";

function CardList({products, addToCart}) {
    const [delay, setDelay] = useState(true)

    useEffect(() => {
        setDelay(true)
        setTimeout(() => {
            setDelay(false)
        }, 5000)
    }, [products])
    return (
        <>
            {
                delay ? <div className="loader">
                        <img src="https://i.imgur.com/kRuCoPO.gif" alt=""/>
                </div>
                    :
                    <div className="card-list">
                        {products.length === 0 ? <p>No products</p> :
                        products.map(item => {
                            return (
                                <Card key={item.id} data={item} addToCart={addToCart} />
                            )
                        })}
                    </div>
            }
        </>
    );
}

export default CardList;