import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                </nav>
            </header>

            <Outlet />

            <footer>
                <p>This is footer!</p>
            </footer>
        </div>
    );
};

export default MainLayout