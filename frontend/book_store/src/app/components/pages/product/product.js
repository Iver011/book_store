'use client'
import style from "./product.module.css"
import TopMenu from "../topMenu";
import Options from "../options";
import HeaderLogin from "../authentication/login/headerLogin";
import ConteinerProduct from "./conteinerProduct";
import Title from "./title";
import Detail from "./detail";
import Info from "../homepage/info";
import Footer from "../homepage/footer";
import { useEffect, useState } from "react";

function Product({id}){

    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://127.0.0.1:5000/api/books/${id}`).
        then(res=>res.json()).
        then(data=>{
            setData(data)
        })
    },[])
    console.log(data)

    return (
        <div className={style.main}>
            
            
            <Title title={"nombre del producto"}></Title>
            <div className={style.product}>
            <ConteinerProduct title={data.title}
                                price={data.price}
                                author={data.author}
                                editorial={data.editorial}
                                numberPages={data.number_pages}
                                bookbinding={data.bookbinding}
                                copies={data.copies}></ConteinerProduct>
            <Detail detail={data.description}/>
       
            </div>
        </div>)


}
export default Product;