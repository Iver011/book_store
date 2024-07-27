import style from "./bookCard.module.css"
import { useState,useEffect } from "react"
import Link from "next/link";
function BookCard({id,title,copies,price}){
   
    console.log(title,copies,price)
    return(

            <div className={style.conteiner}>
                <Link href={`/books/${id}`}>
                <img src={`./covers/${title}.jpg`}></img></Link>
                <div className={style.details}>
                <h3>{title}</h3>
                <div className={style.info}>
                    <div className={style.stock}>
                        DISPONIBLES: {copies}
                    </div>
                    <div className={style.price}>
                        {price}. Bs
                    </div>

                </div>
                </div>
              
            
            </div>


    );


}export default BookCard;