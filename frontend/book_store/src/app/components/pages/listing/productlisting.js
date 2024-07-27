import React, { useEffect, useState } from 'react';
import BookCard from '../homepage/bookCard';
import style from './productlisting.module.css'; // Asegúrate de ajustar la ruta al archivo de estilos correctamente
import AllBooksFetcher from '@/app/hooks/useBooks';
import Link from 'next/link';
const YourComponent = () => {


const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage]=useState(6);
const [data,setData]=useState([])

const books = Array.from({ length: data.length });
useEffect(() => {
  fetchData();
}, []);

const fetchData = () => {
  fetch("http://127.0.0.1:5000/api/books")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => console.error("Error al obtener los libros:", error));
};
console.log(data)

if (!data) {
  return <p>Cargando libros...</p>; // Opcionalmente, puedes mostrar un indicador de carga
}

const totalPages = Math.ceil(books.length / itemsPerPage);

const handleClick = (page) => {
    setCurrentPage(page);
};
const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

return (
    <div className={style.conteiner}>
      <div className={style.title}>
        <h3>Filtros Aplicados: </h3>
        <div className={style.filter}>
          <p>texto</p>
          <i className="fas fa-times"></i>
        </div>
      </div>
      <div className={style.count}>
        <p>Mostrando {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, books.length)} de {books.length} resultados : </p>
      </div>
      <div className={style.products}>
        {currentItems.map(book => (
         
            <BookCard id={book.id} title={book.title} copies={book.copies} price={book.price}  />
        
          
        ))}
      </div>

      <div className={style.pagination}>
      <button onClick={handlePrev} disabled={currentPage === 1}>
      <i className='fas fa-arrow-left' ></i>
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? style.activePage : ''}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <i className='fas fa-arrow-right' ></i>
        </button>
      </div>
    </div>
  );
};

export default YourComponent;
