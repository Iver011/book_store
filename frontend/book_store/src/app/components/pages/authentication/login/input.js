import style from "./input.module.css"


function Input({title,val,handleChange}){


    return(
        <div className={style.conteiner}>
            <h3>{title}</h3>
            <input name={title} value={val} onChange={handleChange}></input>
        </div>
    );


}export default Input;