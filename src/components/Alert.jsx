import { useEffect, useState } from "react";

export function Alert({ name = "", closeAlert = Function.prototype }) {
    const [] = useState();

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, [name]);

    return (
        <div id="toast-container">
            <div className="toast">{name} добавлен в корзину</div>
        </div>
    );
}
