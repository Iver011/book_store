import style from "./menulisting.module.css"

function MenuListing(){


    return(
        <div className={style.mainConteiner}>
            <div className={style.categorias}>
            <h1>Categorias</h1>
            <div className={style.lista}>
                <div className={style.li}> <input type="checkbox"></input><h2>Arte</h2>    </div>
                <div className={style.li}> <input type="checkbox"></input><h2>Ciencia</h2></div>
                <div className={style.li}> <input type="checkbox"></input><h2>Clasicos</h2></div>
                <div className={style.li}> <input type="checkbox"></input><h2>Deporte</h2></div>
                <div className={style.li}> <input type="checkbox"></input><h2>Drama</h2></div>
                <div className={style.li}> <input type="checkbox"></input><h2>Terror</h2></div>
                <div className={style.li}> <input type="checkbox"></input><h2>Manga</h2></div>
                <div className={style.li}> <input type="checkbox"></input><h2>Religion</h2></div>
                <div className={style.li}> <input type="checkbox"></input><h2>Romance</h2></div>
               <div className={style.li}  ><input type="checkbox"></input><h2>Historia</h2></div>
            </div>
            </div>
            <div className={style.price}>
                <h1 className={style.titleprice}>Precio</h1>
                <div className={style.listaprecios}>
                    <div className={style.li}><input type="checkbox"></input><h2>De mayor a menor precio</h2></div>
                    <div className={style.li}><input type="checkbox"></input><h2>De menor a mayor precio</h2></div>
                </div>
            </div>
        </div>

    );
}export default MenuListing;