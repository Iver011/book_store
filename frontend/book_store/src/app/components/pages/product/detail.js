import style from "./detail.module.css"

function Detail({detail}){

    return (
    <div className={style.main}>

        <div className={style.menu}>
            <div className={style.selection}>
            <i class="fas fa-ellipsis-h"></i>
                <p>Descripcion</p>
                
            </div>
            <div className={style.selection}>
            <i class="far fa-star"></i>
                <p>Rating</p>
                
            </div>
        </div>
        <div className={style.description}>
            <h3>Descripcion</h3>
            <p>{detail}</p>
        </div>

    </div>
    

);
}export default Detail;