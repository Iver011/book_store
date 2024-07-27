import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useAuth } from "../login/authContext";
import style from "./report.module.css"
const ReportPDF = () => {
  const [data, setData] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/solicitudes", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.text("Reporte de Libros", 14, 20);
    doc.autoTable({
      head: [['ID', 'Nombre', 'Apellido', 'Email', 'Telefono','Solicitud']],
      body: data.map(book => [book.id, book.nombre_cliente, book.apellido_cliente, 
          book.email, book.telefono, book.solicitud_cliente]),
      startY: 30,
    });

    doc.save("reporte_Sol.pdf");
  };

  return (
    <div className={style.report}>
      
      <button className={style.button} onClick={generatePDF}>Descargar reporte PDF</button>
    </div>
  );
};

export default ReportPDF;
