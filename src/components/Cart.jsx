export function Cart({ quanitity = 0 }) {
    return (
        <div className="cart blue darken-4 white-text">
            <i className="material-icons">shopping_cart</i>
            {quanitity ? <span className="cart-quantity">{quanitity}</span> : null}
        </div>
    );
}
