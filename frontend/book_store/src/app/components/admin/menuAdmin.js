import style from "./menuAdmin.module.css"
import Link from "next/link";
function MenuAdmin(){

    return(
    <div className={style.mainMenu}>
        <div className={style.header}>
            <img src="../logo2.svg"></img>
            <h3>Admin</h3>
        </div>
        <div className={style.slidebar}>
            <Link className={style.link} href={"/admin"}>
            <div className={style.tab}>
                <i className="fas fa-box"></i>
                <h4>Productos</h4>
            </div></Link>
            
            <div className={style.tab}>
                <i className="fas fa-shopping-cart"></i>
                <h4>Ordenes</h4>
            </div>
            <Link className={style.user} href={"/admin/users"}>
            <div className={style.tab}>
                <i className="fas fa-user"></i>
                <h4>Usuarios</h4>
            </div></Link>
            
            <Link className={style.settings} href={"/admin/settings"}>
            <div className={style.tab}>
                <i className="fas fa-cog"></i>
                <h4>Configuraciones</h4>
            </div>
            </Link>
        </div>
        <Link className={style.link} href="/">
        <div className={style.exit}>
        <i class="fas fa-door-open"></i>
        <h2>Salir  </h2>
       
        </div>
        </Link>

    </div>)

}
export default MenuAdmin;

