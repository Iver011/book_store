import style from "./orders.module.css"
import RowOrder from "./rowOrder";

function Orders(){


    return(
        <div className={style.orders}>
            <div className={style.mainTab}>
                <div className={style.title}>
                <h2>Orders</h2>

                </div>
                <div className={style.buttons}>
                    <div className={style.search}>
                        <i className="i fas fa-search"></i>
                        <input placeholder=  "Buscar Pedido"></input>
                    </div>
                </div>
            </div>
            <hr></hr>
                <div className={style.tabhead}>
                <div className={style.id}>
                <h1><i className="fas fa-filter"></i></h1>
                </div>
                <div className={style.title}>
                <h1>User ID</h1>
                </div>
                <div className={style.author}>
                <h1>Titulo</h1>
                </div>
                <div className={style.editorial}>
                <h1>Autor</h1>
                </div>
                <div className={style.price}>
                <h1>Fecha de Pedido</h1>
                </div>
                <div className={style.more}>
            <h1>Mas</h1>
            </div>
            </div>  
            <hr></hr>
            <RowOrder></RowOrder>
        </div>
    );

}export default Orders;