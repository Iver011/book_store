import style from "./info.module.css"

function Info(){




    return (
        <div className={style.conteiner}>
            <div className={style.first}>
                <div className={style.logo}>
                <img src="../logo2.svg"></img>
                    <h2>BookStore</h2>
                </div>
                <p>La Paz-Bolivia Ciudad Satelite calle 23 n 23</p>
                <div className={style.social}>
                    <a href="https://github.com/Iver011" target="_blank"><i className="fab fa-github"></i></a>
                    <  i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook"></i>
                </div>
            </div>
            <div className={style.second}>
                <h2>SUPPORT</h2>
                <div className={style.content}><h4>FAQ</h4>
                <h4>Term of Use</h4>
                <h4>Privacy Policy</h4></div>
                
            </div>
            <div className={style.second}>
                <h2>COMPANY</h2>
                <div className={style.content}>
                <h4>About Us</h4>
                <h4>Contact</h4>
                <h4>Careers</h4>
                </div>
            </div>
            <div className={style.second}>

                <h2>SHOP</h2>
                <div className={style.content}>
                <h4>My account</h4>
                <h4>Checkout</h4>
                <h4>Card</h4>
                </div>
            </div>
            <div className={style.fifth}>
                <h2>INFORMACION ADICIONAL</h2>
                <div className={style.card}>
                <i className="fab fa-cc-visa icon visa-icon"></i>
                <i className="fab fa-cc-mastercard icon mastercard-icon"></i>
                <i className="fab fa-x-twitter icon x-icon"></i>
                </div>
                
            </div>

        </div>


    );


}export default Info