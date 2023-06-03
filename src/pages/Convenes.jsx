import React from "react";
import ConvenesGrid from "../components/ConveneGrid";
import ConvenesData from "../assets/images/convenes/convenesData";

export default function ConvenesPage(){
    return (
        <div>
            <ConvenesGrid convenes={ConvenesData}/>

        </div>
    )
}