'use client';
import HeaderLogin from "./login/headerLogin";
import SingUp from "./login/singUp";
import Or from "./login/or";
import style from "./login.module.css";
import Button from "./login/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/login/authContext";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { token, login, logout } = useAuth();

    const handleLogin = () => {
        const opts = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        };

        fetch('http://127.0.0.1:5000/api/login', opts)
            .then(res => {
                if (res.status === 200) return res.json();
                else throw new Error("Error en las credenciales");
            })
            .then(data => {
                login(data.access_token);
                setError("");
            })
            .catch(error => {
                setError("Hubo un error: " + error.message);
            });
    };

    return (
        <div className={style.container}>
            <HeaderLogin title={"Login"} />
            <div className={style.main}>
                <SingUp />
                <Or />
                {token ? (
                    <div className={style.log}>
                        <Link href="/admin">
                            <button className={style.adm}>Empezar como administrador</button>
                        </Link>
                        <Button text={"Log Out"} handleClick={logout} />
                    </div>
                ) : (
                    <div className={style.in}>
                        <div className={style.conteiner}>
                            <h3>Email</h3>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={style.conteiner}>
                            <h3>Contraseña</h3>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        {error && <p className={style.error}>{error}</p>}
                        <div className={style.text}>¿Olvidaste tu contraseña?</div>
                        <Button text={"Log In"} handleClick={handleLogin} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
