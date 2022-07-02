import { useEffect, useState } from "react";

import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";

import { API_KEY, API_URL } from '../config';
import { BasketList } from "./BasketList";

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [lodaing, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quanitity: 1,
            }
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quanitity: orderItem.quanitity + 1,
                    };
                } else {
                    return orderItem;
                }
            });

            setOrder(newOrder);
        }
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    useEffect(function getGoods() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setGoods(data.featured);
                setLoading(false);
            });
    }, []);

    return (
        <main className="container content">
            <Cart quanitity={order.length} handleBasketShow={handleBasketShow} />
            {lodaing ? (
                <Preloader />
            ) : (
                    <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList 
                    order={order} 
                    handleBasketShow={handleBasketShow}
                />
            )}
        </main>
    );
}
