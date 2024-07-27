import { useState, useEffect } from "react";

const AllBooksFetcher = ({ children }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/books`)
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(error => console.error("Error fetching all books:", error));
  }, []);

  return children(books);
};

export default AllBooksFetcher;