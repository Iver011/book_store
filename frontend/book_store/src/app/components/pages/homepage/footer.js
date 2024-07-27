import style from "./footer.module.css"


function Footer(){


    return(


        <div className={style.footer}>

            <div className={style.newsletter}>
                <div className={style.conteiner}>
                    <div className={style.title}>
                        <h2>Enterate de todas nuestras novedades</h2>
                        <p>Nos encanta sorprender a nuestros suscriptores con regalos ocasionales.
                        </p>
                    </div>
                </div>
                <div className={style.register}>
                    <div className={style.input}>
                        <input placeholder="Ingresa un usuario"></input>
                        <input placeholder="Ingresa un correo Electronico"></input>
                        <input placeholder="Ingresa una contraseña" type="password"></input>
                    </div>
                    <button>Suscribirse Ahora</button>
                </div>
                    
                
            </div>

        </div>

    );

}export default Footer;