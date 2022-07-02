import { useEffect, useState } from "react";

import { GoodsList } from "./GoodsList";
import { Preloader } from "./Preloader";

import { API_KEY, API_URL } from '../config';

export function Shop() {
    const [goods, setGoods] = useState([]);
    const [lodaing, setLoading] = useState(true);

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
            {
                lodaing ? <Preloader /> : <GoodsList goods={goods} />
            }
        </main>
    );
}
