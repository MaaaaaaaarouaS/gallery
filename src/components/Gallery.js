import React, { useState } from "react";
import Images from "./Images";
import Navigation from './Navigation'
import data from '../data'
import { Button } from "@material-ui/core";
import { Icon } from '@iconify/react';
export default function Galerry() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="Body_gallery">
    <Navigation/>
      <div className="container">
        <div className="imgContainer">
          {data.gallery.map(data => (
            <div key={data.ID} className="imgcontainer2" style={{ boxShadow: selectedImg === data.image ? "0px 0px 5px 5px #f1c232" : ""}}>
            <img
              key={data.ID}
              src={data.image}
              alt="dog"
              onClick={() => setSelectedImg(data.image)}
            />
            <h4>{data.title}</h4>
            </div>
          ))
          }
          <Button component="label"><input type="file" hidden/><Icon className="icongallery" icon="akar-icons:plus"/></Button>
         </div>
        <div className="imgContainer3">
            <img src={selectedImg} alt="Selected" className="selected" />
            <h4 style={{fontSize:'23px',marginLeft:'30px',marginTop:'-8%'}}>Album Ninja</h4>
            <div style={{marginLeft:'-140px'}}>
                <Button><Icon className="icongallery" style={{backgroundColor: 'rgb(27, 2, 51)'}} icon="entypo:share"/></Button>
                <Button><Icon className="icongallery" style={{backgroundColor: 'rgb(253, 237, 9)'}} icon="ci:edit"/></Button>
            </div>
        </div>
        <div className="imgContainer4">
          {Images.map((img, index) => (
            <img
              key={index}
              src={img}
            />            
          ))
          }
        </div>
      </div>
    </div>
  );
}
