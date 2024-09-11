'use client'

import MenuAdmin from "../../components/admin/menuAdmin";
import style from "./page.module.css"
import { useEffect, useState } from "react";

function RegisterAdmin(){
   const [formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        role:["admin"]
   });

   const [error,setError]=useState("")
   const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({ ...formData, [name]: value });
   }
   const handleSubmit = async (e) => {
    e.preventDefault(); // evita que el formulario se envíe de la manera convencional, lo que evitaría que la página se recargue

    console.log("Sending data:", formData);

    const response = await fetch("http://127.0.0.1:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //sto especifica que el contenido de la solicitud es de tipo JSON.
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const newBook = await response.json();
      console.log("User created:", newBook);
      
      setFormData({
        username:"",
        email:"",
        password:"",
        role:["customer"]
      });
    } else  {
      setError("El correo electronico ya esta en uso")
    }
  };

    return(
        <div className={style.main}>
        <MenuAdmin></MenuAdmin>
        <div className={style.conteiner}>
            <h3>Registrarse como Administrador</h3>
            <div className={style.mainform}>
            
            <form className={style.add} onSubmit={handleSubmit}>
            <h3>Username</h3>
          <div className={style.input}>
            
            <input name="username" value={formData.username} onChange={handleChange} />
          </div>
          <h3>Email</h3>
          <div className={style.input}>
           
            <input name="email" value={formData.email} onChange={handleChange} />
          </div>
          <h3>Password</h3>
          <div className={style.input}>
            
            <input name="password" value={formData.password} onChange={handleChange} />
          </div>
         
          
          {error && <p className={style.error}>{error}</p>}
        <button className={style.save} type="submit">Registrarse</button>
      </form>

            </div>
            
        </div>
        </div>
    );

}export default RegisterAdmin;