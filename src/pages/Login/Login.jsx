import { useNavigate } from "react-router-dom";
import { Header } from "../../components";
import "../../styles/Page.css";



function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");

    }

    return (
        <>
            <Header />
            <div className="page-continer">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label type="text" placeholder="Username" autoComplete="username" />
                    <label type="password" placeholder="Password" autoComplete="current-password" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
