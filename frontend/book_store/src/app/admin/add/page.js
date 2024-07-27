'use client'
import MenuAdmin from "@/app/components/admin/menuAdmin";
import AddProduct from "@/app/components/admin/addProduct";
import style from "./page.module.css"
import { AuthProvider } from "@/app/login/authContext";
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