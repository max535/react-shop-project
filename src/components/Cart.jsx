export function Cart({ quanitity = 0, handleBasketShow = Function.prototype }) {
    return (
        <div
            className="cart blue darken-4 white-text"
            onClick={handleBasketShow}
        >
            <i className="material-icons">shopping_cart</i>
            {quanitity ? (
                <span className="cart-quantity">{quanitity}</span>
            ) : null}
        </div>
    );
}
