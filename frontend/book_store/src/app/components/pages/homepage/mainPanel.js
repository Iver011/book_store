import style from "./mainPanel.module.css"
import Link from "next/link";
function MainPanel(){



    return(
        <div className={style.main}>
            <div className={style.title}>
                <h3>Realiza tus pedidos Online</h3>
                <h2>¿Que libros te interesan? Haz tus pedidos</h2>
                <Link href="/books">
                <button>Ver todo el catalogo<i className="fas fa-arrow-right arrow"></i></button>
                </Link>
            </div>
        </div>
    );
}
export default MainPanel;