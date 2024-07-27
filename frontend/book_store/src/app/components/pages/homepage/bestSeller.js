import style from "./bestSeller.module.css"
import BookCard from "./bookCard";
import { useState,useEffect } from "react";
function BestSeller(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/api/books?order_by=copies&limit=4").
        then(res=>res.json()).
        then(data=>{setData(data)
        })
    },[])


    console.log("datos",data)
    const lastData=data.slice()
    console.log(lastData)


    return(
    
    <div className={style.main}>
    
            <h4>COMPRA AHORA</h4>
            <h2>Mas Vendidos</h2>
            <div className={style.conteiner}>
                {lastData.map((book)=>(
                    <BookCard id={book.id} title={book.title} copies={book.copies} price={book.price}></BookCard>
                ))}
            </div>

            
    
    </div>);

}export default BestSeller;