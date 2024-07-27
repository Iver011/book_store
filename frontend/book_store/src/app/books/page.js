'use client'
import style from "./listingPage.module.css"
import Footer from "../components/pages/homepage/footer";
import Options from "../components/pages/options";
import ListingMain from "../components/pages/listing/listingMain";
import Info from "../components/pages/homepage/info";
import TopMenu from "../components/pages/topMenu";
import { useState } from "react";
function ListingPage(){

    const [footer,setFooter]=useState(true)

    return(<div className={style.listingPage}>

<TopMenu></TopMenu>
      <Options></Options>
      <ListingMain/>
        
        <div>{
          footer?(
            <Footer></Footer>
          ):(<></>)
          }</div>
            
       <Info></Info>

    </div>)

}export default ListingPage;