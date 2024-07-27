import style from "./tabHead.module.css"

function TabHead(){


    return(
        <div className={style.tabhead}>
            <div className={style.id}>
            <h1><i className="fas fa-filter"></i></h1>
            </div>
            <div className={style.title}>
            <h1>Titulo</h1>
            </div>
            <div className={style.author}>
            <h1>Autor</h1>
            </div>
            <div className={style.editorial}>
            <h1>Editorial</h1>
            </div>
            <div className={style.price}>
            <h1>Precio</h1>
            </div>
            <div className={style.numPages}>
            <h1>Pag.</h1>
            </div>
            <div className={style.bookbinding}>
            <h1>Encuadernado</h1>
            </div>
            <div className={style.copies}>
            <h1>Disp.</h1>
            </div>
            <div className={style.description}>
            <h1>Descripcion</h1>
            </div>
            <div className={style.more}>
            <h1>Mas</h1>
            </div>
            
        </div>
    );
}export default TabHead;