
import AddProduct from "./addProduct";

import style from "./mainProduct.module.css"
import MenuAdmin from "./menuAdmin";


function MainProduct(){

    return(<div className={style.main}>
        <MenuAdmin></MenuAdmin>
        <AddProduct></AddProduct>
    </div>)

}export default MainProduct;