import Title from "../product/title";
import style from "./listingMain.module.css"
import MenuListing from "./menulisting";
import ProductListing from "./productlisting";


function ListingMain(){


    return (
    
    <div className={style.main}>
    <Title title={"Todos los productos"}></Title>
    <div className={style.conteiner}>
        <div className={style.menu}>
        <MenuListing></MenuListing>
        </div>
    
    <div className={style.products}>
    <ProductListing></ProductListing>
    </div>
        
    </div>
    </div>);
}export default ListingMain;