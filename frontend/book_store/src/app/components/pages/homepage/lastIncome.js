import style from "./lastIncome.module.css"
import BookCard from "./bookCard";
function LastIncome({books}){



    console.log(books)
    return(
    
    <div className={style.main}>
    
            <h4>NOVEDADES</h4>
            <h2>Recien Ingresados</h2>
            <div className={style.conteiner}>
                {
                    books.map((book)=>(
                        <BookCard   id={book.id}
                                    title={book.title}
                                    copies={book.copies}
                                    price={book.price}>
                                        
                                    </BookCard>
                    ))
                }
            </div>
    
    </div>);

}export default LastIncome;