import React from "react";
const FeatureBox = (props) => {
    return ( 
        <div id="Caixa-set">
            <div className="Caixa-set-a">
                <img src={props.image} alt="foto"/>
            </div>
            <div className="Caixa-set-a"></div>
            <h2>{props.title}</h2>
            <p>{props.p}</p>
        </div>
        
        
     );
}
 
export default FeatureBox;