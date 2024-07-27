'use client'

import style from "./page.module.css"
import { useState,useEffect } from "react";
import TabAdmin from "@/app/components/admin/tabAdmin";
import TabHead from "@/app/components/admin/tabHead";
import RowsUser from "./rowsUser";
import MenuAdmin from "@/app/components/admin/menuAdmin";

function users() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://127.0.0.1:5000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error("Error al obtener los libros:", error));
  };



  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResult !== null ? searchResult : data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.userMain}>
        <MenuAdmin></MenuAdmin>
    
        <div className={style.products}>
      
      <hr />
      <h1>Usuarios</h1>
      
      <hr />
      {currentItems.map((user) => (
        <RowsUser
          key={user.id}
          id={user.id}
          username={user.username}
          email={user.email}
          password={user.password}
          role={user.role}

          fetchData={fetchData}
        />
      ))}
      <div className={style.pagination}>
        {searchResult === null && data.length > itemsPerPage && (
          <ul className={style.pageNumbers}>
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
              <li key={index} className={currentPage === index + 1 ? style.activePage : ''}>
                <button className={style.indexbutton} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </div>
  );
}

export default users;
