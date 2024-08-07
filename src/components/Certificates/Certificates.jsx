import React from "react";
import ImageGallery from 'react-image-gallery';

import { images } from "./Certificates_Images";


export default function Certificates() {
  return (
    <>
     <h1 className="text-success fontClass" align="center">
        {" "}
       Certificates
      </h1> 
    
      <ImageGallery   items={images} />
    </>
  );
}
