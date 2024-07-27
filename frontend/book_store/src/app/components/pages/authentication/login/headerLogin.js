import style from "./headerLogin.module.css"
import Link from "next/link";
function HeaderLogin({title}){


    return (
        <div className={style.main}>
            <div className={style.conteiner}>
                <h1>{title}</h1>
                <div className={style.link}>
                <Link className={style.linkstyle} href="/"><h3>Pagina Principal {">"}  </h3></Link><h2>{title}</h2>
                </div>
                
            </div>

        </div>

    );

}export default HeaderLogin;