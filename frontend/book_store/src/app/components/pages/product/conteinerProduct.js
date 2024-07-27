import style from "./conteinerProduct.module.css"
import Button from "../authentication/login/button";

function ConteinerProduct({title,price,author,editorial,numberPages,copies,bookbinding}){


    return (
        <div className={style.conteiner}>
            <div className={style.image}>
                <img src={`../covers/${title}.jpg`}></img>
            </div>
            
            <div className={style.info}>
                <h3>{title}</h3>
                <div className={style.detail}><h2 className={style.text}>Precio:</h2><h2 className={style.value}>Bs. {price}.00</h2></div>
                <div className={style.detail}><h2 className={style.text}>Autor:</h2><h2 className={style.value} >{author}</h2></div>
                <div className={style.detail}><h2 className={style.text}>Editorial:</h2><h2 className={style.value}>{editorial}</h2></div>
                <div className={style.detail}><h2 className={style.text}>Numero de Paginas:</h2><h2 className={style.value}>{numberPages}</h2></div>
                <div className={style.detail}><h2 className={style.text}>Tipo de Cubierta:</h2><h2 className={style.value}>{bookbinding}</h2></div>
                <div className={style.detail}><h2 className={style.text}>Numero de Copias:</h2><h2 className={style.value}>{copies}</h2></div>
                <div className={style.send}>
                    <div className={style.botones}>
                    <Button text={"Add to Cart"}></Button>
                    <button className={style.heart}><i class="far fa-heart"></i></button>
                    </div>
                
                <p>- Envio gratis en todas nuestras compras +</p>
                </div>
            </div>
            
        </div>
    );
}
export default ConteinerProduct;