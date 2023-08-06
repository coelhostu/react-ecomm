import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
 
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/");

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label type="text" placeholder="Username" autoComplete="username" />
                <label type="password" placeholder="Password" autoComplete="current-password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;