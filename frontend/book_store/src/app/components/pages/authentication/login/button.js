import style from "./button.module.css"


function Button({text,handleClick}){

    return(
        <div className={style.button}>
            <button onClick={handleClick}>{text}</button>

        </div>
    );

}export default Button;