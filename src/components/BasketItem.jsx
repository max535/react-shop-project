export function BasketItem({
    id,
    name,
    price,
    quanitity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
}) {
    return (
        <li className="collection-item">
            {name}
            <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>
                remove
            </i>
            x{quanitity}
            <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>
                add
            </i>
            = {price * quanitity} руб.
            <span
                className="secondary-content"
                onClick={() => removeFromBasket(id)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}
