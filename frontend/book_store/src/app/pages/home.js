
import styles from "./home.module.css"
import TopMenu from "../components/pages/topMenu";
import Options from "../components/pages/options";
import Features from "../components/pages/homepage/features";
import BestSeller from "../components/pages/homepage/bestSeller";
import LastIncome from "../components/pages/homepage/lastIncome";
import Footer from "../components/pages/homepage/footer";
import Info from "../components/pages/homepage/info";
import MainPanel from "../components/pages/homepage/mainPanel";
import { useEffect, useState } from "react";

function HomePage(){
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://127.0.0.1:5000/api/books").
        then(res=>res.json()).
        then(data=>{setData(data)
        })
    },[])
    console.log(data)
    const lastData=data.slice(-4)
    console.log(lastData)


return(
        <div className={styles.home}>

<TopMenu></TopMenu>
      <Options></Options>
      <MainPanel></MainPanel>
      <Features></Features>
      <div className={styles.bestseller}><BestSeller ></BestSeller></div>
      
      <div className={styles.income}><LastIncome books={lastData}></LastIncome></div>
      <Footer></Footer>
      <Info></Info>
      


        </div>
    );

}export default HomePage;