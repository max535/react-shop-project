export function Header() {
    return (
        <nav className="blue darken-1">
            <div className="nav-wrapper">
                <a href="!#" className="brand-logo">
                    React Shop
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/max535/react-shop-project"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
