import { useEffect, useState } from "react";

import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

import { API_KEY, API_URL } from "../config";

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [lodaing, setLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState("");

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(
            (orderItem) => orderItem.id === item.id
        );

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quanitity: 1,
            };
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
        setAlertName(item.name);
    };

    const removeFromBasket = (itemId) => {
        const newOrder = order.filter((el) => el.id != itemId);
        setOrder(newOrder);
    };

    const handleBasketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const incQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuanity = el.quanitity + 1;
                return {
                    ...el,
                    quanitity: newQuanity,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const decQuantity = (itemId) => {
        const newOrder = order.map((el) => {
            if (el.id === itemId) {
                const newQuanity = el.quanitity - 1;
                return {
                    ...el,
                    quanitity: newQuanity >= 0 ? newQuanity : 0,
                };
            } else {
                return el;
            }
        });
        setOrder(newOrder);
    };

    const closeAlert = () => {
        setAlertName("");
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
            <Cart
                quanitity={order.length}
                handleBasketShow={handleBasketShow}
            />
            {lodaing ? (
                <Preloader />
            ) : (
                <GoodsList goods={goods} addToBasket={addToBasket} />
            )}
            {isBasketShow && (
                <BasketList
                    order={order}
                    handleBasketShow={handleBasketShow}
                    removeFromBasket={removeFromBasket}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            )}
            {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
        </main>
    );
}
