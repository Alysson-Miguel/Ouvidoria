import React from "react";
import FeatureBox from "./FeatureBox";
import FeatureImage from '../../img_sobre/OutroAbout.png';
import FeatureImage2 from '../../img_sobre/Feature_2.png';
import FeatureImage3 from '../../img_sobre/Feature_3.png';
const Feature = () => {
    return ( 
        <div style={{width:'90%',display:'flex',justifyContent:'space-evenly',alignItems:'center',margin:'auto'}} id="Valores">
            <div style={{padding:'20px',color:'#2a2a2a'}} className="caixas">
                <FeatureBox image={FeatureImage} title='Missão' p='Criar uma experiência agradável para os residentes de Recife, proporcionando soluções rápidas e simples para as população. Nosso foco é resolver seus problemas com agilidade e cuidado.'/>
            </div>
            <div style={{padding:'20px',color:'#2a2a2a',marginTop:'25px'}} className="caixas">
                <FeatureBox image={FeatureImage2} title='Visão'  p='Oferecer a todos os cidadãos uma plataforma segura e anônima para fazer denúncias problemas e questões em suas regiões.'/>
            </div>
            <div style={{padding:'20px',color:'#2a2a2a'}} className="caixas">
                <FeatureBox image={FeatureImage3} title='Valores' p='Inovação: Estamos sempre buscando novas ideias. Integridade: Agimos com honestidade e ética. Empatia: Colocamos as necessidades e experiências das pessoas no centro.'/>


            </div>
        </div>
     );
}
 
export default Feature;