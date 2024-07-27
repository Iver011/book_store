import Link from "next/link";
import style from "./title.module.css"
function Title({title}){



    return(
        <div className={style.main}>
           <Link className={style.link} href="/"><p>Pagina principal</p></Link> 
            <p> {">"}</p>
            <h3>{title}</h3>
        </div>
    );
}
export default Title;