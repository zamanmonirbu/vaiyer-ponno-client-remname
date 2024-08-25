import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <Link to={'/dashboard'} className="text-green-500">User Dashboard</Link>
        </div>
    );
};

export default Home;
