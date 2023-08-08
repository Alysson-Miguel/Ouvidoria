import React from "react";
import Video_1 from '../../img_sobre/Video_Funcional.mp4';
import ImagemSobre from '../../img_sobre/Recife_AEREO.png';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const About = (props) => {
    return ( 
    <div id="sobreG" style={{marginTop:'90px',padding:'0px',height:'80%',width:'99.5vw'}}>
        <div className="overlay">
            <Image style={{width:'99.5vw', height:'90vh', objectFit:'cover',marginBottom:'0px'}} src={ImagemSobre}/>
            <div style={{fontFamily:'Inter',display:'flex', position:'absolute',left:'-25%',width:'100%',top:'7%',justifyItems:'space-evenly',alignItems:'center',flexDirection:'column'}} className="name">
                    <div className="Fundo" style={{backgroundColor:'',padding:'20px',width:'40%'}} >
                        <h1 style={{fontFamily:'Inter',color:'#ffffff', letterSpacing:'-1px',fontWeight:'700',fontSize:'40px'}}><span style={{color:'#ff8e3c'}}>Sobre</span><br/></h1>
                        <p style={{fontFamily:'Inter',color:'#ffffff', letterSpacing:'-1px',fontWeight:'500',fontSize:'20px'}}> Nosso website de denúncias é mais do que uma simples ferramenta, é uma mudança positiva na comunidade. Ao denunciar problemas, você não apenas contribui para a solução de questões cruciais, mas também torna-se parte de um movimento poderoso e transformador.</p>
            
                    </div>
                    <div className="Fundo" style={{backgroundColor:'',padding:'20px',width:'40%'}} >
                        <h1 style={{fontFamily:'Inter',color:'#ffffff', letterSpacing:'-1px',fontWeight:'700',fontSize:'40px'}}><span style={{color:'#ff8e3c'}}>Nosso Time</span><br/></h1>
                        <p style={{fontFamily:'Inter',color:'#ffffff', letterSpacing:'-1px',fontWeight:'500',fontSize:'20px'}}> Somos uma equipe de cinco jovens “QUINTETO” do Start, Rede Cidadã, com foco na reinvindicações dos moradores do Recife, problemas como iluminação, buracos, esgotos, sinalização e outras necessidades a mais. Nosso intuindo foi criar um site para tornar a comunicação mais fácil, menos burocrática e melhorar os problemas da região.</p>
         </div>
         <div style={{fontFamily:'Inter',position:'absolute',left:'100%',top:'40%',width:'200px'}} className="Contato">
          <div className="Fundo" >
            <a style={{fontFamily:'Inter',color:'#ffffff', letterSpacing:'-1px',fontWeight:'500', textDecoration:'none',position:'absolute',left:'0%',top:'30px',width: '140px',height: '50px',justifyContent: 'center',alignItems:'center',backgroundColor:'#ff8e3c',borderRadius: '10px',display:'flex'}} href="/contato" className="Butao-Landing">Conheça o time</a>
          </div>
        </div>
          </div>
            
        </div>

    </div> );
}
 
export default About;