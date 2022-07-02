export function BasketItem ({
    id,
    name,
    price,
    quantity,
}) {
    return (
        <li className="collection-item">
            {name} x{quantity} = {price}
            <span className="secondary-content">
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>
    );
}
