import MenuAdmin from "./menuAdmin";
import style from "./adminProducts.module.css";
import TabAdmin from "./tabAdmin";
import TabHead from "./tabHead";
import Rows from "./rows";
import { useState, useEffect } from "react";

function AdminProducts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [data, setData] = useState([]);
  const [searchResult, setSearchResult] = useState(null);

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

  const handleSearch = (query) => {
    if (query === "") {
      setSearchResult(null);
    } else {
      const result = data.find((book) => book.id.toString() === query);
      setSearchResult(result ? [result] : []);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = searchResult !== null ? searchResult : data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={style.products}>
      <TabAdmin handleSearch={handleSearch} />
      <hr />
      <TabHead />
      <hr />
      {currentItems.map((book) => (
        <Rows
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          editorial={book.editorial}
          price={book.price}
          numPages={book.number_pages}
          bookbinding={book.bookbinding}
          copies={book.copies}
          description={book.description}
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
  );
}

export default AdminProducts;
