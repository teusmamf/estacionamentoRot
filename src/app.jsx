import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardEmpresa from "./components/companies";
import Contatenos from "./pages/contate-nos";
import empresas from "./assets/images/companiesData";
import Navbar from "./components/navbar";
import SobreNos from "./pages/sobrenos";
import PartersData from "./assets/images/Partners/PartnersData";
import PartnerCard from "./components/Partners";
import ConvenesData from "./assets/images/convenes/convenesData";
import ConvenesCard from "./components/ConvenesCard";
import ConvenesPage from "./pages/Convenes";

export default function App() {
  const Companies = empresas.map((empresa) => {
    return (
      <CardEmpresa
        key={empresa.id}
        name={empresa.Address}
        photo={empresa.photo}
        url={empresa.url}
        linkwpp={empresa.linkwpp}
        contact={empresa.contact}
        func={empresa.func}
        complement={empresa.complement}
      />
    );
  });

        const Partners  = PartersData.map((Partner) => {
            return (
              <PartnerCard
                key={Partner.id}
                name={Partner.name}
                photo={Partner.photo}
              />

            )
        })


        const Convenes = ConvenesData.map((Convene)=> {
          return (
            <ConvenesCard
              key={Convene.id}
              name={Convene.name}
              photo={Convene.photo}
            />
          )
        })

  return (
    <Router>
      <div className="app_container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contate-nos" element={<Contatenos />} /> 
           <Route path="/Aboutus" element={<SobreNos />} />
          <Route path="/Convenes" element={<ConvenesPage />} /> 
        </Routes>
        
      </div>
     
    </Router>
  );
}
