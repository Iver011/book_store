'use client';
import HeaderLogin from "./login/headerLogin";
import SingUp from "./login/singUp";
import Or from "./login/or";
import style from "./login.module.css";
import Button from "./login/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "../../../login/authContext";
import { useRouter } from "next/navigation";
import { signIn,signOut } from "next-auth/react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { token, login, logout } = useAuth();
    const [errors,setErrors]= useState<string[]>([]);
    const router=useRouter();


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors([]);
    
        const responseNextAuth = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        console.log(responseNextAuth)
        if (responseNextAuth?.error) {
          setErrors(responseNextAuth.error.split(","));
          return;
        }
    
        router.push("/admin");
      };
    return (
        <div className={style.container}>
            <HeaderLogin title={"Login"} />
            <div className={style.main}>
                <SingUp />
                <Or />
                <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.datos}>
        <h3 className={style.h3}>Email</h3>  
        <input
          type="email"
          placeholder="test@test.com"
          name="email"
          className={style.input}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        </div>
        <div className={style.datos}>
        <h3 className={style.h3}>Password</h3>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          name="password"
          className={style.input}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        </div>
        {
          errors.length>0&&(
            <div className={style.error}>
              {errors.map((error)=>(
                <li key={error}>{error}</li>
              )
                
              )}
            </div>
          )
        }
        <button
          type="submit"
          className={style.adm}
        >
          Login
        </button>
      </form>
         { /* <button
              onClick={() => signOut()}
              className={style.adm}
            >
              Signout
            </button>*/}
            </div>
        </div>
    );
}

export default Login;
