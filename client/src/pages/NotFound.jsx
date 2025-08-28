import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="text-center p-[5px]">
            <h1>🚧 Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error?.statusText || error?.error.message || "Page not found"}</i>
            </p>
            <Link to="/" className="underline">⬅ Go back Home</Link>
        </div>
    );
};

export default NotFound;