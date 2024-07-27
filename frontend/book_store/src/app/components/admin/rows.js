import { useState, useEffect } from "react";
import style from "./rows.module.css";
import { useAuth } from "@/app/login/authContext";

function Rows({
  id,
  title,
  author,
  editorial,
  price,
  numPages,
  bookbinding,
  copies,
  description,
  fetchData,
}) {
  
  const { token } = useAuth(); // Obtener el token del contexto
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    title: title,
    author: author,
    editorial: editorial,
    price: price,
    numberPages: numPages,
    bookbinding: bookbinding,
    copies: copies,
    description: description,
  });

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        cancelEdit();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleEdit = () => {
    setUpdatedData({
      title: title,
      author: author,
      editorial: editorial,
      price: price,
      numberPages: numPages,
      bookbinding: bookbinding,
      copies: copies,
      description: description,
    });
    setIsEditing(true);
  };

  const handleSave = (id) => {
    fetch(`http://127.0.0.1:5000/api/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // Añadir el token a las cabeceras
      },
      body: JSON.stringify(updatedData),
    })
      .then(() => {
        setIsEditing(false);
        fetchData();
      })
      .catch((error) => console.error("Error al editar libro", error));
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setUpdatedData({
      title: title,
      author: author,
      editorial: editorial,
      price: price,
      numberPages: numPages,
      bookbinding: bookbinding,
      copies: copies,
      description: description,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const deleteBook = async (id) => {
    const userResponse = window.confirm("Esta seguro de eliminar este elemento?");
    if(userResponse){
        fetch(`http://127.0.0.1:5000/api/books/${id}`, {
            method: "DELETE",
            headers:{
              "Authorization": `Bearer ${token}` // Añadir el token a las cabeceras
            }
          })
            .then(() => {
              fetchData();
            })
            .catch((error) => console.error("Error al eliminar libro", error));
    }
  };

  return (
    <div className={style.row}>
      <div className={style.id}>{id}</div>
      <div className={style.title}>
        {isEditing ? (
          <input
            className={style.edittitle}
            type="text"
            name="title"
            value={updatedData.title}
            onChange={handleChange}
          />
        ) : (
          title
        )}
      </div>
      <div className={style.author}>
        {isEditing ? (
          <input
            className={style.editauthor}
            type="text"
            name="author"
            value={updatedData.author}
            onChange={handleChange}
          />
        ) : (
          author
        )}
      </div>
      <div className={style.editorial}>
        {isEditing ? (
          <input
            className={style.editeditorial}
            type="text"
            name="editorial"
            value={updatedData.editorial}
            onChange={handleChange}
          />
        ) : (
          editorial
        )}
      </div>
      <div className={style.price}>
        {isEditing ? (
          <input
            className={style.editprice}
            type="text"
            name="price"
            value={updatedData.price}
            onChange={handleChange}
          />
        ) : (
          price
        )}
      </div>
      <div className={style.numPages}>
        {isEditing ? (
          <input
            className={style.editnumpages}
            type="text"
            name="numberPages"
            value={updatedData.numberPages}
            onChange={handleChange}
          />
        ) : (
          numPages
        )}
      </div>
      <div className={style.bookbinding}>
        {isEditing ? (
          <input
            className={style.editbookbinding}
            type="text"
            name="bookbinding"
            value={updatedData.bookbinding}
            onChange={handleChange}
          />
        ) : (
          bookbinding
        )}
      </div>
      <div className={style.copies}>
        {isEditing ? (
          <input
            className={style.editcopies}
            type="text"
            name="copies"
            value={updatedData.copies}
            onChange={handleChange}
          />
        ) : (
          copies
        )}
      </div>
      <p className={style.description}>
        {isEditing ? (
          <textarea
          className={style.editdescription}
            name="description"
            value={updatedData.description}
            onChange={handleChange}
          />
        ) : (
          description
        )}
      </p>
      <div className={style.mas}>
        <div className={style.edit}>
          {isEditing ? (
            <div className={style.editoption}>
              <button className={style.save} onClick={() => handleSave(id)}>
                <i className="fas fa-check"></i>
              </button>
              <button className={style.cancel} onClick={cancelEdit}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          ) : (
            <button className={style["edit-btn"]} onClick={handleEdit}>
              <i className="fas fa-edit"></i>
            </button>
          )}
        </div>
        <div className={style.delete}>
          <button className={style["delete-btn"]} onClick={() => deleteBook(id)}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rows;
