
import style from "./features.module.css"

function Features(){


    return(
        <div className={style.main}>
            <div className={style.homepage}>
                <i className="fas fa-truck"></i>
                <h3>Envios a todo el pais</h3>
                <p>
                ¡Realiza tu pedido hoy y obtén el envío GRATIS a cualquier parte! No te lo pierdas.</p>
            </div>
            <div className={style.homepage}>
                <i className="fas fa-award"></i>
                <h3>Calidad Garantizada</h3>
                <p>Compre con confianza con nuestra Garantía de Satisfacción: Ámalo o recibe un reembolso.</p>
            </div>
            <div className={style.homepage}>
                <i className="fas fa-shield-alt"></i>
                <h3>Seguridad</h3>
                <p>Su seguridad es nuestra prioridad. Tus pagos están seguros con nosotros.</p>
            </div>
        </div>
    );

}export default Features;