'use client'
import Link from "next/link";
import style from "./options.module.css"
import { useState } from "react";

function Options(){

    const [id,setId]=useState("");
    const changeId=(e)=>{
        setId(e.target.value)
    }
    return (
        <div className={style.header}>
            <div className={style.menu}>
                <div className={style.left}>
                    <div className={style["logo-container"]}>
                        <img src="../logo2.svg"></img>
                        <h3>BookStore</h3>
                    </div>
                    <div className={style.navigation}>
                        <Link className={style.link} href="/"><p>Inicio</p></Link>
                        <div className={style.category}>Categorias
                            <ul className={style.lista}>
                                <li>Arte</li>
                                <li>Ciencia</li>
                                <li>Clasicos</li>
                                <li>Deporte</li>
                                <li>Drama</li>
                                <li>Terror</li>
                                <li>Manga</li>
                                <li>Religion</li>
                                <li>Romance</li>
                                <li>Historia</li>
                            </ul>
                        </div>
                        <p>Acerca de</p>
                        <p>Contactanos</p>
                    </div>
                    
                </div>
                <div className={style.right}>
                    <div className={style.input}>
                        <Link href={`/books/${id}`}>  <button className={style.btn}>
                            <i className="fas fa-search"></i>
                        </button></Link>
                      
                        <input className={style.in} value={id} onChange={changeId} placeholder="Busca un libro"></input>
                        <Link href="/login"><button className={style.btn}> <i className="fas fa-user"></i></button></Link>
                        <Link href="/register"><button className={style.btn}> <i class="fas fa-user-plus"></i></button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}export default Options;