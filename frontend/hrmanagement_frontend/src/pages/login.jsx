
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        setMessage("");

        try {
            const req = await fetch(
                "http://localhost:3000/api/emp/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, password })
                }
            );

            const data = await req.json();

            if (!req.ok) {
                setMessage(data.message || "Invalid email or password");
                return;
            }

            setMessage(data.message || "Login successful!");

            // Navigate after a successful backend login
            navigate("/");
        } catch (error) {
            console.error("Login error:", error);
            setMessage("Cannot connect to the server. Check your backend.");
        }
    };

    return (
        <div className="container mt-4">
            <h1>Login Page</h1>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <input
                    type="password"
                    className="form-control mb-3"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>

            {message && <p className="mt-3">{message}</p>}
        </div>
    );
}

export default Login;
