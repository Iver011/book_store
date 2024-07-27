'use client'
import MenuAdmin from "../components/admin/menuAdmin";
import AdminProducts from "../components/admin/adminProducts";
import AddProduct from "../components/admin/addProduct";
import style from "./page.module.css"
import { AuthProvider } from "../login/authContext";
import { useEffect } from "react";
import ReportPDF from "../components/report";
function MainProduct(){

    useEffect
    return(
    <AuthProvider>
        <div className={style.main}>
        <MenuAdmin></MenuAdmin>
        <AdminProducts></AdminProducts>
        
    </div>

    </AuthProvider>
    )

}export default MainProduct;