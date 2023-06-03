import React  from "react";
import SliderComponent from "../components/slider";
import CompanyGrid from "../components/companyGrid";
import empresas from "../../public/assets/images/companiesData";
import PartnersGrid from "../components/PartnersGrid";
import PartersData from "../../public/assets/images/Partners/PartnersData";
import Footer from "../components/footer";
export default function Home(){

    return (
  
        <div>
            <SliderComponent/>
            <h3 className="unity_title">Unidades</h3>
            <CompanyGrid companies={empresas}/>

            <h3 className="partners_title">Parceiros</h3>
            <PartnersGrid partners={PartersData}/>

             <Footer/> 
        </div>
    )
}