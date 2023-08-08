import React from "react";
import './Bomba.css';
import Feature from "./Feature";
import About from "./Sobre";
import ImagemSobre from '../../img_sobre/Recife_AEREO.png';
import Video from "./Video";
import { NavBarra } from '../../components/NavBarra/NavBarra';
import AnimatedPage from "../../components/Animate/AnimatedPage";
import { Link, Element } from 'react-scroll';




export const Conteudo = () => {
    return ( <>
        <NavBarra/>
                <AnimatedPage>
        <div id="main" style={{width:'100%', height:'599px', position:'relative', backgroundRepeat:'no-repeat', overflow:'hidden'}}>
        <Video/>
          <div style={{fontFamily:'Inter',position:'absolute',left:'12%',width:'500px',top:'31%'}} className="name">
          <div className="Fundo" >
            <h1 style={{fontFamily:'Inter',color:'#ffffff', letterSpacing:'-1px',fontWeight:'700',fontSize:'50px'}}><span style={{color:'#ff8e3c'}}>Ouvidoria.HUB</span><br/> Aqui você tem voz!</h1>
            <p style={{fontFamily:'Inter',color:'#ffffff', letterSpacing:'-1px',fontWeight:'500'}}> Feedbacks e denúncias sem burocracia, Começe já!</p>
            <a style={{fontFamily:'Inter',color:'#ffffff', letterSpacing:'-1px',fontWeight:'500', textDecoration:'none'}} href="/landing" className="Butao-Landing">Entrar</a>
          </div>
          </div>
        </div>
        <Feature/>
        <Element name='Sobre'> <About image={ImagemSobre} title='Sobre'/> </Element>
        
        </AnimatedPage>
    </> );
}
 
