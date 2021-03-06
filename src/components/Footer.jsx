export function Footer() {
    return (
        <footer className="page-footer blue darken-1">
            <div className="footer-copyright">
                <div className="container">
                    &copy; {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/max535/react-shop-project"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    );
}
