import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useAuth } from "../login/authContext";
import style from "./report.module.css"
const ReportPDF = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/books").
    then(res=>res.json()).
    then(data=>{
        setData(data)
    })
  }, []);
    console.log(data)
  

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("Reporte de Libros", 14, 20);
    doc.autoTable({
      head: [['ID', 'Titulo', 'Autor', 'Editorial', 'Precio','Disponibles']],
      body: data.map(book => [book.id, book.title, book.author, 
          book.editorial, book.price, book.copies]),
      startY: 30,
    });

    doc.save("reporte_libros.pdf");
  };

  return (

    <div className={style.report}>
      
      <button className={style.button} onClick={generatePDF}>Descargar reporte PDF</button>
    </div>
  );
};

export default ReportPDF;
