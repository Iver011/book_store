'use client'
import Product from "@/app/components/pages/product/product";
import Options from "@/app/components/pages/options";
import TopMenu from "@/app/components/pages/topMenu";
import Footer from "@/app/components/pages/homepage/footer";
import Info from "@/app/components/pages/homepage/info";


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