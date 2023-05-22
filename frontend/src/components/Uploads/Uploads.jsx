import React from "react";
import "./uploads.scss"
import Videos from "./Filetype/Videos";
import OtherFiles from "./Filetype/OtherFiles";
import Audios from "./Filetype/Audios";


const Uploads = () => {
  return <div className="upload">

     <Videos/>
     <Audios/>
     <OtherFiles/>


  </div>;
};

export default Uploads;
