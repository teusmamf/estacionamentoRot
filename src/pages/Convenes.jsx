import React from "react";
import ConvenesGrid from "../components/ConveneGrid";
import ConvenesData from "../../public/assets/images/convenes/convenesData";
import Footer from "../components/footer";
export default function ConvenesPage(){
    return (
        <div>
            <h3 className="unity_title">Convênios</h3>
            <ConvenesGrid convenes={ConvenesData}/>
            <Footer/>
        </div>
    )
}