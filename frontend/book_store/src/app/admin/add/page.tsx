'use client'
import MenuAdmin from "../../components/admin/menuAdmin";
import AddProduct from "../../components/admin/addProduct";
import style from "./page.module.css"
import { AuthProvider } from "../../login/authContext";


function MainProduct(){

    return(
    <AuthProvider>
        <div className={style.main}>
        <MenuAdmin></MenuAdmin>
        <AddProduct></AddProduct>
    </div>
    </AuthProvider>
    )

}export default MainProduct;