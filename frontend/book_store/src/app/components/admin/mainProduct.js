
import AddProduct from "./addProduct";
import AdminProducts from "./adminProducts";
import style from "./mainProduct.module.css"
import MenuAdmin from "./menuAdmin";
import Orders from "./orders";

function MainProduct(){

    return(<div className={style.main}>
        <MenuAdmin></MenuAdmin>
        <AddProduct></AddProduct>
    </div>)

}export default MainProduct;