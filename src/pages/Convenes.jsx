import React from "react";
import ConvenesGrid from "../components/ConveneGrid";
import ConvenesData from "../../public/assets/images/convenes/convenesData";

export default function ConvenesPage(){
    return (
        <div>
            <ConvenesGrid convenes={ConvenesData}/>

        </div>
    )
}