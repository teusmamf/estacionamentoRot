import React from "react";
import TextoSobreNos from "../components/AboutUStext";
import ServicesText from "../components/servicetext";
import Footer from "../components/footer";


export default function SobreNos(){
    return (
        <div>
             <TextoSobreNos/>
             <ServicesText/>
             <Footer/>
        </div>
    )
}