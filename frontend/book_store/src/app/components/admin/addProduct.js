import React, { useState } from "react";
import style from "./addProduct.module.css";
import { useSession } from "next-auth/react";

function AddProduct() {
    const [selectFile,setSelectFile]=useState(null)
    const {data:session,status}=useSession()
    const handleFileChange = (event) => {
        setSelectFile(event.target.files[0]);
      };
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    author: "",
    editorial: "",
    numberPages: "",
    bookbinding: "",
    copies: "",
    description: "",
    cover: ".jpg"
  });

  const handleChange = (e) => { //el evento generado por el cambio en el campo de entrada)
    const { name, value } = e.target; //const { name, value } = e.target; extrae los atributos name y value del elemento que desencadenó el evento (e.target)
    setFormData({ ...formData, [name]: value }); //rea una copia del estado actual de formData, luego actualiza la propiedad cuyo nombre coincide con name con el nuevo value
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // evita que el formulario se envíe de la manera convencional, lo que evitaría que la página se recargue

    console.log("Sending data:", formData);

    const response = await fetch("http://127.0.0.1:5000/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${session?.user?.access_token}`  //sto especifica que el contenido de la solicitud es de tipo JSON.
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok){
      console.log()
    }
    if (response.ok) {
      const newBook = await response.json();
      console.log("Book created:", newBook);
      
      setFormData({
        title: "",
        price: "",
        author: "",
        editorial: "",
        numberPages: "",
        bookbinding: "",
        copies: "",
        description: "",
        cover: ".jpg"
      });
    } else {
      console.error("Error creating book");
    }
  };

  return (
    <div className={style.main}>
      <h1>Add Product</h1>
      <form className={style.add} onSubmit={handleSubmit}>
        <div className={style.left}>
          <div className={style.input}>
            <h3>Titulo</h3>
            <input name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div className={style.input}>
            <h3>Precio</h3>
            <input name="price" value={formData.price} onChange={handleChange} />
          </div>
          <div className={style.input}>
            <h3>Autor</h3>
            <input name="author" value={formData.author} onChange={handleChange} />
          </div>
          <div className={style.input}>
            <h3>Editorial</h3>
            <input name="editorial" value={formData.editorial} onChange={handleChange} />
          </div>
          <div className={style.input}>
            <h3>Numero de Paginas</h3>
            <input name="numberPages" value={formData.numberPages} onChange={handleChange} />
          </div>
          <div className={style.input}>
            <h3>Encuadernado</h3>
            <input name="bookbinding" value={formData.bookbinding} onChange={handleChange} />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.input}>
            <h3>Numero de copias</h3>
            <input name="copies" value={formData.copies} onChange={handleChange} />
          </div>
          <div className={style.input}>
            <h3>Descripcion</h3>
            <input name="description" value={formData.description} onChange={handleChange} />
          </div>
         
        </div>
        
        <button className={style.save} type="submit">Save Product</button>
      </form>
        
    </div>
  );
}

export default AddProduct;
