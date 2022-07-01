export function Footer() {
    return (
        <footer className="page-footer green lighten-4">
            <div className="container">
                &copy; {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="#">Repo</a>
            </div>
        </footer>
    );
}
