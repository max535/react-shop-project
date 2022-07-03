export function BasketItem({
    id,
    name,
    price,
    quanitity,
    removeFromBasket = Function.prototype,
}) {
    return (
        <li className="collection-item">
            {name} x{quanitity} = {price * quanitity} руб.
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}
