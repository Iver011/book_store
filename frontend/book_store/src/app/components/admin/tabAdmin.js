import { useState } from "react";
import style from "./tabAdmin.module.css"
import TabHead from "./tabHead";
import Link from "next/link";
import ReportPDF from "../report";

function TabAdmin({handleSearch}){
    const [searchQuery,setSearchQuery]=useState("")
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        handleSearch(e.target.value);
      };
    
    return(

        <div className={style.mainTab}>
            <div className={style.title}>
                <h2>Productos</h2>

            </div>
            <div>
                <ReportPDF></ReportPDF>
            </div>
            <div className={style.buttons}>
                <Link href="/admin/add">
                <button>Add Producto</button></Link>
                
                <div className={style.search}>
                   
                    <i className="i fas fa-search"></i>
                  
                    <input placeholder=  "Buscar Productos" 
                    value={searchQuery} 
                    onChange={handleInputChange} ></input>  
                </div>
                </div>
        </div>
    );
}export default TabAdmin;