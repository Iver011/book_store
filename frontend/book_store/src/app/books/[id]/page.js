'use client'
import Product from "../../components/pages/product/product";
import TopMenu from "../../components/pages/topMenu";
import Options from "../../components/pages/options";
import Footer from "../../components/pages/homepage/footer";
import Info from "../../components/pages/homepage/info";
function ProductPage({ params }) {
    const { id } = params;
  
    return (
      <div className="product">
        <TopMenu></TopMenu>
        <Options></Options>
        <Product id={id}></Product>
        <Footer></Footer>
        <Info></Info>
      </div>
    );
  }
  
  export default ProductPage;