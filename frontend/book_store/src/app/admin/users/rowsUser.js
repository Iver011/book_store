import { useState, useEffect } from "react";
import style from "./rowsUser.module.css";
import { useAuth } from "../../login/authContext";
function RowsUser({
  id,
  username,
  email,
  password,
  role,
  fetchData,
}) {
  
  

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

  

  return (
    <div className={style.row}>
        <div className={style.id}>{id}</div>
        <div className={style.username}>{username}</div>
        <div className={style.email}>{email}</div>
        <div className={style.password}>{password}</div>
        <div className={style.role}>{role}</div>
    </div>
  );
}

export default RowsUser;
