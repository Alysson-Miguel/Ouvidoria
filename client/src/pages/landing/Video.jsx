import React from "react";
import Video_1 from '../../img_sobre/Video_Funcional.mp4';


const video = () => {
    return ( 
        <div style={{width:'100%', height:'100vh'}} className="bgContainer">
            <div className="overlay">
                <video style={{width:'100%', height:'100%', objectFit:'cover',marginBottom:'50px'}} src={Video_1} autoPlay loop muted/>
                <div className="container">
                    
                </div>
            </div>
        </div>
     );
}
 
export default video;