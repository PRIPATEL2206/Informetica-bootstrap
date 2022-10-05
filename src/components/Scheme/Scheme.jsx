import React from "react";
import "./scheme.css";
import Educationfile from "../../data/Education.json";
import Farmerfile from "../../data/Farmer.json";
import Womenfile from "../../data/Women.json";
import Otherfile from "../../data/Other.json";
import { useState } from "react";
// import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";


const Scheme = (scarch) => {

let Education=Educationfile.filter(scheme => scheme.keyword.includes(scarch.scarch))

let Farmer=Farmerfile
let Women=Womenfile
let Other=Otherfile


  const [EducationIndex, setEducationIndex] = useState(0);
  const [FarmerIndex, setFarmerIndex] = useState(0);
  const [WomenIndex, setWomenIndex] = useState(0);
  const [OtherIndex, setOtherIndex] = useState(0);


 let sortedEducation=Education.slice(EducationIndex,EducationIndex+4)
 let sortedFarmer=Farmer.slice(FarmerIndex,FarmerIndex+4)
 let sortedWomen=Women.slice(WomenIndex,WomenIndex+4)
 let sortedOther=Other.slice(OtherIndex,OtherIndex+4)

  let moveright= (scheme)=>{
    if(scheme==="education"){
    let indexNow=Math.min(EducationIndex,Math.max(Education.length-5,0));
    setEducationIndex(indexNow+1);
  }
    else if(scheme==="Farmer"){
    // let indexNow=FarmerIndex;
    let indexNow=Math.min(FarmerIndex,Math.max(Farmer.length-5,0));
    console.log(indexNow)
    setFarmerIndex(indexNow+1)
  }
   else if(scheme==="Women"){
    let indexNow=Math.min(WomenIndex,Math.max(Women.length-5,0));
    setWomenIndex(indexNow+1)
  }
   else if(scheme==="Other"){
    let indexNow=Math.min(OtherIndex,Math.max(Other.length-5,0));
    setOtherIndex(indexNow+1)
  }
}

  let moveleft= (scheme)=>{
    if(scheme==="education"){
      let indexNow=Math.max(EducationIndex,1);
      setEducationIndex(indexNow-1)
    }

    else if(scheme==="Farmer"){
      let indexNow=Math.max(FarmerIndex,1);
      setFarmerIndex(indexNow-1)
    }
     else if(scheme==="Women"){
      let indexNow=Math.max(WomenIndex,1);
      setWomenIndex(indexNow-1)
    }
     else if(scheme==="Other"){
      let indexNow=Math.max(OtherIndex,1);
      setOtherIndex(indexNow-1)
    }


    
  } 
  // var objects = [1, 2, 3, 4, 5];
  return (
    <div className="scheme" id="blur3">
      <div className="schemeHeading">Scheme</div>
      <div className="schemeType">
        <div className="mainBox">
          <h3 className="SchemeTypeHeading">Education</h3>
          <div className="schemeBox">
            <div className="leftSlider" onClick={()=>moveleft("education")}>&lt;</div>
            <div className="middle" name="slider">
              {sortedEducation &&
                sortedEducation.map((photo,index) => {
                  return (
                    <div data-target="#carouselExampleIndicators" className="imageBox" key={photo.imageId}>
                      <img src={photo.path} alt="None" />
                    </div>
                  );
                })}
            </div>
           <div onClick={()=>moveright("education")} className="rightSlider">&gt;</div>
          </div>
        </div>
        <div className="mainBox">
          <h3 className="SchemeTypeHeading">Farmer</h3>
          <div className="schemeBox">
            <div className="leftSlider" onClick={()=>moveleft("Farmer")}>&lt;</div>
            <div className="middle">
              {sortedFarmer &&
                sortedFarmer.map((photo) => {
                  return (
                    <div className="imageBox" key={photo.imageId}>
                      <img src={photo.path} alt="None" />
                    </div>
                  );
                })}
            </div>
            <div onClick={()=>moveright("Farmer")} className="rightSlider">&gt;</div>
          </div>
        </div>
        <div className="mainBox">
          <h3 className="SchemeTypeHeading">Women</h3>
          <div className="schemeBox">
            <div className="leftSlider" onClick={()=>moveleft("Women")}>&lt;</div>
            <div className="middle">
              {sortedWomen &&
                sortedWomen.map((photo) => {
                  return (
                    <div className="imageBox" key={photo.imageId}>
                      <img src={photo.path} alt="None" />
                    </div>
                  );
                })}
            </div>
            <div onClick={()=>moveright("Women")} className="rightSlider">&gt;</div>
          </div>
        </div>
        <div className="mainBox">
          <h3 className="SchemeTypeHeading">Other</h3>
          <div className="schemeBox">
            <div className="leftSlider" onClick={()=>moveleft("Other")}>&lt;</div>
            <div className="middle">
              {sortedOther &&
                sortedOther.map((photo) => {
                  return (
                    <div className="imageBox" key={photo.imageId}>
                      <img src={photo.path} alt="None" />
                    </div>
                  );
                })}
            </div>
            <div className="rightSlider" onClick={()=>moveright("Other")}>&gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheme;
