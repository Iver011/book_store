
import style from "./rowOrder.module.css"

function RowOrder({id,userid,title,author,orderDate}){

    return(
        <div className={style.row}>
            <div className={style.id}>{id}</div>
            <div className={style.userid}>{userid}</div>
            <div className={style.title}>{title}</div>
            <div className={style.author}>{author}</div>
            <div className={style.orderdate}>{orderDate}</div>
            <div className={style.mas}><i className="fas fa-ellipsis-h"></i></div>

        </div>
    );
}export default RowOrder;