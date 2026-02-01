import React from "react";
import NavBar from "../components/NavBar"
import MainContent from "../components/MainContent"
import Footer from "../components/Footer"
import { motion } from "motion/react";

const Home=()=>{
    return(
        <>
        <NavBar></NavBar>
        <MainContent></MainContent>
        <Footer></Footer>
        </>
    )

}
export default Home;